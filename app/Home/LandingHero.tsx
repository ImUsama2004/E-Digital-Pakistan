"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Box, Globe, PlayCircle } from 'lucide-react';

const talentData = [
  {
    id: 1,
    name: "Cheryl Da Silva",
    role: "Marketing Strategist",
    previous: "Google",
    image: "/",
    logo: "/"
  },
  {
    id: 2,
    name: "Adrian Gonzalez",
    role: "AI Product Manager",
    previous: "Microsoft",
    image: "/",
    logo: "/"
  },
  {
    id: 3,
    name: "Jonah Elbaz",
    role: "React Developer",
    previous: "Meta",
    image: "/",
    logo: "/"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "UX Designer",
    previous: "Apple",
    image: "/",
    logo: "/"
  }
];

export default function ToptalHero() {
  const [view, setView] = useState<'talent' | 'services'>('talent');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const current = talentData[activeIndex];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 376; 
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % talentData.length;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? talentData.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    if (view === 'services') return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, view]);

  return (
    <section className="relative min-h-[920px] bg-[#e7eaf2] flex flex-col items-center pt-8 overflow-hidden font-sans">
      
      {/* 1. Pill Toggle Navigation */}
      <div className="flex items-center gap-4 bg-[#d9dde7] rounded-full p-1.5 border border-white/30 shadow-sm z-20">
        <span className="text-gray-500 text-[13px] font-semibold ml-4">I&apos;m looking for</span>
        <div className="flex bg-white/40 rounded-full p-1">
          <button 
            onClick={() => setView('talent')}
            className={`px-7 py-2 rounded-full font-bold text-[14px] transition-all ${view === 'talent' ? 'bg-white text-[#204ecf] shadow-md' : 'text-gray-600'} cursor-pointer`}
          >
            Talent
          </button>
          <button 
            onClick={() => setView('services')}
            className={`cursor-pointer px-7 py-2 rounded-full font-bold text-[14px] flex items-center gap-2 transition-all ${view === 'services' ? 'bg-white text-[#204ecf] shadow-md' : 'text-gray-600'}`}
          >
            Consulting & <span className="bg-[#204ecf] text-white px-1.5 py-0.5 rounded-sm text-[10px] uppercase tracking-tighter">Services</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'talent' ? (
          <motion.div 
            key="talent-view"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="relative w-full flex flex-col items-center"
          >
            <div className="relative w-full max-w-[1300px] px-8 grid lg:grid-cols-[1.1fr_1fr] mt-24">
              <div className="flex flex-col z-20">
                <h1 className="text-[68px] font-bold text-[#1a1c21] leading-[1.1] tracking-tight">
                  Hire the <span className="underline decoration-[#c1c7d6] underline-offset-8 decoration-2">Top 3%</span> of the World’s Talent™
                </h1>
                <p className="mt-12 text-[19px] text-[#53575e] max-w-[510px] leading-[1.65]">
                  Toptal is an exclusive network of the top software developers, designers, marketing experts, management consultants, product managers, and project managers in the world.
                </p>
                <div className="mt-14">
                  <button className="bg-[#00d68f] hover:bg-[#00c080] text-white px-12 py-5 rounded-md text-[18px] font-bold transition-all shadow-lg">
                    Hire Top Talent
                  </button>
                </div>
              </div>

              <div className="relative h-[600px] flex items-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-[600px] h-[750px] z-10"
                  >
                    <img 
                      src={current.image} 
                      className="w-[260px] h-[385px] object-cover object-bottom select-none absolute bottom-[156px]" 
                      alt={current.name}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#e7eaf2] via-[#e7eaf2]/30 to-transparent z-20" />
                  </motion.div>
                </AnimatePresence>

                <motion.div 
                  key={`floating-${current.id}`}
                  initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  className="absolute top-[9.6%] right-[1%] bg-white p-3 shadow-2xl border border-white/50 w-[300px] z-30"
                >
                  <div className="relative w-full h-24 mb-6 opacity-30 grayscale"><Globe className="w-full h-full text-blue-900" /></div>
                  <div className="relative">
                    <h3 className="text-[#204ecf] font-bold text-[20px] tracking-tight">{current.name}</h3>
                    <div className="flex items-center gap-1.5 mt-2.5 text-[#00a369] font-extrabold text-[11px] uppercase tracking-[0.08em]">
                      <CheckCircle2 size={15} fill="#00d68f" className="text-white" /> Verified Expert
                    </div>
                    <div className="flex items-center gap-2 mt-2.5 text-[#6b7280] text-[14px]"><Box size={16} /> {current.role}</div>
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <p className="text-[11px] font-bold text-gray-400 uppercase">Previously at</p>
                      <div className="flex items-center gap-3 mt-4">
                        <img src={current.logo} className="w-9 h-9 object-contain" alt="logo" />
                        <span className="text-[32px] font-bold text-[#1a1c21] tracking-tighter">{current.previous}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full max-w-[1300px] px-10 -mt-10 pb-20 z-40">
              <div ref={scrollContainerRef} className="flex items-center gap-4 overflow-x-hidden scroll-smooth">
                {talentData.map((talent, idx) => (
                  <div key={talent.id} onClick={() => {setActiveIndex(idx); scrollToIndex(idx);}}
                    className={`shrink-0 w-[360px] bg-white rounded-xl flex items-stretch h-[140px] cursor-pointer transition-all duration-300 border-[3px] ${activeIndex === idx ? 'border-[#204ecf] shadow-2xl' : 'border-transparent opacity-60'}`}
                  >
                    <div className="w-32 bg-[#f0f2f8]"><img src={talent.image} className="w-full h-full object-cover object-top" alt={talent.name} /></div>
                    <div className="flex-1 p-5 flex flex-col justify-center">
                      <h4 className="font-bold text-[#1a1c21] text-lg">{talent.name}</h4>
                      <p className="text-[11px] text-gray-400 font-bold uppercase">{talent.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/3 -translate-y-1/2 -left-4 flex items-center justify-between w-[calc(100%+32px)] pointer-events-none">
                <button onClick={handlePrev} className="w-12 h-12 bg-white rounded-full shadow-xl pointer-events-auto flex items-center justify-center text-gray-300 hover:text-blue-600 border border-gray-100"><ChevronLeft size={28} /></button>
                <button onClick={handleNext} className="w-12 h-12 bg-white rounded-full shadow-xl pointer-events-auto flex items-center justify-center text-gray-300 hover:text-blue-600 border border-gray-100"><ChevronRight size={28} /></button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* SERVICES VIEW */
          <motion.div 
            key="services-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full max-w-[1300px] px-8 grid lg:grid-cols-[1fr_1.1fr] mt-24 items-center gap-12"
          >
            <div className="flex flex-col">
              <h1 className="text-[56px] font-bold text-[#1a1c21] leading-[1.1] tracking-tight">
                High-impact Solutions Powered by World-class Talent and Agile Teams
              </h1>
              <p className="mt-8 text-[19px] text-[#53575e] max-w-[480px] leading-[1.6]">
                Toptal solves complex business challenges with outcome-oriented services and solutions tailored to your needs. From technology to marketing to management consulting, we offer everything you need to achieve your goals.
              </p>
              <div className="mt-10">
                <button className="bg-[#00d68f] text-white px-10 py-5 rounded-md text-[18px] font-bold shadow-lg">
                  Explore Consulting & Services
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
               <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="office" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <PlayCircle className="text-white w-20 h-20 opacity-90" strokeWidth={1} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
                    <div className="w-full h-1 bg-blue-600 absolute top-0 left-0" />
                    <p className="text-[#1a1c21] font-bold text-xl">Bridgestone reinvents tire management with scalable, data-driven monitoring software.</p>
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-0.5 bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                  {['BRIDGESTONE', 'CAVALIERS', 'zoetis', 'USC', 'CSR', 'Precision', 'KAMYLON', 'Big Sur AI'].map((logo) => (
                    <div key={logo} className="bg-white p-4 h-20 flex items-center justify-center text-[10px] font-black text-gray-300 grayscale opacity-70 hover:opacity-100 transition-all cursor-pointer">
                      {logo}
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}