"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  BarChart4,
  Briefcase,
  LayoutGrid,
  Box,
  Users2,
  Zap,
  X,
  ArrowUpRight,
} from "lucide-react";

interface TalentItem {
  title: string;
  body: string;
  icon: React.ElementType;
  wide?: boolean;
}

const ITEMS: TalentItem[] = [
  { title: "Developers", body: "Seasoned software engineers and architects with expertise across hundreds of technologies.", icon: Code2 },
  { title: "Designers", body: "Expert UI, UX, and Visual designers specializing in high-conversion digital products.", icon: Layers },
  { title: "Marketing Experts", body: "Specialists in growth marketing, brand strategy, and data-driven content execution.", icon: BarChart4 },
  { title: "Management Consultants", body: "Finance experts, business strategists, and financial modelers for complex operations.", icon: Briefcase },
  { title: "Project Managers", body: "Technical project leads and scrum masters utilizing industry-standard PM methodologies.", icon: LayoutGrid },
  { title: "Product Managers", body: "Digital product owners with deep expertise in lifecycle management and roadmap scaling.", icon: Box },
  { title: "Sales Experts", body: "Strategic lead generation experts, SDRs, and customer success managers.", icon: Users2 },
  { title: "Plus Thousands More Skills", body: "Whatever specialization your business requires, we provide the top 3% of global talent.", icon: Zap, wide: true },
];

export default function TalentGridSection() {
  const [activeItem, setActiveItem] = useState<TalentItem | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* REFINED HEADER */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#2aecb2]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2aecb2]">Our Network</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Leverage <br />
            <span className="text-[#2aecb2] italic font-serif">World-class Talent</span>
          </h2>
          
          <p className="max-w-2xl text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
            We provide access to a globally distributed network of elite business, 
            design, and technology professionals.
          </p>
        </div>

        {/* REFINED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100 overflow-hidden">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveItem(item)}
                className={`group relative border-r border-b border-slate-100 p-10 cursor-pointer transition-all duration-500 hover:bg-slate-50/80 flex flex-col justify-between ${
                  item.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="mb-10 text-slate-400 group-hover:text-[#2aecb2] transition-colors duration-500 transform group-hover:scale-110 origin-left">
                    <Icon size={36} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-600 transition-colors">
                    {item.body}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase group-hover:text-slate-900 transition-colors">
                    Explore Details
                  </span>
                  <div className="h-8 w-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                    <ArrowUpRight size={14} className="text-slate-300 group-hover:text-white transition-all group-hover:rotate-45" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-xl bg-white p-10 md:p-16 shadow-2xl rounded-2xl z-101"
            >
              <button 
                onClick={() => setActiveItem(null)} 
                className="absolute right-8 top-8 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all"
              >
                <X size={20} strokeWidth={2} />
              </button>

              <div className="mb-10 inline-flex p-4 rounded-2xl bg-emerald-50 text-emerald-500">
                <activeItem.icon size={40} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{activeItem.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">{activeItem.body}</p>
              
              <button className="w-full group bg-slate-900 text-white px-8 py-5 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-emerald-600 transition-all flex items-center justify-center gap-3">
                Hire Top {activeItem.title}
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}