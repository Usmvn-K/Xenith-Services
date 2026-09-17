"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Stethoscope, 
  Building2, 
  Truck, 
  Utensils, 
  ShieldCheck, 
  ChevronRight,
  Flame,
  Pill,
  Shirt,
  Briefcase
} from 'lucide-react';

type ClientItem = {
  name: string;
  sector: string;
  metric: string;
  description: string;
  icon?: React.ElementType;
  logoPath?: string;
};

const DATA: ClientItem[] = [
  {
    name: "Restaurants & Cafés",
    sector: "FOOD & BEVERAGE",
    metric: "Rapid Table Turnover & KOT Routing",
    description: "High-throughput cloud & offline POS, kitchen display systems (KDS), waiter tablets, digital menus, and automated FBR/tax compliance.",
    icon: Utensils,
  },
  {
    name: "QSR & Cloud Kitchens",
    sector: "FAST CASUAL & DELIVERY",
    metric: "Under 3-Min Order Processing",
    description: "Multi-channel food aggregator integrations, automated order dispatching, driver tracking, and recipe-level inventory control.",
    icon: Flame,
  },
  {
    name: "Clinics & Medical Centers",
    sector: "HEALTHCARE & MEDICAL",
    metric: "EMR & Patient Queue Synced",
    description: "Outpatient management, patient appointment queues, electronic medical records (EMR), and synchronized prescription invoicing.",
    icon: Stethoscope,
  },
  {
    name: "Pharmacies & Drugstores",
    sector: "HEALTHCARE RETAIL",
    metric: "Automated Expiry & Batch Auditing",
    description: "Batch & expiry tracking, formula drug management, automated reordering thresholds, and barcode-driven counter billing.",
    icon: Pill,
  },
  {
    name: "Hospitals & Diagnostics",
    sector: "ENTERPRISE HEALTHCARE",
    metric: "High-Availability 24/7 Patient Ops",
    description: "Comprehensive Hospital Information Systems (HIS), inpatient ward management, pathology lab reporting, and departmental billing.",
    icon: Building2,
  },
  {
    name: "Retail & Supermarkets",
    sector: "RETAIL & E-COMMERCE",
    metric: "Instant Barcode Lookup & Stock Audits",
    description: "Multi-register barcode scanning, dynamic promotions engine, supplier ledgers, and real-time multi-branch stock reconciliation.",
    icon: ShoppingCart,
  },
  {
    name: "Apparel & Boutiques",
    sector: "FASHION & LIFESTYLE",
    metric: "Matrix Stock & Loyalty Automation",
    description: "Matrix variant management (size/color/style), loyalty reward engines, omnichannel inventory sync, and return handling.",
    icon: Shirt,
  },
  {
    name: "Supply Chain & Wholesale",
    sector: "LOGISTICS & DISTRIBUTION",
    metric: "Multi-Depot Realtime Sync",
    description: "End-to-end warehouse management (WMS), bulk freight invoicing, dispatch manifest routing, and integrated operational ERPs.",
    icon: Truck,
  },
  {
    name: "Corporate & Enterprise",
    sector: "ENTERPRISE NETWORKS",
    metric: "Unified Enterprise Communications",
    description: "Custom ERP platforms, LAN/WAN architecture, IP-PBX telephony networks, and centralized role-based access management.",
    icon: Briefcase,
  },
  {
    name: "Public Sector & Utilities",
    sector: "GOVERNMENT INFRASTRUCTURE",
    metric: "Govt Compliant & Air-Gapped Security",
    description: "Mission-critical tender handling, CCTV surveillance grids, asset tracking, and air-gapped data compliance for public institutions.",
    icon: ShieldCheck,
  }
];

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeWedge(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", x, y,
    "L", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");
}

