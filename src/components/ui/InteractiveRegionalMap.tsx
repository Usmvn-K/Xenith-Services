'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson-client';

interface HubData {
  id: string;
  name: string;
  code: string;
  lat: number;
  lng: number;
  activeSystems: string;
  coreSystems: string;
  isHQ?: boolean;
  flagUrl: string;
}

const HUBS: HubData[] = [
  {
    id: 'pk',
    name: 'Pakistan',
    code: 'PK',
    lat: 30.3753,
    lng: 69.3451,
    activeSystems: '83+ Active Systems',
    coreSystems: 'FBR POS, ERP Systems, Cloud Infrastructure',
    isHQ: true,
    flagUrl: 'https://flagcdn.com/w80/pk.png',
  },
  {
    id: 'ae',
    name: 'UAE',
    code: 'AE',
    lat: 25.2048,
    lng: 55.2708,
    activeSystems: '20+ Active Systems',
    coreSystems: 'Enterprise Cloud Sync, Access Control, Fleet Mgmt',
    flagUrl: 'https://flagcdn.com/w80/ae.png',
  },
  {
    id: 'qa',
    name: 'Qatar',
    code: 'QA',
    lat: 25.2854,
    lng: 51.5310,
    activeSystems: '67+ Active Systems',
    coreSystems: 'High-Availability ERP, Logistics Systems',
    flagUrl: 'https://flagcdn.com/w80/qa.png',
  },
  {
    id: 'sa',
    name: 'Saudi Arabia',
    code: 'SA',
    lat: 24.7136,
    lng: 46.6753,
    activeSystems: '30+ Active Systems',
    coreSystems: 'ZATCA Compliance, Warehouse Ops, Retail POS',
    flagUrl: 'https://flagcdn.com/w80/sa.png',
  },
];

