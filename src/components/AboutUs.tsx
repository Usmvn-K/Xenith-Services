"use client";

import { motion } from "framer-motion";
import AboutCapabilitiesShowcase from "@/components/ui/AboutCapabilitiesShowcase";

export function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="w-full py-24 relative scroll-m-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="flex-1 space-y-8 max-w-2xl lg:max-w-none text-left">

            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-[1.15]">
              Engineering the Future of <br className="hidden md:block" />
              <span className="text-sky-600">
                Digital Solutions
              </span>
            </h2>
            
            <div className="space-y-5 text-[#475569] text-lg leading-relaxed">
              <p>
                Established in 2010, Xenith Services is a leading software and technology solutions provider, committed to helping businesses grow through smart and reliable digital tools.
              </p>
              <p>
                We offer a wide range of services including web-based software development, desktop applications, professional websites, e-commerce solutions, digital marketing, CCTV and camera installation, government tender handling, point of sale (POS) systems, custom ERP solutions, and FBR POS integration.
              </p>
              <p>
                With over 14 years of industry experience, our team is dedicated to delivering innovative, scalable, and results-driven solutions that meet the unique needs of every client.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Capabilities Showcase */}
          <motion.div variants={itemVariants} className="flex-1 w-full max-w-2xl lg:max-w-none">
            <AboutCapabilitiesShowcase />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
