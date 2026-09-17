"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { highlightedClients } from "@/data/highlightedClients";

export default function ClientMarquee() {
  const clients = [...highlightedClients, ...highlightedClients];

  return (
    <section className="w-full pt-36 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden flex flex-col items-center font-sans">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-50% - 0.75rem), 0, 0); } /* Accounts for the gap */
        }
        .marquee-content {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marquee-scroll 50s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mb-10 sm:mb-12 w-full">
        {/* Eyebrow Badge */}

        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a2540] mb-4 leading-[1.15] max-w-2xl">
          Live Enterprise <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#0d88ca] to-[#0a2540] bg-clip-text text-transparent">
            Deployments.
          </span>
        </h2>
        
        {/* Supporting Subtext */}
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
          High-availability POS architecture and synchronized inventory systems deployed across mission-critical branch networks.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full max-w-[100vw] overflow-hidden marquee-container group/track py-4">
        {/* Fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#f8fafc] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#f8fafc] to-transparent" />
        
        <div className="marquee-content px-4" style={{ willChange: 'transform', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
          {clients.map((client, i) => {
            // Parse branch string e.g., "4 Active Branches" -> "4 DEPLOYMENTS"
            const deploymentsCount = client.branches.split(' ')[0];
            const deploymentsLabel = deploymentsCount === '1' ? '1 DEPLOYMENT' : `${deploymentsCount} DEPLOYMENTS`;

            return (
              <div 
                key={i} 
                className="group/card relative overflow-hidden w-[360px] sm:w-[400px] flex-shrink-0 flex flex-col justify-between bg-white/95 border border-slate-200/90 shadow-sm rounded-2xl p-7 hover:-translate-y-1.5 hover:border-sky-500/40 hover:shadow-[0_24px_48px_-12px_rgba(13,136,202,0.2)] transition-transform transition-opacity transition-shadow duration-300 ease-out transform-gpu will-change-transform"
              >
                {/* Subtle top-border accent line that illuminates on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0d88ca] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                {/* Header: Enlarged Logo */}
                <div className="flex justify-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white border border-slate-100/80 shadow-sm p-3 mb-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <h4 className="font-bold text-lg sm:text-xl tracking-tight uppercase text-slate-900 group-hover/card:text-sky-600 transition-colors duration-200 mb-2 font-sans">
                  {client.name}
                </h4>

                {/* Description */}
                <p className="text-sm leading-relaxed font-normal text-slate-600 min-h-[42px] line-clamp-2 font-sans">
                  {client.description}
                </p>
                
                {/* Live Operational Status & Technical Footer */}
                <div className="pt-4 mt-5 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="bg-slate-50/80 border border-slate-200/60 text-slate-500 text-xs font-semibold tracking-wider px-3 py-1 rounded-lg">
                    {deploymentsLabel}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Live Cluster
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button */}
      <div className="mt-12 sm:mt-14 flex justify-center items-center relative z-20">
        <Link 
          href="/clients"
          prefetch={true}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#0a2540] via-[#0d507a] to-[#0d88ca] border border-white/25 shadow-[0_10px_25px_-5px_rgba(10,37,64,0.2),0_8px_16px_-6px_rgba(13,136,202,0.3)] hover:shadow-[0_20px_35px_-5px_rgba(13,136,202,0.45),0_10px_20px_-5px_rgba(10,37,64,0.25)] hover:border-white/45 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-transform transition-shadow duration-300 ease-out overflow-hidden transform-gpu will-change-transform"
        >
          {/* Ambient Hover Sheen Overlay */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
          
          <span className="relative z-10 flex items-center gap-2.5">
            <span>Explore Full Client Directory</span>
          </span>
          <svg 
            className="relative z-10 w-4 h-4 text-white/90 group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-300 ease-out" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
