"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, TrendingUp } from 'lucide-react';

export default function JobCard({ job, isSelected, onClick }: any) {
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-all relative overflow-hidden shrink-0 ${
        isSelected 
          ? 'border-[#2aecb2] bg-white shadow-md' 
          : 'border-transparent bg-white hover:border-slate-200 shadow-sm'
      }`}
    >
      {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2aecb2]" />}
      
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          {job.trending && (
            <span className="inline-flex items-center gap-1 text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              <TrendingUp size={10} /> Trending
            </span>
          )}
          <h3 className="font-bold text-slate-900 text-base md:text-lg leading-tight">{job.title}</h3>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <MapPin size={12} /> {job.location}
          </div>
        </div>
        <ChevronRight size={18} className={isSelected ? 'text-[#2aecb2]' : 'text-slate-300'} />
      </div>
      
      <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
         <span className="bg-slate-50 px-2 py-1 rounded border border-slate-100">{job.category}</span>
         <span>{job.postedDate}</span>
      </div>
    </motion.div>
  );
}