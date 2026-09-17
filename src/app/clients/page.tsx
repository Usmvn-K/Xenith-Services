"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, Sparkles, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/ui/mini-navbar";
import { allClients, ClientCategory } from "@/data/allClients";

// Pre-sort the client data array statically outside the component to avoid re-sorting on every render
const sortedClients = [...allClients].sort((a, b) => a.name.localeCompare(b.name));

const categories = [
  "All",
  "Government & Public Sector",
  "Marts & Superstores",
  "Restaurants & Cafés",
  "Healthcare & Labs",
  "Garments & Apparel",
  "Bakery & Sweets",
  "Electronics & Retail",
  "Education",
  "Automobile & Parts",
  "Footwear",
  "Mobile & Accessories"
] as const;

type CategoryTab = typeof categories[number];

export default function ClientDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("All");
  const [displayLimit, setDisplayLimit] = useState(24);

  const filteredClients = useMemo(() => {
    return sortedClients.filter(client => {
      const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || client.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div 
      className="min-h-screen relative flex flex-col items-center pt-36 sm:pt-40 w-full max-w-[100vw] overflow-x-clip text-[#0a2540] selection:bg-[#0d88ca]/20 pb-24"
      style={{
        backgroundColor: '#f6fafe',
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(13, 136, 202, 0.15) 0px, transparent 50%),
          radial-gradient(at 100% 15%, rgba(10, 37, 64, 0.1) 0px, transparent 45%),
          radial-gradient(at 10% 45%, rgba(13, 136, 202, 0.12) 0px, transparent 50%),
          radial-gradient(at 95% 65%, rgba(13, 136, 202, 0.14) 0px, transparent 50%),
          radial-gradient(at 20% 90%, rgba(10, 37, 64, 0.08) 0px, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mt-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-start w-full mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0d88ca] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-sky-600 uppercase">
              VERIFIED REGIONAL CLIENT REGISTRY
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a2540] mb-4 leading-tight">
            Enterprise Client{" "}
            <span className="bg-gradient-to-r from-[#0d88ca] to-[#0a4c7f] bg-clip-text text-transparent">
              Directory.
            </span>
          </h1>

          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            90+ mission-critical implementations across government, retail, hospitality, and healthcare networks.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 w-full">
          {/* Search */}
          <div className="relative w-full lg:w-96 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text"
              placeholder="Search by brand name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayLimit(24);
              }}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/90 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d88ca]/50 focus:border-[#0d88ca]/50 text-[#0a2540] placeholder-slate-400 transition-shadow"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              // Calculate count
              const count = cat === "All" 
                ? allClients.length 
                : allClients.filter(c => c.category === cat).length;
              
              if (count === 0 && cat !== "All") return null;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setDisplayLimit(24);
                  }}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors transition-shadow duration-200 border transform-gpu
                    ${isActive 
                      ? 'bg-[#0d88ca] text-white border-[#0d88ca] shadow-[0_4px_12px_rgba(13,136,202,0.3)]' 
                      : 'bg-white/60 text-slate-600 border-slate-200 hover:bg-white hover:text-[#0a2540] hover:border-slate-300'}
                  `}
                >
                  {cat} <span className={`ml-1.5 opacity-70 text-xs ${isActive ? 'text-white' : ''}`}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Grid */}
        {filteredClients.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filteredClients.slice(0, displayLimit).map((client, idx) => (                  <motion.div
                    key={`${client.name}-${idx}`}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-400/60 transition-all duration-300 group relative overflow-hidden border-t-2 border-t-transparent hover:border-t-sky-500 transform-gpu will-change-transform hover:-translate-y-1"
                    style={{ contentVisibility: 'auto', containIntrinsicSize: '0 260px' }}
                  >
                  {/* Card Content Wrapper */}
                  <div className="flex flex-col flex-grow">
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                        {client.category}
                      </span>
                      {client.highlighted && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                          ★ Flagship Partner
                        </span>
                      )}
                    </div>

                    {/* Brand Logo & Monogram Fallback */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-50 border border-slate-200/70 p-2 flex items-center justify-center mb-4 group-hover:bg-white transition-colors flex-shrink-0">
                      {client.logo ? (
                        <>
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={80}
                            height={80}
                            sizes="(max-width: 768px) 64px, 80px"
                            className="w-full h-full object-contain"
                            loading={idx < 9 ? 'eager' : 'lazy'}
                            priority={idx < 9}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling;
                              if (fallback) fallback.classList.remove('hidden');
                              if (fallback) fallback.classList.add('flex');
                            }}
                          />
                          <div className="hidden w-full h-full rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-sky-400 font-mono font-bold text-base items-center justify-center border border-slate-700 select-none">
                            {client.name.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase()}
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-sky-400 font-mono font-bold text-base flex items-center justify-center border border-slate-700 select-none">
                          {client.name.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Client Name */}
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight group-hover:text-sky-600 transition-colors line-clamp-1">
                      {client.name}
                    </h3>
                    
                    {client.description && (
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {client.description}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      {client.deployments && client.deployments > 1 ? `${client.deployments} Deployments` : '1 Deployment'} • Verified
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      Active
                    </div>
                  </div>
                  </motion.div>
              ))}
              </AnimatePresence>
            </div>
            
            {displayLimit < filteredClients.length && (
              <div className="w-full flex justify-center mt-12 mb-8">
                <button
                  onClick={() => setDisplayLimit(prev => prev + 24)}
                  className="px-8 py-3 bg-white text-[#0a2540] font-bold text-sm uppercase tracking-wider rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0d88ca]/30 hover:text-[#0d88ca] transition-all"
                >
                  Load More Clients
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-[#0a2540] mb-2">No matching clients found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any deployments matching "{searchQuery}" in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-2.5 bg-white text-[#0d88ca] font-semibold border border-slate-200 shadow-sm rounded-lg hover:bg-slate-50 transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
