"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, Info, ShieldCheck } from 'lucide-react';

export default function JobDetail({ job, onApply }: any) {
  if (!job) return null;

  return (
    <motion.div 
      key={job.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full bg-white w-full"
    >
      {/* STICKY HEADER */}
      <div className="p-5 md:p-8 border-b bg-white shrink-0 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#2aecb2]/10 text-[#2aecb2] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                Full-Time
              </span>
              <span className="text-slate-400 text-xs">ID: EDP-{job.id}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-slate-600 text-xs md:text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={16} className="text-[#2aecb2]" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Briefcase size={16} className="text-[#2aecb2]" /> {job.category}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 font-medium">
                <Calendar size={16} className="text-[#2aecb2]" /> {job.postedDate}
              </span>
            </div>
          </div>

          <button 
            onClick={onApply}
            className="w-full md:w-auto bg-[#2aecb2] hover:bg-[#25d49f] text-slate-900 px-10 py-4 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-[1.5px] transition-all shadow-lg shadow-[#2aecb2]/20 active:scale-95"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-8 scroll-smooth">
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-[#2aecb2] rounded-full" />
            <h4 className="text-lg font-bold text-slate-900">About the Role</h4>
          </div>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg italic">
            {job.description}
          </p>
        </section>

        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-[#2aecb2] rounded-full" />
            <h4 className="text-lg font-bold text-slate-900">Requirements</h4>
          </div>
          <div className="grid gap-3">
            {job.requirements.map((req: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 p-3 md:p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <ShieldCheck size={18} className="text-[#2aecb2] shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm md:text-base font-medium">{req}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white">
          <h4 className="text-base font-bold mb-2 flex items-center gap-2">
            <Info size={18} className="text-[#2aecb2]" /> Important
          </h4>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            E-Digital Pakistan is an equal opportunity employer. All applications must be submitted through our official portal.
          </p>
        </section>

        <div className="h-10" />
      </div>
    </motion.div>
  );
}