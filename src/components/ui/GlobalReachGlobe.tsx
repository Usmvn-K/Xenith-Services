'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HUBS = [
  // Pakistan
  { name: 'Karachi, PK', lat: 24.8607, lng: 67.0011, isHQ: true },
  { name: 'Islamabad, PK', lat: 33.6844, lng: 73.0479, isHQ: false },
  { name: 'Hyderabad, PK', lat: 25.3960, lng: 68.3578, isHQ: false },
  // UAE
  { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, isHQ: false },
  { name: 'Abu Dhabi, UAE', lat: 24.4539, lng: 54.3773, isHQ: false },
  // Qatar
  { name: 'Doha, QA', lat: 25.2854, lng: 51.5310, isHQ: false },
  // Saudi Arabia
  { name: 'Riyadh, SA', lat: 24.7136, lng: 46.6753, isHQ: false },
  { name: 'Jeddah, SA', lat: 21.4858, lng: 39.1925, isHQ: false },
];

export default function GlobalReachGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // HELPER: Lat/Lng to Vector3
    const radius = 2.2;
    const get3DPosition = (lat: number, lng: number, rad: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(rad * Math.sin(phi) * Math.cos(theta));
      const z = rad * Math.sin(phi) * Math.sin(theta);
      const y = rad * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // 1. BASE SPHERE
    const sphereGeo = new THREE.SphereGeometry(radius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xf0f7fc, // Clean liquid ice-blue/white
      roughness: 0.4,
      metalness: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // 2. CONTINENTAL MESH (Custom Shader to highlight operational regions)
    const textureLoader = new THREE.TextureLoader();
    const earthMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';
    
    textureLoader.load(earthMapUrl, (texture) => {
      const contGeo = new THREE.SphereGeometry(radius + 0.01, 64, 64);
      
      const uniforms = {
        map: { value: texture },
        colorIdle: { value: new THREE.Color(0x9ebfd9) }, // Subtle elegant slate/ice-blue
        colorActive: { value: new THREE.Color(0x0a4c7f) }, // Solid brand navy
        activePoints: { 
          value: [
            get3DPosition(30.3753, 69.3451, radius), // Pakistan Center
            get3DPosition(23.4241, 53.8478, radius), // UAE Center
            get3DPosition(25.2854, 51.5310, radius), // Qatar Center
            get3DPosition(23.8859, 45.0792, radius), // KSA Center
          ]
        },
        maxDistance: { value: 1.1 } // Spread radius for highlights
      };

      const contMat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
          varying vec3 vPos;
          varying vec2 vUv;
          void main() {
            // Keep local position for distance calculations
            vPos = position;
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D map;
          uniform vec3 colorIdle;
          uniform vec3 colorActive;
          uniform vec3 activePoints[4];
          uniform float maxDistance;
          varying vec3 vPos;
          varying vec2 vUv;
          
          void main() {
            vec4 texColor = texture2D(map, vUv);
            if (texColor.r < 0.1) discard; // mask out oceans

            float minDist = 100.0;
            for(int i=0; i<4; i++) {
              float dist = distance(vPos, activePoints[i]);
              minDist = min(minDist, dist);
            }

            // Blend based on distance to operational hubs
            float factor = 1.0 - smoothstep(0.0, maxDistance, minDist);
            vec3 finalColor = mix(colorIdle, colorActive, factor);
            float alpha = mix(0.2, 0.95, factor); // lower opacity for non-operational
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
      });

      const continents = new THREE.Mesh(contGeo, contMat);
      globeGroup.add(continents);
      setIsReady(true);
    });

    // 3. ATMOSPHERIC RIM GLOW
    const atmosGeo = new THREE.SphereGeometry(radius + 0.35, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
          gl_FragColor = vec4(0.05, 0.53, 0.79, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(atmosphere);

    // 4. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(-5, 5, 5);
    scene.add(dirLight);

    // 5. MARKERS & BEACONS
    const rings: { mesh: THREE.Mesh; scale: number; speed: number }[] = [];
    const markerGeo = new THREE.SphereGeometry(0.025, 16, 16);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); // white cores
    
    HUBS.forEach((hub) => {
      const pos = get3DPosition(hub.lat, hub.lng, radius);
      
      // White Core
      const dot = new THREE.Mesh(markerGeo, markerMat);
      dot.position.copy(pos);
      globeGroup.add(dot);

      // Glowing Beacon (Beam)
      const beamGeo = new THREE.CylinderGeometry(0.002, 0.015, 0.2, 8);
      beamGeo.translate(0, 0.1, 0); // anchor at base
      const beamMat = new THREE.MeshBasicMaterial({ 
        color: 0x0d88ca, 
        transparent: true, 
        opacity: 0.6,
        blending: THREE.AdditiveBlending 
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.copy(pos);
      beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
      globeGroup.add(beam);

      // Pulsing Ring
      const ringGeo = new THREE.RingGeometry(0.03, 0.06, 32);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: 0x0d88ca, 
        transparent: true, 
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0)); // align to surface
      globeGroup.add(ring);
      rings.push({ mesh: ring, scale: 1, speed: Math.random() * 0.5 + 1.5 });
    });

    // 6. ARCS (From KHI to other major hubs)
    const pkPos = get3DPosition(24.8607, 67.0011, radius); // Karachi
    const destHubs = [
      get3DPosition(25.2048, 55.2708, radius), // Dubai
      get3DPosition(25.2854, 51.5310, radius), // Doha
      get3DPosition(24.7136, 46.6753, radius), // Riyadh
    ];

    destHubs.forEach(destPos => {
      const dist = pkPos.distanceTo(destPos);
      const mid = pkPos.clone().add(destPos).multiplyScalar(0.5).normalize().multiplyScalar(radius + dist * 0.4);
      const curve = new THREE.CatmullRomCurve3([pkPos, mid, destPos]);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.012, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({ 
        color: 0x0d88ca, 
        transparent: true, 
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      const arc = new THREE.Mesh(tubeGeo, tubeMat);
      globeGroup.add(arc);
    });

    // RESIZE HANDLER
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // INTERACTION HANDLERS
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    // Center globe initially towards middle east/south asia region
    let targetRotationX = 0.3; 
    let targetRotationY = -1.0; 

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        
        // Limit vertical rotation to prevent flipping upside down
        targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
    };

    if (canvasRef.current) {
      canvasRef.current.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }

    // ANIMATION LOOP
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth damping rotation
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.1;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.1;

      // Auto rotation
      if (!isDragging) {
        targetRotationY += 0.0015;
      }

      // Animate pulsing rings
      rings.forEach((ringObj) => {
        const pulse = (Math.sin(elapsedTime * ringObj.speed + ringObj.mesh.position.x) + 1) * 0.5; 
        const scale = 1 + pulse * 0.8;
        ringObj.mesh.scale.set(scale, scale, scale);
        (ringObj.mesh.material as THREE.MeshBasicMaterial).opacity = 1 - pulse * 0.8;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('pointerdown', onPointerDown);
      }
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      cancelAnimationFrame(animationFrameId);
      
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      markerGeo.dispose();
      markerMat.dispose();
    };
  }, []);

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Headline & Live HUD */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0d88ca] animate-pulse" />
            <span className="text-xs font-semibold text-[#0a4c7f] tracking-wide uppercase">
              Global Operations Infrastructure
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0a2540] leading-tight">
            Architected Locally. <br />
            <span className="bg-gradient-to-r from-[#0a4c7f] to-[#0d88ca] bg-clip-text text-transparent">
              Deployed Across Borders.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            From localized enterprise resource engines and on-premise hardware arrays to high-availability cloud platforms, Xenith Services powers secure networks and mission-critical workflows globally.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-5 rounded-2xl shadow-xs">
              <span className="text-3xl font-black text-[#0a4c7f] block">200+</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                Deployments Worldwide
              </span>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-5 rounded-2xl shadow-xs">
              <span className="text-3xl font-black text-[#0d88ca] block">99.9%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                System Redundancy
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive True 3D Three.js Globe */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-[#0a4c7f]/10 to-[#0d88ca]/20 rounded-full blur-3xl pointer-events-none" />

          <div 
            ref={containerRef}
            className={`relative w-full max-w-[500px] aspect-square flex items-center justify-center transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-grab active:cursor-grabbing select-none"
              style={{ touchAction: 'none' }} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export { GlobalReachGlobe };