"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Network,
  PhoneCall,
  LineChart,
  Fingerprint,
  Flame,
  Wrench,
  Megaphone,
  CheckCircle2,
  Database,
  Truck,
  ChevronDown
} from "lucide-react";

type Feature = string | { title: string; items: string[] };

type Service = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: Feature[];
  footer?: string;
  bentoClass: string;
};

const ExpandableFeature = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white/10 rounded-xl border border-white/20 overflow-hidden transition-colors flex flex-col">
      <button 
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        className="w-full flex items-center justify-between p-3.5 cursor-pointer text-left focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-full bg-white/20 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3 }}
        >
           <ChevronDown className="w-4 h-4 text-white" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="pb-4 px-4 ml-10 space-y-2 text-sm text-gray-200">
               {items.map((item, idx) => (
                  <li key={idx} className="relative before:content-['•'] before:absolute before:-left-4 before:text-white/50 leading-relaxed">{item}</li>
               ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const services: Service[] = [
  {
    id: "software",
    title: "Software Development",
    icon: Code2,
    description: "Custom software and workflow applications tailored to your business logic.",
    features: [
      {
        title: "Point of Sale (POS) Systems",
        items: [
          "Retail & Wholesale Management System",
          "Restaurant Management System",
          "School Management System",
          "Hospital & Clinic Management System",
          "Gym & Fitness Center Management System"
        ]
      },
      {
        title: "Custom Software",
        items: [
          "100% Tailored Architecture: Built from the ground up to match your exact business logic.",
          "Scalable & Modular: Engineered to grow seamlessly alongside your operations.",
          "Enterprise Integration: Flawless API connection with your existing tools and workflows."
        ]
      },
      {
        title: "Workflow & Compliance Applications",
        items: [
          "Digital Invoicing & Automated Billing",
          "FBR Invoicing Integration & Compliance"
        ]
      }
    ],
    bentoClass: "md:col-span-2 bg-gradient-to-br from-white/10 to-white/5"
  },
  {
    id: "erp",
    title: "ERP Solutions",
    icon: Database,
    description: "Enterprise Resource Planning that unites your entire business under one centralized platform with FBR and digital invoicing compliance.",
    features: ["Financial management", "HR and Payroll processing", "Supply chain management", "Custom reporting modules"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "dist",
    title: "Distribution Management",
    icon: Truck,
    description: "Robust multi-warehouse management, inventory flow tracking, route planning, and logistics automation.",
    features: [
      "Inventory Management",
      "Order Management",
      "Supplier & Customer Dues",
      "Financial Modules",
      "Invoice Management",
      "Comprehensive Reporting"
    ],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    description: "Custom-built, high-speed websites and intuitive web portals tailored to elevate your digital presence and engage users effortlessly.",
    features: ["Corporate websites", "Portals", "Web applications"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    icon: Smartphone,
    description: "Native and cross-platform mobile experiences engineered for performance, intuitive user experience, and seamless scalability.",
    features: ["Android applications", "iOS applications", "Cross-platform solutions"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "lan-wan",
    title: "LAN / WAN Solutions",
    icon: Network,
    description: "Robust and secure enterprise network architecture designed to maintain uninterrupted connectivity and peak data transfer speeds.",
    features: ["LAN design", "Routing & switching", "VLANs & VPNs", "Wi-Fi & WAN connectivity", "Network optimization"],
    bentoClass: "md:col-span-2 bg-gradient-to-bl from-white/10 to-white/5"
  },
  {
    id: "pbx",
    title: "PBX / IP PBX",
    icon: PhoneCall,
    description: "Next-generation corporate telephony and communication workflows to keep your internal and client communications clear and centralized.",
    features: ["Business telephony", "Extensions & IVR", "Call routing & queues", "Voicemail", "Remote extensions"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "q-metric",
    title: "Q-Metric Solutions",
    icon: LineChart,
    description: "Intelligent real-time operational visibility and visual dashboards to track performance metrics and optimize queue workflows.",
    features: ["Monitoring & measurement", "Dashboards", "Reporting", "Operational visibility"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "access-control",
    title: "Access Control Systems",
    icon: Fingerprint,
    description: "Advanced security hardware and automated attendance tracking systems to ensure complete facility safety and entry monitoring.",
    features: ["RFID & biometric", "Door controllers & locks", "Attendance tracking", "Centralized access management"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "fire-alarm",
    title: "Fire Alarm Solutions",
    icon: Flame,
    description: "State-of-the-art fire detection, intelligent alarm networks, and automated safety systems engineered for immediate emergency response.",
    features: ["Detection & alarm panels", "Manual call points", "Sounders & strobes", "System integration"],
    bentoClass: "md:col-span-1 bg-white/5"
  },
  {
    id: "it-support",
    title: "IT Support & Maintenance",
    icon: Wrench,
    description: "Proactive system maintenance, technical administration, and round-the-clock troubleshooting to keep your business operations running without downtime.",
    features: ["Troubleshooting", "Administration", "Preventive maintenance", "Technical support"],
    bentoClass: "md:col-span-2 bg-gradient-to-tr from-white/10 to-white/5"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    icon: Megaphone,
    description: "Data-driven marketing strategies and search visibility campaigns designed to capture leads, build brand authority, and maximize ROI.",
    features: ["Social media management", "Search optimization (SEO)", "Digital campaigns"],
    bentoClass: "md:col-span-1 bg-white/5"
  }
];

export function ServiceSelector() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveServiceId(prev => prev === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-[1.15] mb-4">
          Services <span className="text-sky-600">We Offer</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Comprehensive technology solutions engineered to scale your operations, secure your infrastructure, and streamline workflows.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          const isExpanded = activeServiceId === service.id;
          const hasNestedFeatures = service.features.some(f => typeof f === 'object');

          return (
            <div
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`
                group relative rounded-[2rem] p-8 cursor-pointer overflow-hidden 
                transition-all duration-300 ease-out flex flex-col justify-between
                bg-gradient-to-br from-[#0a4c7f] to-[#0d88ca] border border-white/20 shadow-[0_10px_30px_-10px_rgba(10,76,127,0.08)]
                hover:border-white/40 hover:shadow-[0_12px_35px_-5px_rgba(13,136,202,0.4)]
                ${isExpanded ? 'md:col-span-3 z-20' : service.bentoClass.split(' ')[0]}
              `}
              style={{ minHeight: isExpanded ? 'auto' : '220px' }}
            >
              {/* Watermark Icon */}
              <Icon className="absolute right-4 bottom-4 w-32 h-32 text-white/10 opacity-20 pointer-events-none transform -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30" />

              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl transition-colors">
                  <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>

                {/* Expand Indicator */}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors relative">
                  <div className={`w-3 h-[2px] bg-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  <div className={`w-[2px] h-3 bg-white absolute transition-transform duration-300 ${isExpanded ? 'rotate-90 opacity-0' : ''}`} />
                </div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-col gap-3 mt-auto">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{service.title}</h3>

                {/* Description - Collapsed View */}
                <div className={`transition-all duration-300 ease-out overflow-hidden ${isExpanded ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
                  <p className="text-sm text-gray-200 line-clamp-2">{service.description}</p>
                </div>

                {/* Expanded View Content with Smooth Grid Accordion */}
                <div className={`grid transition-all duration-500 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden flex flex-col gap-6">
                    <p className="text-base text-gray-100 leading-relaxed max-w-3xl">{service.description}</p>

                    <div className={`grid grid-cols-1 ${hasNestedFeatures ? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-3`}>
                      {service.features.map((feature, idx) => {
                        if (typeof feature === 'string') {
                          return (
                            <div key={idx} className="flex items-center gap-3 bg-white/10 p-3.5 rounded-xl border border-white/20 transition-colors">
                              <div className="p-1 rounded-full bg-white/20 shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-white">{feature}</span>
                            </div>
                          );
                        } else {
                          return <ExpandableFeature key={idx} title={feature.title} items={feature.items} />;
                        }
                      })}
                    </div>

                    {service.footer && (
                      <div className="border-l-4 border-white/40 pl-4 py-1 mt-2">
                        <p className="text-sm leading-relaxed text-gray-200 italic font-medium">
                          {service.footer}
                        </p>
                      </div>
                    )}

                    <div className="mt-4 mb-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); }}
                        className="px-6 py-3 rounded-full bg-white text-[#0a4c7f] text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group w-fit shadow-lg"
                      >
                        <span>Start Project &rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}