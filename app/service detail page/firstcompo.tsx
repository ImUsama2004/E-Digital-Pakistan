"use client"; // Required for Framer Motion in Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for cleaner code
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden px-6">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-red-900/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-950/25 rounded-[100%] blur-[100px]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
        >
          Because The Future <br /> Is Online
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          In today's world, an app speaks volumes. With a simple pressing of a button, 
          customers can access your entire business in the virtual arena and that's 
          exactly where we come in. With cutting-edge app development, we make 
          your shift as easy as a breeze.
        </motion.p>
      </div>

      {/* Side Button - Sliding in from right */}
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
      >
        <button className="bg-[#1a8fff] hover:bg-blue-500 transition-all duration-300 text-white py-10 px-4 rounded-l-3xl flex items-center justify-center group">
          <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.2em] font-bold text-xs group-hover:tracking-[0.3em] transition-all">
            Talk With Us
          </span>
        </button>
      </motion.div>

    </section>
  );
};

export default Hero;