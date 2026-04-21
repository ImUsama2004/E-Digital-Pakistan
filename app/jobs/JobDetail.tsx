"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, Info, ShieldCheck } from 'lucide-react';

interface JobDetailProps {
  job: {
    id: string;
    title: string;
    location: string;
    postedDate: string;
    category: string;
    description: string;
    requirements: string[];
  } | null;
  onApply: () => void;
}

export default function JobDetail({ job, onApply }: JobDetailProps) {
  if (!job) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-white">
        <div className="bg-slate-50 p-6 rounded-full mb-4">
          <Briefcase size={40} className="text-slate-200" />
        </div>
        <p className="font-medium">Select a job to view the full requirements</p>
      </div>
    );
  }

  return (
    <motion.div 
      key={job.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full bg-white"
    >
      {/* 1. FIXED HEADER: Stays at the top while scrolling content */}
      <div className="p-8 border-b bg-white shrink-0 shadow-sm z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#2aecb2]/10 text-[#2aecb2] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                Full-Time
              </span>
              <span className="text-slate-400 text-xs">ID: EDP-{job.id}2026</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-5 text-slate-600 text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={16} className="text-[#2aecb2]" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Briefcase size={16} className="text-[#2aecb2]" /> {job.category}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar size={16} className="text-[#2aecb2]" /> {job.postedDate}
              </span>
            </div>
          </div>

          <button 
            onClick={onApply}
            className="bg-[#2aecb2] hover:bg-[#25d49f] text-slate-900 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[1.5px] transition-all shadow-lg shadow-[#2aecb2]/20 hover:scale-[1.02] active:scale-95"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT: Independent scroll area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth">
        
        {/* About the Role */}
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-[#2aecb2] rounded-full" />
            <h4 className="text-xl font-bold text-slate-900">About the Role</h4>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg italic">
            {job.description}
          </p>
        </section>

        {/* Requirements List */}
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#2aecb2] rounded-full" />
            <h4 className="text-xl font-bold text-slate-900">What we are looking for</h4>
          </div>
          <div className="grid gap-4">
            {job.requirements.map((req, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/30 group hover:border-[#2aecb2]/30 hover:bg-white transition-all"
              >
                <div className="mt-1 bg-[#2aecb2]/10 p-1.5 rounded-lg group-hover:bg-[#2aecb2] transition-colors">
                  <ShieldCheck size={16} className="text-[#2aecb2] group-hover:text-white" />
                </div>
                <span className="text-slate-700 leading-relaxed font-medium">
                  {req}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits/Misc Info */}
        <section className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Info size={20} className="text-[#2aecb2]" /> 
              Important Information
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              E-Digital Pakistan is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All applications must be submitted through our official portal.
            </p>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#2aecb2]/10 rounded-full blur-3xl" />
        </section>

        {/* Bottom Spacer for comfortable scrolling */}
        <div className="h-20" />
      </div>
    </motion.div>
  );
}