function ClientWheel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 60); // 60ms debounce to prevent diagonal crossing glitches
  };

  const radius = 240; // SVG viewBox radius
  const activeSector = DATA[activeIndex] || null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-[1.15] mb-4">
          Industries <span className="text-sky-600">We Serve</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Hover over any sector to discover our specialized hardware, POS, and software architectures.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative">
        {/* Ambient glow behind the wheel and card */}
        <div className="absolute -inset-10 bg-gradient-to-r from-[#0d88ca]/15 via-transparent to-sky-400/10 rounded-full blur-3xl -z-10" />

        {/* The Responsive Wheel */}
        <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] flex-shrink-0 mx-auto">
          <div className="relative flex items-center justify-center p-4 sm:p-6 w-full h-full rounded-full bg-gradient-to-br from-white/95 via-white/80 to-[#e3f2fd]/70 backdrop-blur-2xl border border-white/90 ring-1 ring-[#0d88ca]/25 shadow-[0_25px_60px_-15px_rgba(10,37,64,0.15),0_10px_25px_-5px_rgba(13,136,202,0.12)]">
            
            {/* Background SVG purely for visual wedges (pointer-events-none) */}
            <svg
              viewBox={`0 0 ${radius * 2} ${radius * 2}`}
              className="absolute inset-0 w-full h-full drop-shadow-2xl overflow-visible pointer-events-none p-4 sm:p-6"
            >
              <AnimatePresence>
                {DATA.map((item, i) => {
                  const sliceAngle = 360 / DATA.length;
                  const startAngle = i * sliceAngle - (sliceAngle / 2);
                  const endAngle = startAngle + sliceAngle;
                  const isActive = activeIndex === i;

                  return (
                    <motion.g 
                      key={`wedge-${i}`} 
                      className="origin-center pointer-events-none" 
                      style={{ transformOrigin: '240px 240px' }}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    >
                      <motion.path
                        d={describeWedge(radius, radius, radius, startAngle, endAngle)}
                        className={`pointer-events-none stroke-white/80 stroke-[1.5] ${isActive ? 'fill-[#0d88ca]' : 'fill-white/80 backdrop-blur-md'}`}
                        animate={{ fill: isActive ? '#0d88ca' : 'rgba(255, 255, 255, 0.8)' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.g>
                  );
                })}
              </AnimatePresence>
            </svg>

            {/* Static Interactive Hitboxes Layer */}
            <div className="absolute inset-0 m-4 sm:m-6 pointer-events-none">
              {DATA.map((item, i) => {
                const sliceAngle = 360 / DATA.length;
                const midAngle = i * sliceAngle;
                
                // Calculate percentage position relative to container
                const cx = 50; 
                const cy = 50;
                // Icons placed at 72% of radius => 36% of container
                const iconRadiusPct = 36; 
                const angleInRadians = (midAngle - 90) * Math.PI / 180.0;
                const left = cx + (iconRadiusPct * Math.cos(angleInRadians));
                const top = cy + (iconRadiusPct * Math.sin(angleInRadians));
                const isActive = activeIndex === i;

                return (
                  <div
                    key={`hitbox-${i}`}
                    className="absolute w-[15%] h-[15%] rounded-full cursor-pointer z-20 pointer-events-auto"
                    style={{ 
                      left: `${left}%`, 
                      top: `${top}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => handleSelect(i)}
                    onTouchStart={() => handleSelect(i)}
                    onClick={() => handleSelect(i)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div 
                        className={`transition-all duration-300 flex items-center justify-center ${
                          isActive 
                            ? "text-white scale-125 drop-shadow-md z-30" 
                            : "text-slate-600 hover:text-[#0d88ca]"
                        }`}
                      >
                        {item.logoPath ? (
                          <img 
                            src={item.logoPath} 
                            alt={item.name} 
                            className={`w-full h-full object-contain ${!isActive ? 'opacity-70 grayscale contrast-125' : ''}`}
                          />
                        ) : item.icon ? (
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Hub: Xenith Logo Emblem */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              <div className="w-[20%] h-[20%] rounded-full bg-white/95 backdrop-blur-md border-2 border-white ring-4 ring-[#0d88ca]/20 shadow-[0_10px_30px_rgba(10,37,64,0.18)] flex items-center justify-center p-2 sm:p-3 pointer-events-none">
                <img
                  src="/logo.png"
                  alt="Xenith Services"
                  className="w-full h-auto object-contain max-h-12 select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-full max-w-md h-[400px]">
          <AnimatePresence mode="wait">
            {activeSector ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-lg min-h-[380px] rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-white/95 via-white/85 to-[#eaf5fc]/80 backdrop-blur-2xl border border-white/90 ring-1 ring-[#0d88ca]/20 shadow-[0_20px_50px_-15px_rgba(10,37,64,0.12),0_8px_20px_-6px_rgba(13,136,202,0.1)] flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0a2540] via-[#0d88ca] to-sky-400" />
                
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#0d88ca]/10 border border-[#0d88ca]/30 text-[#0a4c7f] shadow-xs">{activeSector.sector}</span>
                </div>

                <div className="flex items-center gap-4">
                  {activeSector.logoPath && (
                     <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 p-2 flex shrink-0 items-center justify-center mt-3">
                       <img src={activeSector.logoPath} alt={activeSector.name} className="w-full h-full object-contain" />
                     </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mt-3 mb-3">{activeSector.name}</h3>
                </div>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{activeSector.description}</p>

                <div className="mt-6 rounded-2xl p-4 bg-gradient-to-r from-[#0d88ca]/10 via-[#0a4c7f]/5 to-transparent border border-[#0d88ca]/20 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">HIGHLIGHT / METRIC</span>
                  <span className="text-base sm:text-lg font-extrabold text-[#0a2540] tracking-tight">{activeSector.metric}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm rounded-3xl p-8 flex flex-col items-center justify-center text-center border-dashed"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <ChevronRight className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-400 mb-2">Select a Sector</h3>
                <p className="text-slate-500 text-sm">Hover over any slice on the interactive wheel to view detailed case studies and metrics.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ClientWheel;
export { ClientWheel };