export default function InteractiveRegionalMap() {
  const [geographies, setGeographies] = useState<any[]>([]);
  const [activeHub, setActiveHub] = useState<HubData | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then((res) => res.json())
      .then((worldData) => {
        // @ts-ignore
        const countries = topojson.feature(worldData, worldData.objects.countries).features;
        setGeographies(countries);
      })
      .catch((err) => console.error("Failed to load map data", err));
  }, []);

  // Projection zoomed deeply into the Middle East / South Asia Region
  const projection = useMemo(() => {
    return d3Geo.geoEquirectangular()
      .center([55, 25])
      .scale(1200)
      .translate([500, 312.5]); // Centered for the 1000x625 viewBox
  }, []);

  const pathGenerator = useMemo(() => {
    return d3Geo.geoPath().projection(projection);
  }, [projection]);

  const hqNode = HUBS.find((n) => n.isHQ)!;
  const hqCoords = projection([hqNode.lng, hqNode.lat]) || [0, 0];

  const handleMouseEnter = (hub: HubData, e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pinRect = e.currentTarget.getBoundingClientRect();

    // Center of the pin relative to the map container
    const x = pinRect.left - containerRect.left + pinRect.width / 2;
    const y = pinRect.top - containerRect.top;

    setActiveHub(hub);
    setTooltipPos({ x, y });
  };

  const handleMouseLeave = () => {
    setActiveHub(null);
    setTooltipPos(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-[2.55rem] bg-gradient-to-br from-[#e1f0fc] via-[#d0e9fa] to-[#bfe0f8] border-2 border-white shadow-[0_30px_70px_rgba(13,136,202,0.22)] p-6 sm:p-8 overflow-visible">
      {/* High-tech inner surface background */}
      <div className="absolute inset-0 rounded-[2.35rem] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#0a4c7f_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e1f0fc]/80 to-transparent" />
      </div>
      {/* Map Aspect Container */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/11] min-h-[420px] sm:min-h-[480px] overflow-visible select-none"
      >
        
        {/* High-Resolution Regional Map Base */}
        <svg
          viewBox="0 0 1000 625"
          className="w-full h-full object-contain pointer-events-none"
        >
          <defs>
            {/* Soft Ambient Radial Backlight */}
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d88ca" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0d88ca" stopOpacity="0" />
            </radialGradient>
            
            {/* High-Tech Grid Pattern */}
            <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a4c7f" strokeOpacity="0.04" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Ambient Map Base Glow & Grid */}
          <rect width="1000" height="625" fill="url(#techGrid)" />
          <rect width="1000" height="625" fill="url(#mapGlow)" />

          <g className="map-features">
            {geographies.map((geo, i) => {
              const isActive = ["Pakistan", "United Arab Emirates", "Qatar", "Saudi Arabia"].includes(geo.properties?.name);
              
              return (
                <path
                  key={`geo-${i}`}
                  d={pathGenerator(geo) || ''}
                  className="transition-colors duration-300 stroke-white/20"
                  fill={isActive ? "#0d88ca" : "#0a4c7f"}
                  fillOpacity={isActive ? 1 : 0.18}
                  strokeWidth={isActive ? "1" : "0.5"}
                />
              );
            })}
          </g>

          {/* Connected Curved Flight & Data Arcs from Pakistan Hub */}
          {HUBS.filter((n) => !n.isHQ).map((hub) => {
            const coords = projection([hub.lng, hub.lat]) || [0, 0];
            const midX = (hqCoords[0] + coords[0]) / 2;
            const midY = Math.min(hqCoords[1], coords[1]) - 80; // Arc height

            return (
              <g key={`arc-group-${hub.id}`}>
                {/* Glow Base Line */}
                <path
                  d={`M ${hqCoords[0]} ${hqCoords[1]} Q ${midX} ${midY} ${coords[0]} ${coords[1]}`}
                  fill="none"
                  stroke="#0d88ca"
                  strokeWidth="2.5"
                  strokeDasharray="4 6"
                  opacity="0.85"
                  className="drop-shadow-sm"
                />
                {/* Animated Dashed Pulse */}
                <path
                  d={`M ${hqCoords[0]} ${hqCoords[1]} Q ${midX} ${midY} ${coords[0]} ${coords[1]}`}
                  fill="none"
                  className="stroke-white opacity-80"
                  strokeWidth="2.5"
                  strokeDasharray="4 12"
                  strokeLinecap="round"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    from="32" 
                    to="0" 
                    dur="1.5s" 
                    repeatCount="indefinite" 
                  />
                </path>
              </g>
            );
          })}
        </svg>

        {/* Operational Hub Pin Anchors */}
        {HUBS.map((hub) => {
          const coords = projection([hub.lng, hub.lat]) || [0, 0];
          // Dynamically map exact D3 lat/lng coords to standard absolute percentages
          const left = `${(coords[0] / 1000) * 100}%`;
          const top = `${(coords[1] / 625) * 100}%`;

          return (
            <div
              key={hub.id}
              className="absolute z-30"
              style={{
                top,
                left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Blue Circular Interactive Pin Trigger */}
              <div
                onMouseEnter={(e) => handleMouseEnter(hub, e)}
                onMouseLeave={handleMouseLeave}
                className="relative flex items-center justify-center cursor-pointer group"
              >
                {/* Ambient radar pulse ring */}
                <span className="absolute w-8 h-8 rounded-full bg-[#0d88ca]/30 animate-ping pointer-events-none" />

                {/* High-Resolution Circular Flag Badge */}
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-125 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-[#0d88ca]">
                  <img
                    src={hub.flagUrl}
                    alt={hub.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Global Tooltip Rendering (Hoisted out of the pin map loop) */}
        {activeHub && tooltipPos && (
          <div
            className="absolute z-50 pointer-events-none transition-all duration-200 ease-out animate-in fade-in zoom-in-95"
            style={{
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y - 14}px`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="relative w-72 sm:w-80 bg-white/90 backdrop-blur-2xl border border-white/90 ring-1 ring-slate-900/5 shadow-[0_20px_50px_rgba(10,76,127,0.15)] rounded-2xl p-4">
              
              {/* Top Header: Flag, Name, HQ / Status */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100/90 pb-2.5 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white shadow-xs shrink-0">
                    <img
                      src={activeHub.flagUrl}
                      alt={activeHub.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider block leading-none">
                      {activeHub.code} REGION
                    </span>
                    <h4 className="font-extrabold text-sm text-[#0a2540] tracking-tight">
                      {activeHub.name}
                    </h4>
                  </div>
                </div>

                {activeHub.isHQ ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0d88ca] border border-blue-200/70 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d88ca] animate-pulse" />
                    HQ
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              {/* Metric Pill */}
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-50/90 to-sky-50/60 border border-blue-100/80 px-3 py-2 rounded-xl mb-3">
                <span className="text-xs font-semibold text-[#0a4c7f]">Operational Scope</span>
                <span className="text-xs font-bold text-[#0d88ca]">{activeHub.activeSystems}</span>
              </div>

              {/* Core Systems Tags */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Deployed Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeHub.coreSystems.split(',').map((system, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-700 bg-slate-50/90 border border-slate-200/70 px-2 py-0.5 rounded-md shadow-2xs"
                    >
                      {system.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Downward Anchor Caret */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-x-[7px] border-x-transparent border-t-[8px] border-t-white/95 drop-shadow-sm" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
export { InteractiveRegionalMap };
