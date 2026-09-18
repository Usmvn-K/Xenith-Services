"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6e39bf99-8b0d-4a76-8d1b-9b6822fc7e19",
          name,
          email,
          subject: subject || `Inquiry from ${name} - Xenith Enterprise Desk`,
          message,
          from_name: "Xenith Enterprise Inquiries",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full pt-36 pb-24 relative overflow-hidden scroll-m-24">
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-3xl" />
        <svg className="w-full h-full opacity-20 stroke-sky-400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-tech-grid)" />
        </svg>
      </div>
      
      <div className="w-full relative z-10 space-y-12">
        {/* Heading Area */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center relative"
        >

          
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 text-center mb-12">
            Get In Touch With <span className="text-sky-600">Us Now</span>
          </motion.h2>


        </motion.div>

        {/* Main Content - Unified Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full bg-white border border-blue-100 rounded-[2rem] p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 shadow-md shadow-blue-950/5 transition-all duration-300"
        >
          {/* Left Column - Map */}
          <motion.div variants={itemVariants} className="flex-1 w-full min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden border border-blue-100 relative bg-[#0a4c7f]/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.109590823775!2d68.34960307525389!3d25.367623977598826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7086a7d24c95%3A0xc9148249f2391dad!2sXenith%20Services!5e0!3m2!1sen!2s!4v1724255743472!5m2!1sen!2s" 
              className="w-full h-full min-h-[300px] lg:min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Right Column - Info & Form */}
          <motion.div variants={itemVariants} className="flex-1 w-full space-y-8 flex flex-col justify-between">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-blue-100 hover:border-[#0d88ca]/30 hover:bg-[#0d88ca]/5 transition-all text-center gap-3 group shadow-sm shadow-blue-950/5">
                <div className="w-12 h-12 rounded-full bg-[#0d88ca]/5 text-[#0d88ca] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#475569] font-medium mb-1 uppercase tracking-wider">Phone</p>
                  <div className="flex flex-col text-sm font-medium text-slate-800">
                    <a href="tel:+923332602502" className="hover:text-[#0d88ca] transition-colors">+92 333 2602502</a>
                    <a href="tel:+923340352072" className="hover:text-[#0d88ca] transition-colors">+92 334 0352072</a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center px-2 py-4 rounded-2xl bg-white border border-blue-100 hover:border-[#0d88ca]/30 hover:bg-[#0d88ca]/5 transition-all text-center gap-3 group shadow-sm shadow-blue-950/5">
                <div className="w-12 h-12 rounded-full bg-[#0d88ca]/5 text-[#0d88ca] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#475569] font-medium mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-[11px] text-[#0a4c7f] font-medium whitespace-nowrap w-full" title="xenithservices@live.com">xenithservices@live.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-blue-100 hover:border-[#0d88ca]/30 hover:bg-[#0d88ca]/5 transition-all text-center gap-3 group shadow-sm shadow-blue-950/5">
                <div className="w-12 h-12 rounded-full bg-[#0d88ca]/5 text-[#0d88ca] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#475569] font-medium mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-sm text-[#0a4c7f] font-medium">City View Apt</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm text-[#0a2540] ml-1 font-medium">Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe" 
                    className="w-full bg-white border border-[#0d88ca]/20 rounded-xl px-4 py-3 text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d88ca]/50 focus:border-[#0d88ca]/50 transition-all shadow-inner shadow-[#0d88ca]/5"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-[#0a2540] ml-1 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-white border border-[#0d88ca]/20 rounded-xl px-4 py-3 text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d88ca]/50 focus:border-[#0d88ca]/50 transition-all shadow-inner shadow-[#0d88ca]/5"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-[#0a2540] ml-1 font-medium">Subject</label>
                <input 
                  type="text" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="How can we help you?" 
                  className="w-full bg-white border border-[#0d88ca]/20 rounded-xl px-4 py-3 text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d88ca]/50 focus:border-[#0d88ca]/50 transition-all shadow-inner shadow-[#0d88ca]/5"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-[#0a2540] ml-1 font-medium">Message</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full bg-white border border-[#0d88ca]/20 rounded-xl px-4 py-3 text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d88ca]/50 focus:border-[#0d88ca]/50 transition-all resize-none shadow-inner shadow-[#0d88ca]/5"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-sm inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message Now"}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  )}
                </button>

                <a
                  href="https://wa.me/923332602502?text=Hello%20Xenith%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20Enterprise%20POS%20%26%20Accounting%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] transition-all duration-200 shadow-sm shadow-emerald-500/20 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <svg 
                    className="w-4 h-4 fill-white shrink-0" 
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.96L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.586 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  <span className="text-sm font-semibold tracking-tight text-white">
                    Direct WhatsApp
                  </span>
                </a>
              </div>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mt-4 text-center text-sm text-emerald-600 bg-emerald-50 rounded-lg py-3 px-4 font-medium border border-emerald-200 shadow-sm"
                >
                  ✓ Inquiry received! Our enterprise team will respond shortly.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mt-4 text-center text-sm text-rose-600 bg-rose-50 rounded-lg py-3 px-4 font-medium border border-rose-200 shadow-sm"
                >
                  Failed to send. Please reach out to our team directly via WhatsApp.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
