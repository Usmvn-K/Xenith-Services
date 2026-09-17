'use client';

import React, { useState } from 'react';
import { HardDrive, Cloud, Smartphone, CheckCircle2, WifiOff, Globe, Bluetooth } from 'lucide-react';

const MODES = [
  {
    id: 'offline',
    label: 'On-Premise',
    tag: '100% Offline',
    title: 'Local On-Premise Desktop',
    icon: HardDrive,
    featureIcon: WifiOff,
    badgeText: 'Zero Internet Dependency',
    description: 'Engineered for extreme reliability where stable connectivity is not guaranteed. Runs entirely off a secure local database server with instantaneous response times.',
    specs: [
      'Local SQL / MySQL Database architecture',
      'Air-gapped security with zero cloud risk',
      'High-speed local thermal receipt & invoice printing',
      'Ideal for heavy retail, remote hubs & basements'
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud Platform',
    tag: 'Web Hosted',
    title: 'Hosted Cloud Accounting',
    icon: Cloud,
    featureIcon: Globe,
    badgeText: 'Browser Accessible',
    description: 'A centralized accounting and management suite accessible through any modern browser. We host, maintain, and provision the platform for your organization.',
    specs: [
      'Universal browser access via dedicated URL',
      'Automated remote backups & zero server overhead',
      'Live multi-branch consolidation & reporting',
      'Real-time compliance & audit tracking'
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile Hybrid',
    tag: 'Field Operations',
    title: 'Hybrid Mobile POS',
    icon: Smartphone,
    featureIcon: Bluetooth,
    badgeText: 'Bluetooth Thermal Invoicing',
    description: 'A mobile-first solution designed for vans, pop-ups, and field agents. Transact and print receipts completely offline, then sync records whenever a connection is detected.',
    specs: [
      'Full offline invoicing on mobile devices',
      'Direct pairing with portable Bluetooth printers',
      'Auto-reconciliation on network reconnect',
      'Ideal for route delivery & mobile sales reps'
    ]
  }
];

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState(MODES[0].id);
  const current = MODES.find((m) => m.id === activeTab) || MODES[0];
  const IconComponent = current.icon;
  const FeatureIcon = current.featureIcon;

  return (
    <div className="w-full h-full bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(10,76,127,0.08)]">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d88ca] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
            Deployment Flexibility
          </span>
          <h4 className="text-xl font-extrabold text-[#0a2540] mt-2">
            Tri-Mode Architecture
          </h4>
        </div>
      </div>

      {/* Segmented Controller Tab Bar */}
      <div className="grid grid-cols-3 p-1.5 bg-slate-100/80 rounded-2xl gap-1 mb-6 border border-slate-200/50">
        {MODES.map((mode) => {
          const isActive = activeTab === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setActiveTab(mode.id)}
              className={`py-2 px-2 sm:px-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                isActive
                  ? 'bg-white text-[#0a2540] shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <mode.icon size={14} className={isActive ? 'text-[#0d88ca]' : 'text-slate-400'} />
              <span className="truncate">{mode.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Panel */}
      <div className="space-y-5 animate-in fade-in-50 duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0d88ca] flex items-center justify-center border border-blue-100 shadow-xs shrink-0">
              <IconComponent size={22} />
            </div>
            <div>
              <h5 className="font-bold text-base text-[#0a2540]">{current.title}</h5>
              <span className="text-xs text-slate-400 font-medium">{current.tag}</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200/60 px-2.5 py-1 rounded-full whitespace-nowrap">
            <FeatureIcon size={13} />
            {current.badgeText}
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {current.description}
        </p>

        {/* Feature Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
          {current.specs.map((spec, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
