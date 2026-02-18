"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const words: string[] = ["Revolutionary", "Solvable", "Valuable", "Sustainable"];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    // min-h-[75vh] provides a strong presence without forcing a full-page scroll
    <section className="flex flex-col items-center justify-center min-h-[75vh] py-10 bg-white px-5 text-center">
      
      {/* Video/Play Icon - Slightly larger scale */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-10 cursor-pointer group"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-cyan-400 text-cyan-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-xl group-hover:shadow-cyan-100">
          <Play fill="currentColor" size={24} className="ml-1" />
        </div>
      </motion.div>

      {/* Headline - Balanced at 7xl for a premium feel */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black max-w-4xl leading-[1.1] sm:leading-[1.05]">
        We Create Solutions <br />
        That Are <br />
        
        <span className="relative inline-block text-cyan-500 min-h-[1.2em] min-w-70">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1] // Snappy "Wolfiz" style transition
              }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-gray-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
      >
        Transforming bold ideas into world-class digital experiences through 
        innovation and precise execution.
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mt-12">
        {/* Quote Button */}
        <button className="group flex items-center justify-between gap-6 pl-8 pr-2 py-2 rounded-full border-2 border-cyan-400 text-cyan-600 font-bold hover:bg-cyan-50 transition-all">
          GET A QUOTE
          <div className="bg-cyan-500 rounded-full p-3 text-white transition-transform group-hover:rotate-45">
            <ArrowRight size={20} />
          </div>
        </button>

        {/* Work Button */}
        <button className="group flex items-center justify-between gap-6 pl-8 pr-2 py-2 rounded-full bg-black text-white font-bold hover:bg-neutral-900 transition-all">
          OUR WORK
          <div className="bg-white rounded-full p-3 text-black transition-transform group-hover:rotate-45">
            <ArrowRight size={20} />
          </div>
        </button>
      </div>

    </section>
  );
};

export default HeroSection;