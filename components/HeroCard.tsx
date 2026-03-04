"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Box, Globe } from 'lucide-react';

interface Talent {
  id: number;
  name: string;
  role: string;
  previous: string;
  image: string;
  logo: string;
}

interface HeroCardProps {
  current: Talent;
}

export default function HeroCard({ current }: HeroCardProps) {
  return (
    <div className="w-full order-1 lg:order-2">
      <div className="relative w-full max-w-[300px] mx-auto sm:max-w-[480px] lg:max-w-[440px] bg-white lg:bg-transparent rounded-[2rem] shadow-xl lg:shadow-none overflow-hidden lg:overflow-visible">
        
        {/* Full profile cards container */}
        <div className="relative h-[280px] sm:h-[350px] lg:h-[450px] lg:-left-28 bg-[#f0f2f8] lg:rounded-[2.5rem] overflow-hidden">
          {/* Profile Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={current.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-80 sm:h-full lg:h-full object-cover sm:w-60 object-top"
              alt={current.name}
            />
          </AnimatePresence>

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/20 to-transparent z-20" />
        </div>

        {/* Floating Stats/Role Card */}
        <motion.div
          key={`stats-${current.id}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative p-6 sm:absolute sm:-top-0 sm:-right-0 sm:h-[392px] sm:w-[240px] lg:absolute lg:-top-0 lg:-right-16 h-auto lg:h-[450px] bg-white lg:rounded-r-[2.5rem] lg:border border-gray-50 lg:w-[290px] z-30 shadow-sm"
        >
          {/* Background Decoration Icon (Desktop Only) */}
          <Globe size={142} fill="#ffffff" className="text-[#dbd9d9] mb-5 mx-auto hidden lg:block" />
          
          <h3 className="text-[#204ecf] font-bold text-xl lg:text-[19px]">{current.name}</h3>
          
          <div className="flex items-center gap-1.5 mt-2 text-[#00a369] font-extrabold text-[10px] uppercase tracking-wider">
            <CheckCircle2 size={14} fill="#00d68f" className="text-white" /> Verified Expert
          </div>
          
          <div className="flex items-center gap-2 mt-3 text-[#6b7280] text-sm">
            <Box size={16} /> {current.role}
          </div>

          <div className="mt-8 sm:mt-12 pt-5 border-t border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Previously at</p>
            <div className="flex items-center gap-3 mt-2">
              <img src={current.logo} className="w-7 h-7 object-contain" alt="logo" />
              <span className="text-2xl lg:text-[28px] font-bold text-[#1a1c21] tracking-tighter">
                {current.previous}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}