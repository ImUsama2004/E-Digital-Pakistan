"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, TrendingUp } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  location: string;
  postedDate: string;
  category: string;
  trending?: boolean;
}

export default function JobCard({ job, isSelected, onClick }: { job: Job, isSelected: boolean, onClick: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={`p-5 rounded-xl border-2 cursor-pointer transition-all relative overflow-hidden shrink-0 ${
        isSelected ? 'border-[#2aecb2] bg-white shadow-md' : 'border-transparent bg-white hover:border-slate-200 shadow-sm'
      }`}
    >
      {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2aecb2]" />}
      
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          {job.trending && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full uppercase">
              <TrendingUp size={10} /> Trending
            </span>
          )}
          <h3 className="font-bold text-slate-900 text-lg leading-tight">{job.title}</h3>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} /> {job.location}
          </div>
        </div>
        <ChevronRight size={18} className={isSelected ? 'text-[#2aecb2]' : 'text-slate-300'} />
      </div>
      
      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-medium">
         <span className="bg-slate-100 px-2 py-1 rounded">{job.category}</span>
         <span>{job.postedDate}</span>
      </div>
    </motion.div>
  );
}