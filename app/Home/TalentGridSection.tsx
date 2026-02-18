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
  {
    title: "Developers",
    body: "Seasoned software engineers and architects with expertise across hundreds of technologies.",
    icon: Code2,
  },
  {
    title: "Designers",
    body: "Expert UI, UX, and Visual designers specializing in high-conversion digital products.",
    icon: Layers,
  },
  {
    title: "Marketing Experts",
    body: "Specialists in growth marketing, brand strategy, and data-driven content execution.",
    icon: BarChart4,
  },
  {
    title: "Management Consultants",
    body: "Finance experts, business strategists, and financial modelers for complex operations.",
    icon: Briefcase,
  },
  {
    title: "Project Managers",
    body: "Technical project leads and scrum masters utilizing industry-standard PM methodologies.",
    icon: LayoutGrid,
  },
  {
    title: "Product Managers",
    body: "Digital product owners with deep expertise in lifecycle management and roadmap scaling.",
    icon: Box,
  },
  {
    title: "Sales Experts",
    body: "Strategic lead generation experts, SDRs, and customer success managers.",
    icon: Users2,
  },
  {
    title: "Plus Thousands More Skills",
    body: "Whatever specialization your business requires, we provide the top 3% of global talent.",
    icon: Zap,
    wide: true,
  },
];

export default function TalentGridSection() {
  const [activeItem, setActiveItem] = useState<TalentItem | null>(null);

  return (
    <>
<<<<<<< HEAD
      {/* SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] mb-6 tracking-tighter">
              Leverage World Class
              <span className="text-emerald-500 italic">Talent</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 sm:text-lg">
              We are the largest, globally distributed network of top business,
              design, and technology talent.
=======
      <section className="bg-white py-20 px-4 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl">
              Leverage <span className="font-semibold italic">World-class</span> Talent
            </h2>
            <div className="mt-6 h-1 w-20 bg-slate-900" />
            <p className="mt-8 max-w-2xl text-slate-500 text-lg leading-relaxed">
              We provide access to a globally distributed network of elite business, design, and technology professionals.
>>>>>>> 19cc0d3670adb039c6c318f0bf5938e48aee429c
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
            {ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  onClick={() => setActiveItem(item)}
                  className={`relative group border-r border-b border-slate-100 p-8 cursor-pointer transition-colors duration-500 hover:bg-slate-50/50 ${
                    item.wide ? "lg:col-span-2" : ""
                  }`}
                >
<<<<<<< HEAD
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-emerald-500 ring-1 ring-blue-100">
                      <Icon size={20} />
                    </div>

                    {/* Content */}
=======
                  <div className="flex flex-col h-full justify-between">
>>>>>>> 19cc0d3670adb039c6c318f0bf5938e48aee429c
                    <div>
                      {/* Professional Icon Style: Thin, Slate-colored, No heavy background */}
                      <div className="mb-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                        <Icon size={32} strokeWidth={1} />
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:translate-x-1 transition-transform">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-600 transition-colors">
                        {item.body}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase group-hover:text-slate-900 transition-colors">
                        View Profile
                      </span>
                      <ArrowUpRight size={14} className="text-slate-300 group-hover:text-slate-900 group-hover:rotate-45 transition-all" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-sm bg-slate-900/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white p-12 shadow-2xl rounded-sm"
            >
              <button onClick={() => setActiveItem(null)} className="absolute right-8 top-8 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={24} strokeWidth={1} />
              </button>

              <div className="mb-8 text-slate-900">
                <activeItem.icon size={48} strokeWidth={1} />
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeItem.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">{activeItem.body}</p>
              
              <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-all">
                Hire Top Talent
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}