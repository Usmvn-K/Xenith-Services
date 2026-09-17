'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  RefreshCw,
  Layers,
  Headphones,
  HardDrive,
  Cloud,
  Smartphone,
  CheckCircle2,
  WifiOff,
  Globe,
  Bluetooth,
  ArrowRight,
} from 'lucide-react';

const DEPLOYMENT_MODES = [
  {
    id: 'on-premise',
    label: 'On-Premise',
    icon: HardDrive,
    tag: '100% Offline',
    title: 'Local On-Premise Desktop',
    desc: 'Runs completely offline on local SQL/MySQL databases. Zero cloud dependency, instantaneous speed, and air-gapped security for remote hubs and basements.',
    highlight: 'Zero Internet Dependency',
    specs: ['DB: Local MySQL', 'Network: Air-gapped', 'Latency: <1ms'],
  },
  {
    id: 'cloud',
    label: 'Cloud Platform',
    icon: Cloud,
    tag: 'Web Hosted',
    title: 'Hosted Cloud Platform',
    desc: 'Fully managed browser accounting and management. Access instantly via a secure URL with automated centralized backups across all branches.',
    highlight: 'Universal Browser Access',
    specs: ['DB: Cloud Native', 'Backups: Automated', 'Uptime: 99.9%'],
  },
  {
    id: 'mobile',
    label: 'Mobile Hybrid',
    icon: Smartphone,
    tag: 'Field POS',
    title: 'Hybrid Mobile POS',
    desc: 'Operate on iOS/Android anywhere. Print receipts seamlessly via portable Bluetooth printers without Wi-Fi, auto-reconciling when connected.',
    highlight: 'Bluetooth Thermal Invoicing',
    specs: ['Sync: Auto-Reconcile', 'Printers: Bluetooth', 'Platform: iOS/Android'],
  },
];

const OPERATIONAL_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Tax & Legal Compliance',
    tag: 'Government Ready',
    desc: 'Native FBR Tier-1 POS integration & ZATCA Phase-2 digital invoicing out of the box.',
    metric: 'ZATCA Phase-2 Validated',
  },
  {
    icon: RefreshCw,
    title: 'Zero Downtime Architecture',
    tag: 'Continuous Ops',
    desc: 'Uninterrupted sales execution with automated multi-branch synchronization and failover.',
    metric: 'Dual-Engine Failover',
  },
  {
    icon: Layers,
    title: 'Turnkey Infrastructure',
    tag: 'Full Stack',
    desc: 'End-to-end setups covering thermal printers, barcode scanners, CCTV networks, and ERPs.',
    metric: 'End-to-End Stack',
  },
  {
    icon: Headphones,
    title: '24/7 Enterprise Hypercare',
    tag: 'Mission Critical',
    desc: 'Proactive real-time system monitoring, priority SLA patching, and rapid technician escalations.',
    metric: '<15m Escalation SLA',
  },
];

export default function AboutCapabilitiesShowcase() {
  const [activeMode, setActiveMode] = useState(DEPLOYMENT_MODES[0].id);
  const currentMode = DEPLOYMENT_MODES.find((m) => m.id === activeMode) || DEPLOYMENT_MODES[0];
  const CurrentModeIcon = currentMode.icon;

  return (
    <div className="relative flex flex-col gap-5 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-cyan-400/5 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

      {/* 1. TOP MODULE: Interactive Tri-Mode Deployment Switcher */}
      <div className="text-left relative overflow-hidden bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-shadow transition-colors duration-300 rounded-2xl group p-6 sm:p-7 before:absolute before:inset-0 before:bg-gradient-to-br before:from-sky-500/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 transform-gpu" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 260px' }}>
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-sky-600 uppercase">
                Flexible Architecture
              </span>
            </div>
            <span className="text-xs font-bold text-slate-400">|</span>
            <span className="text-xs font-semibold text-slate-500">3 Deployment Tiers</span>
          </div>

          {/* Segmented Mode Selector Buttons */}
          <div className="flex items-center p-1 bg-slate-100/80 rounded-xl gap-1 border border-slate-200/50">
            {DEPLOYMENT_MODES.map((mode) => {
              const isActive = activeMode === mode.id;
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={
                    isActive
                      ? 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20 font-medium transition-all'
                      : 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/70 transition-all'
                  }
                >
                  <Icon className={isActive ? 'text-white' : 'text-slate-400'} size={13} />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Mode Preview */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100/80 border border-sky-200/60 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-105 group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
              <CurrentModeIcon size={20} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  {currentMode.title}
                </h4>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-md uppercase">
                  {currentMode.highlight}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">
                {currentMode.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM MODULE: Balanced 2x2 Operational Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {OPERATIONAL_PILLARS.map((pillar, idx) => {
          const PillarIcon = pillar.icon;
          return (
            <div
              key={idx}
              className="text-left relative overflow-hidden bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-shadow transition-colors duration-300 rounded-2xl group flex flex-col justify-between p-6 before:absolute before:inset-0 before:bg-gradient-to-br before:from-sky-500/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 transform-gpu"
              style={{ contentVisibility: 'auto', containIntrinsicSize: '0 260px' }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100/80 border border-sky-200/60 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-105 group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <PillarIcon size={20} />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md border border-slate-200/60 uppercase">
                    {pillar.tag}
                  </span>
                </div>

                <h5 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  {pillar.title}
                </h5>

                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {pillar.desc}
                </p>
              </div>
              
              {/* Micro-metric chip */}
              <div className="relative z-10 mt-5 pt-4 border-t border-slate-100 flex items-center">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {pillar.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
