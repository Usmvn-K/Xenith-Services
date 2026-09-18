import Link from 'next/link';

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-[#0a2540] border-t border-slate-700/50 text-white relative z-10">
      {/* Background radial gradients for flair */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#0d88ca]/10 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#0d88ca]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Column 1 - Brand Dossier */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="mb-6 block group">
              <img 
                src="/logo.png" 
                alt="Xenith Services" 
                className="h-20 sm:h-24 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Enterprise Point of Sale architecture, synchronized branch inventory networks, and mission-critical financial ERP systems.
            </p>

            <div className="inline-flex items-center gap-2.5 bg-slate-800/50 border border-slate-700/50 rounded-full px-3 py-1.5 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Systems Operational • 99.9% Uptime SLA
              </span>
            </div>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a 
                href="mailto:xenithservices@live.com" 
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-[#0d88ca] transition-colors"
              >
                <MailIcon className="w-4 h-4 text-[#0d88ca]"/>
                <span>xenithservices@live.com</span>
              </a>

              <div className="flex flex-col gap-2 pt-1">
                <a 
                  href="tel:+923332602502" 
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-[#0d88ca] transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-[#0d88ca] shrink-0"/>
                  <span>+92 333 2602502</span>
                </a>
                <a 
                  href="tel:+923340352072" 
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-[#0d88ca] transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-[#0d88ca] shrink-0"/>
                  <span>+92 334 0352072</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Solutions & Sectors */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0d88ca] mb-4">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><Link href="/clients?sector=marts" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Retail Supermarkets</Link></li>
              <li><Link href="/clients?sector=restaurants" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Restaurants & Hospitality</Link></li>
              <li><Link href="/clients?sector=healthcare" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Healthcare & Diagnostic Labs</Link></li>
              <li><Link href="/clients?sector=garments" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Apparel & Garments</Link></li>
              <li><Link href="/clients?sector=autos" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Automotive & Spare Parts</Link></li>
              <li><Link href="/clients?sector=government" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Public Sector & Government</Link></li>
            </ul>
          </div>

          {/* Column 3 - Core Products & Modules */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0d88ca] mb-4">
              Platform
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><Link href="/#services" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Point of Sale (POS)</Link></li>
              <li><Link href="/#about" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Financial Accounting & ERP</Link></li>
              <li><Link href="/#features" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Inventory & Warehouse Sync</Link></li>
              <li><Link href="/#marquee" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Multi-Branch Management</Link></li>
              <li><Link href="/#hardware" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Hardware Integration</Link></li>
            </ul>
          </div>

          {/* Column 4 - Company & Ecosystem */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0d88ca] mb-4">
              Registry & Company
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li><Link href="/clients" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Client Directory (90+)</Link></li>
              <li><Link href="/#contact" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Schedule System Demo</Link></li>
              <li><a href="https://wa.me/923332602502" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline decoration-[#0d88ca] decoration-2 underline-offset-4 transition-all">Enterprise WhatsApp Desk</a></li>
              <li><span className="text-xs text-emerald-400 font-medium">99.9% Production SLA Active</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Xenith Services. All rights reserved. Registered POS & ERP Systems.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#0d88ca] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#0d88ca] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
