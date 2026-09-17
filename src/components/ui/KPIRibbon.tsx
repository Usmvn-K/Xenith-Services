'use client';

import React from 'react';

const KPIS = [
  {
    value: '200+',
    label: 'Enterprise Deployments',
    subtext: 'Across GCC & South Asia',
    tag: 'Active',
    isLive: true,
  },
  {
    value: '14+ Yrs',
    label: 'Proven Engineering',
    subtext: 'Delivering since 2010',
    tag: 'Track Record',
  },
  {
    value: '99.9%',
    label: 'Operational Uptime',
    subtext: 'Zero-latency sync',
    tag: 'Redundancy',
  },
  {
    value: '98%',
    label: 'Client Retention',
    subtext: 'Long-term enterprise contracts',
    tag: 'Trust Metric',
  },
];

export default function KPIRibbon() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 -mt-4 mb-20 z-20">
      <div className="relative rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 ring-1 ring-slate-900/5 shadow-[0_20px_60px_rgba(10,76,127,0.09)] p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/70">
          {KPIS.map((kpi, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center px-4 sm:px-8 py-2 text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d88ca] bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-full">
                  {kpi.tag}
                </span>
                {kpi.isLive && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mb-1">
                {kpi.value}
              </div>

              <div className="text-sm font-bold text-slate-800 leading-tight">
                {kpi.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {kpi.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
