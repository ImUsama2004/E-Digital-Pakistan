"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import HeroCard from "@/components/HeroCard"; // Ensure this path is correct

const talentData = [
  { id: 1, name: "Cheryl Da Silva", role: "Marketing Strategist", previous: "Google", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", logo: "https://www.svgrepo.com/show/475656/google-color.svg" },
  { id: 2, name: "Adrian Gonzalez", role: "AI Product Manager", previous: "Microsoft", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_icon.svg" },
  { id: 3, name: "Jonah Elbaz", role: "React Developer", previous: "Meta", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgqQX-NWBxs6V0Nej0CJAExi0psJbACvU6g&s" },
  { id: 4, name: "Sarah Jenkins", role: "UX Designer", previous: "Apple", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800", logo: "https://cdn.iconscout.com/icon/free/png-256/free-apple-logo-icon-svg-download-png-458226.png?f=webp" }
];

const partnerLogos = ['BRIDGESTONE', 'CAVALIERS', 'zoetis', 'USC', 'CSR', 'Precision', 'KAMYLON', 'Big Sur AI'];

export default function ToptalHero() {
  const [view, setView] = useState<'talent' | 'services'>('talent');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const current = talentData[activeIndex];

  const updateIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
    if (scrollRef.current) {
      const card = scrollRef.current.children[newIndex] as HTMLElement;
      scrollRef.current.scrollTo({
        left: card.offsetLeft - scrollRef.current.offsetWidth / 2 + card.offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => updateIndex((activeIndex + 1) % talentData.length);
  const handlePrev = () => updateIndex(activeIndex === 0 ? talentData.length - 1 : activeIndex - 1);

  useEffect(() => {
    if (view === 'services') return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, view]);

  return (
    <section className="relative min-h-screen bg-[#e7eaf2] flex flex-col items-center pt-8 overflow-x-hidden font-sans pb-16">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Navigation Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8 w-full">
        <p className="text-[14px] font-semibold text-gray-500 whitespace-nowrap">I'm looking for</p>
        <div className="flex items-center bg-[#d9dde7] rounded-full p-1 border border-white/30 shadow-sm">
          <div className="flex bg-white/40 rounded-full p-1">
            <button 
              onClick={() => setView('talent')} 
              className={`px-6 sm:px-8 py-2 rounded-full font-bold text-[13px] transition-all cursor-pointer ${
                view === 'talent' ? 'bg-white text-[#2aecb2] shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Talent
            </button>
            <button 
              onClick={() => setView('services')} 
              className={`px-6 sm:px-8 py-2 rounded-full font-bold text-[13px] transition-all cursor-pointer ${
                view === 'services' ? 'bg-white text-[#2aecb2] shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Services
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'talent' ? (
          <motion.div key="talent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-6xl px-4 sm:px-10">
            <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center mt-4 lg:mt-10 lg:-ml-14">
              
              {/* Left Content Area */}
              <div className="text-center lg:text-left order-1 lg:order-1">
                <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#1a1c21] leading-[1.15]">
                  Hire the <span className="underline decoration-[#c1c7d6] underline-offset-4 lg:underline-offset-8 decoration-2">Top 3%</span> of World Talent
                </h1>
                <p className="mt-6 text-[17px] text-[#53575e] max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Toptal is an exclusive network of the world's top developers, designers, and finance experts.
                </p>
                <button className="mt-8 w-full sm:w-auto bg-[#2aecb2] text-white px-10 py-4 rounded-md font-bold text-base shadow-lg hover:shadow-2xl active:scale-95 transition-all">
                  Hire Top Talent
                </button>
              </div>

              {/* REPLACED CODE: HeroCard Component with Mobile Controls */}
              <div className="w-full order-2 lg:order-2 relative">
                 {/* Re-adding the mobile controls around the component to maintain functionality */}
                 <div className="absolute inset-x-0 top-35 sm:hidden flex justify-between px-2 z-50 pointer-events-none">
                    <button onClick={handlePrev} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto active:scale-90"><ChevronLeft size={20}/></button>
                    <button onClick={handleNext} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto active:scale-90"><ChevronRight size={20}/></button>
                 </div>
                 
                 <HeroCard current={current} />
              </div>
            </div>

            {/* Bottom Scrollable Cards */}
            <div className="relative mt-16 px-4 sm:px-12 hidden sm:block">
              <button onClick={handlePrev} className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2aecb2] hover:text-white transition-all z-50 border border-gray-100 cursor-pointer active:scale-90">
                <ChevronLeft size={22} />
              </button>

              <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar py-4 snap-x">
                {talentData.map((t, idx) => (
                  <div key={t.id} onClick={() => updateIndex(idx)} className={`shrink-0 w-80 h-32 sm:w-80 bg-white rounded-xl flex items-center p-3 cursor-pointer transition-all border-2 snap-center ${activeIndex === idx ? 'border-[#2aecb2] shadow-lg -translate-y-1' : 'border-transparent opacity-60'}`}>
                    <img src={t.image} className="w-20 h-24 rounded-lg object-cover object-top mr-3" alt={t.name} />
                    <div className="min-w-0">
                      <h4 className="font-bold text-[#1a1c21] text-lg truncate">{t.name}</h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase truncate">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={handleNext} className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2aecb2] hover:text-white transition-all z-50 border border-gray-100 cursor-pointer active:scale-90">
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Services View */
          <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-6xl px-4 sm:px-10 flex flex-col lg:grid lg:grid-cols-[1fr_1fr] mt-4 lg:mt-10 gap-10 items-center">
            <div className="w-full order-1 lg:order-2 flex flex-col gap-6">
              <div className="relative group w-full aspect-4/5 sm:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Services" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent p-6 flex flex-col justify-end gap-4">
                  <div className="w-14 h-14 bg-[#00d68f] rounded-full flex items-center justify-center self-center sm:self-start shadow-xl">
                    <PlayCircle className="text-white w-8 h-8" />
                  </div>
                  <p className="text-white font-bold text-lg sm:text-xl leading-tight">Bridgestone reinvents tire management with data-driven software.</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 opacity-30 grayscale items-center px-4">
                 {partnerLogos.slice(0, 4).map(l => <span key={l} className="text-[9px] font-black text-center">{l}</span>)}
              </div>
            </div>

            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#1a1c21] leading-tight">High-impact <br className="hidden sm:block"/>Solutions.</h1>
              <p className="mt-6 text-base text-[#53575e] max-w-md mx-auto lg:mx-0">Toptal solves complex business challenges with outcome-oriented services.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="bg-[#00d68f] text-white px-8 py-4 rounded-lg font-bold">Explore Services</button>
                <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-lg font-bold">Contact Sales</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}