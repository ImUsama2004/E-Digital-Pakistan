"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  TrendingUp,
  Briefcase,
  Kanban,
  Package,
  Handshake,
  Sparkles,
  X,
} from "lucide-react";

// 1. Define the shape of an individual item
interface TalentItem {
  title: string;
  body: string;
  icon: React.ElementType; // This allows Lucide icons to be passed as components
  wide?: boolean;
}

// 2. Apply the TalentItem[] type to your constant array
const ITEMS: TalentItem[] = [
  {
    title: "Developers",
    body: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
    icon: Code,
  },
  {
    title: "Designers",
    body: "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.",
    icon: Palette,
  },
  {
    title: "Marketing Experts",
    body: "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, and more.",
    icon: TrendingUp,
  },
  {
    title: "Management Consultants",
    body: "Finance experts, business strategists, M&A consultants, financial modelers, and more.",
    icon: Briefcase,
  },
  {
    title: "Project Managers",
    body: "Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools.",
    icon: Kanban,
  },
  {
    title: "Product Managers",
    body: "Digital product managers, scrum product owners with expertise in numerous industries.",
    icon: Package,
  },
  {
    title: "Sales Experts",
    body: "Lead generation experts, SDRs, sales reps, BDRs, customer success managers, and more.",
    icon: Handshake,
  },
  {
    title: "Plus Thousands More Skills",
    body: "Whatever skill or specialization your business requires, we have the top talent to meet your needs.",
    icon: Sparkles,
    wide: true,
  },
];

export default function TalentGridSection() {
  // 3. Initialize state as either null OR a TalentItem
  const [activeItem, setActiveItem] = useState<TalentItem | null>(null);

  return (
    <>
      {/* SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Leverage World-class Talent
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 sm:text-lg">
              We are the largest, globally distributed network of top business,
              design, and technology talent.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`border border-slate-200 bg-white p-6 shadow-sm ${
                    item.wide ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon size={20} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.body}
                      </p>

                      <button
                        onClick={() => setActiveItem(item)}
                        className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-blue-200"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL / DRAWER */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md rounded-t-2xl sm:rounded-2xl bg-white p-6 shadow-xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  {activeItem.title}
                </h3>
                <button
                  onClick={() => setActiveItem(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <p className="mt-3 text-sm text-slate-600">{activeItem.body}</p>

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setActiveItem(null)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
