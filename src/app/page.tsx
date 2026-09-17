"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/ui/mini-navbar";
import { ServiceSelector } from "@/components/ServiceSelector";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import { ContactUs } from "@/components/ContactUs";
import ClientWheel from "@/components/ui/ClientWheel";
import InteractiveRegionalMap from "@/components/ui/InteractiveRegionalMap";
import KPIRibbon from "@/components/ui/KPIRibbon";
import ClientMarquee from "@/components/ClientMarquee";

function TopBar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#0d88ca]/10 hidden sm:flex justify-between items-center px-8 py-2.5 text-xs text-slate-500">
      <div className="flex items-center gap-6">
        <a href="mailto:xenithservices@live.com" className="flex items-center gap-2 hover:text-[#0a4c7f] transition-colors">
          <Mail className="w-3.5 h-3.5" />
          <span>xenithservices@live.com</span>
        </a>
        <a href="tel:03332602502" className="flex items-center gap-2 hover:text-[#0a4c7f] transition-colors">
          <Phone className="w-3.5 h-3.5" />
          <span>0333 2602502</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <a href="https://www.facebook.com/xenith.services" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0d88ca] hover:scale-110 transition-all duration-200 inline-flex items-center justify-center">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://www.instagram.com/xenith.services/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0d88ca] hover:scale-110 transition-all duration-200 inline-flex items-center justify-center">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://wa.me/923332602502" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0d88ca] hover:scale-110 transition-all duration-200 inline-flex items-center justify-center">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col items-center p-6 pt-32 w-full max-w-[100vw] overflow-x-clip text-[#0a2540] selection:bg-[#0d88ca]/20"
      style={{
        backgroundColor: '#f6fafe',
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(13, 136, 202, 0.28) 0px, transparent 50%),
          radial-gradient(at 100% 15%, rgba(10, 37, 64, 0.18) 0px, transparent 45%),
          radial-gradient(at 10% 45%, rgba(13, 136, 202, 0.22) 0px, transparent 50%),
          radial-gradient(at 95% 65%, rgba(13, 136, 202, 0.24) 0px, transparent 50%),
          radial-gradient(at 20% 90%, rgba(10, 37, 64, 0.15) 0px, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
      }}
    >
      <TopBar />
      <Navbar />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-16 mt-10 mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center text-left">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-5 space-y-6">


            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance pb-2 leading-tight">
                <span className="text-[#0a2540]">Smarter Software.</span> <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#0a4c7f] to-[#0d88ca] bg-clip-text text-transparent">Stronger Business.</span> <br className="hidden sm:block" />
                <span className="text-slate-600">Since 2010.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#475569] text-balance leading-relaxed">
                Since 2010, Xenith Services has been delivering cutting-edge web apps, mobile solutions, and ERP systems tailored to meet real business needs. Whether you're launching a startup or scaling an enterprise, we transform your ideas into high-performance digital solutions.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0a4c7f] to-[#0d88ca] text-white font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_4px_14px_rgba(13,136,202,0.35)] hover:opacity-95"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Footer Text */}
            <motion.div variants={itemVariants} className="pt-2">
              <p className="text-[13px] text-gray-500 italic text-balance">
                This portfolio reflects our 14+ years of innovation and trust. Feel free to explore.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Hero Image Mockup */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full relative px-2 lg:px-4 flex items-center justify-center">
            <div className="relative w-full lg:scale-[1.12] xl:scale-[1.14] origin-center transition-all duration-500 z-10 my-4 group flex flex-col items-center">
              {/* Floating Live Badge Top-Left */}
              <div className="absolute -top-3 left-4 sm:left-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-[#0d88ca]/25 shadow-[0_8px_20px_rgba(13,136,202,0.15)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-[#0a2540] tracking-wide">FBR POS Live</span>
                <span className="text-[9px] font-semibold text-[#0d88ca] bg-[#0d88ca]/10 px-1.5 py-0.5 rounded-full">
                  Tier-1
                </span>
              </div>

              {/* Floating Metric Badge Bottom-Right */}
              <div className="absolute bottom-6 right-4 sm:right-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200/80 shadow-[0_8px_20px_rgba(10,37,64,0.12)] backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0.5">
                <span className="text-[10px] text-slate-500 font-medium">Cloud Sync:</span>
                <span className="text-[11px] font-bold text-[#0d88ca]">Realtime (99.9%)</span>
              </div>

              {/* Terminal Chassis with Glassmorphic Brand Frame */}
              <div className="relative w-full rounded-[24px] p-2.5 sm:p-3 bg-gradient-to-br from-[#0a2540]/90 via-[#0d3b66]/85 to-[#081d33]/95 backdrop-blur-2xl border border-white/40 ring-1 ring-[#0d88ca]/30 shadow-[0_25px_60px_-15px_rgba(10,37,64,0.22),0_10px_30px_-5px_rgba(13,136,202,0.15)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_35px_80px_-15px_rgba(13,136,202,0.32),0_15px_35px_-5px_rgba(10,37,64,0.2)]">
                
                {/* Minimal Front Camera Lens */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a2540] ring-1 ring-sky-400/40" />
                </div>

                {/* Display Screen */}
                <div className="relative w-full rounded-[16px] overflow-hidden bg-white border border-slate-100 shadow-inner">
                  <img
                    src="/new-pos.png"
                    alt="Xenith POS Cloud Terminal"
                    className="w-full h-auto block select-none"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      filter: "contrast(1.03) saturate(1.02)",
                    }}
                  />

                  {/* Elegant Glass Reflection Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>

              {/* Sleek Aluminum Stand Assembly */}
              <div className="flex flex-col items-center -mt-0.5 pointer-events-none">
                {/* Stand Neck */}
                <div className="w-14 h-3.5 bg-gradient-to-b from-slate-600 via-slate-500 to-slate-400 border-x border-slate-400/50 shadow-sm" />
                {/* Stand Base */}
                <div className="w-36 sm:w-48 h-2 rounded-full bg-gradient-to-r from-slate-300 via-white to-slate-300 border border-white/70 shadow-md ring-1 ring-[#0d88ca]/15" />
              </div>

              {/* Atmospheric Cyan Ambient Bloom Behind Unit */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#0d88ca]/20 via-sky-400/15 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* KPI Ribbon Component */}
        <motion.div variants={itemVariants} className="w-full">
          <KPIRibbon />
        </motion.div>

        {/* About Us Component */}
        <motion.div variants={itemVariants} className="w-full">
          <AboutUs />
        </motion.div>

        {/* Services Showcase Component */}
        <motion.div variants={itemVariants} id="services" className="w-full pt-20 pb-24 scroll-mt-28">
          <ServiceSelector />
        </motion.div>

        {/* Client Wheel Projects Component */}
        <motion.div variants={itemVariants} id="industries" className="w-full py-16 sm:py-24 scroll-mt-28">
          <ClientWheel />
        </motion.div>

        {/* Interactive Regional Map Component */}
        <motion.div variants={itemVariants} className="mt-12 mb-20 w-full">
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text & Heading (Matching Hero style) */}
              <div className="lg:col-span-5 text-left flex flex-col items-start justify-center">

                
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 mb-4 leading-[1.15] max-w-2xl">
                  Cross-Border Power, <br />
                  <span className="text-sky-600">Proven Reliability</span>
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mt-3 mb-6">
                  Powering mission-critical retail and enterprise operations across Pakistan and the GCC.
                </p>

                {/* Regional Badges */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full">
                  <div className="text-xs font-semibold text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    Pakistan: Sindh, Punjab & Nationwide Core
                  </div>
                  <div className="text-xs font-semibold text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]"></span>
                    GCC: KSA & UAE Phase Integration
                  </div>
                </div>

                {/* Quick Telemetry Metrics */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                  <div className="bg-white/90 border border-slate-200/80 rounded-xl p-3 shadow-sm flex flex-col justify-center transition-all hover:shadow-md hover:border-sky-300/50">
                    <span className="text-xl font-extrabold text-slate-900">90+</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Enterprise Nodes</span>
                  </div>
                  <div className="bg-white/90 border border-slate-200/80 rounded-xl p-3 shadow-sm flex flex-col justify-center transition-all hover:shadow-md hover:border-sky-300/50">
                    <span className="text-xl font-extrabold text-slate-900">2 Countries</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Active Coverage</span>
                  </div>
                  <div className="bg-white/90 border border-slate-200/80 rounded-xl p-3 shadow-sm flex flex-col justify-center transition-all hover:shadow-md hover:border-sky-300/50">
                    <span className="text-xl font-extrabold text-slate-900">Dual Tax</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">FBR Tier-1 & ZATCA</span>
                  </div>
                  <div className="bg-white/90 border border-slate-200/80 rounded-xl p-3 shadow-sm flex flex-col justify-center transition-all hover:shadow-md hover:border-sky-300/50">
                    <span className="text-xl font-extrabold text-slate-900">&lt;15ms</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Offline Local Sync</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Map Asset */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full relative min-h-[400px] lg:min-h-[500px]">
                  <InteractiveRegionalMap />
                </div>
              </div>

            </div>
          </section>
        </motion.div>

        {/* Client Marquee Component */}
        <motion.div variants={itemVariants} id="projects" className="w-full -mt-10 mb-12 scroll-mt-28">
          <ClientMarquee />
        </motion.div>

        {/* FAQ Component */}
        <motion.div variants={itemVariants} className="w-full">
          <FAQ />
        </motion.div>

        {/* Contact Us Component */}
        <motion.div variants={itemVariants} className="w-full">
          <ContactUs />
        </motion.div>
      </motion.main>
    </div>
  );
}
