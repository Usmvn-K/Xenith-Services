"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Where do you operate and provide your software solutions?",
    answer: "We serve clients globally with our cloud and mobile solutions. For our on-premise offline setups, we actively service Hyderabad, Karachi, and surrounding regional districts with dedicated on-ground deployment and support.",
  },
  {
    question: "What deployment options are available for your POS and accounting software?",
    answer: (
      <div className="space-y-3">
        <p>We offer flexible deployment models tailored to your operational infrastructure:</p>
        <ul className="space-y-2 ml-2 border-l-2 border-[#0d88ca]/20 pl-4 mt-2">
          <li><strong className="text-[#0a2540]">Desktop Offline Solution:</strong> Installed locally on your computer for absolute localized control without requiring constant internet access.</li>
          <li><strong className="text-[#0a2540]">Cloud Web Solution:</strong> Hosted via a secure browser link, allowing you and your team to access, monitor, and manage your business from anywhere in the world.</li>
          <li><strong className="text-[#0a2540]">Cross-Platform Mobile App:</strong> Available for both online and mobile operations, letting you keep track of your business seamlessly right from your phone.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long does a typical software setup or project take?",
    answer: "Deployment times vary depending on whether you are integrating our ready-to-use POS/accounting systems or building a custom web and mobile solution. We use agile methodologies to ensure a swift, smooth rollout with minimal disruption to your business.",
  },
  {
    question: "Do you provide ongoing technical support and updates after deployment?",
    answer: "Yes, we provide comprehensive maintenance and dedicated technical support to ensure your daily operations run continuously and efficiently.",
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
  return (
    <div className={`border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${isOpen ? 'bg-white border-blue-100 shadow-md shadow-blue-950/5' : 'bg-white border-blue-100/60 hover:border-blue-100 shadow-sm shadow-blue-950/5'}`}>
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between focus:outline-none"
      >
        <span className={`font-semibold text-lg pr-4 transition-colors ${isOpen ? 'text-[#0d88ca]' : 'text-[#0a4c7f]'}`}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${isOpen ? 'bg-[#0d88ca]/10 border-[#0d88ca]/20' : 'bg-transparent border-blue-100'}`}
        >
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#0d88ca]' : 'text-[#0a4c7f]'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#475569] leading-relaxed text-[15px] md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="faq" className="w-full pt-10 pb-24 relative scroll-m-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full relative z-10 max-w-3xl mx-auto space-y-12"
      >
        {/* Heading Area */}
        <motion.div variants={itemVariants} className="text-center space-y-4 relative">

          
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-[1.15]">
            Frequently Asked <span className="text-sky-600">Questions</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Everything you need to know about our services, methodologies, and how we can help your business scale.
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div variants={itemVariants} className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
