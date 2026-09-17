import { Server, Smartphone, Cloud, MonitorSmartphone, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ServicesBentoGrid() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#f0f7fc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-widest text-[#0d88ca] uppercase mb-3">Integrated Enterprise Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Architected for Scale.
          </h3>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* Card 1: Flagship POS (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 lg:row-span-1 group relative bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(10,76,127,0.08)] rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,136,202,0.15)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0d88ca]/10 text-[#0d88ca] mb-6">
                  <MonitorSmartphone size={24} strokeWidth={2}/>
                </span>
                <h4 className="text-2xl font-bold text-[#0a2540] mb-3">Enterprise POS & Retail</h4>
                <p className="text-slate-600 max-w-md leading-relaxed">
                  High-performance, multi-branch point of sale systems fully integrated with FBR (Pakistan) and ZATCA (Saudi Arabia) tax compliance networks.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">Real-Time Sync</span>
                <span className="text-[11px] font-bold text-[#0d88ca] bg-blue-50 border border-blue-100 px-3 py-1 rounded-lg">45+ Installations</span>
              </div>
            </div>
          </div>

          {/* Card 2: Cloud Sync (Square) */}
          <div className="lg:col-span-1 lg:row-span-1 group relative bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(10,76,127,0.08)] rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,136,202,0.15)] hover:-translate-y-1">
             <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-100/50 text-sky-600 mb-6">
                  <Cloud size={24} strokeWidth={2}/>
                </span>
                <h4 className="text-xl font-bold text-[#0a2540] mb-3">Cloud Infrastructure</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Mission-critical web apps and secure enterprise cloud sync with 99.9% high-availability redundancy.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0d88ca]">
                <span>View Architecture</span>
                <ArrowRight size={16}/>
              </div>
            </div>
          </div>

          {/* Card 3: Mobile Apps (Square) */}
          <div className="lg:col-span-1 lg:row-span-1 group relative bg-[#0a2540] border border-slate-800 shadow-2xl rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0a2540] to-[#0a2540]" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white mb-6">
                  <Smartphone size={24} strokeWidth={2}/>
                </span>
                <h4 className="text-xl font-bold text-white mb-3">Bespoke Mobile Apps</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Native iOS and Android solutions engineered for field operations, fleet management, and consumer retail.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: ERP Systems (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 lg:row-span-1 group relative bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(10,76,127,0.08)] rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,136,202,0.15)] hover:-translate-y-1">
            <div className="relative z-10 h-full flex flex-col sm:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                  <Server size={24} strokeWidth={2}/>
                </span>
                <h4 className="text-2xl font-bold text-[#0a2540] mb-3">Modular ERP Ecosystem</h4>
                <p className="text-slate-600 max-w-md leading-relaxed mb-6">
                  Custom-built enterprise resource planning engines tailored to replace fragmented legacy systems. 
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Logistics', 'Warehouse Ops', 'HR & Payroll', 'Finance'].map((module) => (
                    <span key={module} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                      <ShieldCheck className="text-emerald-500" size={14}/>
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
