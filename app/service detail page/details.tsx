"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Types & Data ---
interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  highlightText?: string;
  iconType: string;
}

const steps: ProcessStep[] = [
  {
    id: 'requirements',
    number: '01',
    title: 'Requirements Gathering',
    description: "Share your vision with us and we can take your idea, mature it and turn it into a successful mobile app.",
    iconType: 'list'
  },
  {
    id: 'validation',
    number: '02',
    title: 'Idea Validation',
    highlightText: "Ideas are great when they’re ambitious but often end up in loss if they're not validated.",
    description: "We work hard to validate your idea, provide a thorough summary in terms of the earning model and time required.",
    iconType: 'lightbulb'
  },
  {
    id: 'brainstorming',
    number: '03',
    title: 'Brain Storming',
    description: "We dive deep into user personas and market trends to ensure your app stands out with creative, unique solutions.",
    iconType: 'brain'
  },
  {
    id: 'scope',
    number: '04',
    title: 'Scope Documentation',
    description: "We outline every feature and integration into a comprehensive blueprint for your entire project.",
    iconType: 'scope'
  },
  {
    id: 'wireframing',
    number: '05',
    title: 'Wire Framing',
    description: "We build low-fidelity skeletons of your app to perfect the user journey and functionality.",
    iconType: 'wireframe'
  },
  {
    id: 'uiux',
    number: '06',
    title: 'UI/UX Design',
    description: "We blend aesthetics with usability to create intuitive, engaging, and brand-reflective designs.",
    iconType: 'uiux'
  },
  {
    id: 'programming',
    number: '07',
    title: 'Programming',
    description: "Our developers build a robust, scalable engine using clean code to power your application.",
    iconType: 'code'
  },
  {
    id: 'qa',
    number: '08',
    title: 'Quality Assurance',
    description: "Rigorous testing ensures a bug-free, high-performance experience that meets industry standards.",
    iconType: 'qa'
  }
];

const FullProcessPath = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* Header with Hexagon Pattern */}
      <div className="relative bg-[#111111] py-24 px-6 text-center mb-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9l11-6.35 11 6.35v12.7l-11 6.35L3 30.6V17.9z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: '28px 49px'
          }}
        />
        <div className="relative z-10">
          <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">The Journey of Creation</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Designing The Future</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {steps.map((step, index) => {
          const isEven = index % 2 !== 0; 
          
          return (
            <React.Fragment key={step.id}>
              <div className={`grid md:grid-cols-2 gap-16 items-center py-20 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Content - Slides in from its side to center */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative z-10"
                >
                  <span className="absolute -left-10 -top-20 text-[10rem] md:text-[14rem] font-black text-gray-50 -z-10 select-none pointer-events-none">
                    {step.number}
                  </span>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1a8fff] rounded-full flex items-center justify-center shadow-lg">
                        <div className="grid grid-cols-2 gap-1">
                            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />)}
                        </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{step.title}</h3>
                  </div>

                  {step.highlightText && (
                    <p className="text-gray-800 text-lg font-bold mb-4">{step.highlightText}</p>
                  )}
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md">{step.description}</p>
                </motion.div>

                {/* Visual Content - Slides in from the opposite side to center */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex justify-center"
                >
                  <IconSelector type={step.iconType} />
                </motion.div>
              </div>

              {/* Dotted Connector Path */}
              {index !== steps.length - 1 && (
                <div className="flex justify-center h-32 w-full">
                  <svg width="400" height="150" viewBox="0 0 400 150" fill="none" className="opacity-20">
                    <path 
                      d={isEven ? "M350 0C350 80 50 70 50 150" : "M50 0C50 80 350 70 350 150"} 
                      stroke="#111" 
                      strokeWidth="3" 
                      strokeDasharray="10 10" 
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

// --- Custom SVG Icons (Remains same as previous stable version) ---
const IconSelector = ({ type }: { type: string }) => {
  const commonSize = "w-64 h-64 md:w-80 md:h-80";
  
  switch (type) {
    case 'list':
      return (
        <div className="flex flex-col gap-6 w-full max-w-[280px]">
          {[ '#22d3ee', '#10b981', '#f59e0b', '#f43f5e' ].map((c, i) => (
            <div key={i} className="flex items-center gap-4">
              <svg className="w-10 h-10" style={{color: c}} fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <div className="h-4 w-full bg-blue-50/60 rounded-full" />
            </div>
          ))}
        </div>
      );
    case 'lightbulb':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="50" fill="#CBD5E1" fillOpacity="0.4"/>
          <path d="M85 155h30v15a10 10 0 01-10 10H95a10 10 0 01-10-10v-15z" fill="#94A3B8" />
          <path d="M100 20v20" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round"/>
          <path d="M30 60l20 15" stroke="#10B981" strokeWidth="10" strokeLinecap="round"/>
          <path d="M170 60l-20 15" stroke="#0EA5E9" strokeWidth="10" strokeLinecap="round"/>
          <path d="M20 115h25" stroke="#EF4444" strokeWidth="10" strokeLinecap="round"/>
          <path d="M180 115h-25" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round"/>
        </svg>
      );
    case 'brain':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <path d="M100 50c-30 0-45 20-45 40 0 15 10 25 15 35s5 25 5 25h50s0-15 5-25 15-20 15-35c0-20-15-40-45-40z" fill="#E2E8F0" />
          <circle cx="85" cy="85" r="10" fill="#F43F5E" />
          <circle cx="115" cy="85" r="10" fill="#3B82F6" />
          <circle cx="100" cy="110" r="10" fill="#10B981" />
        </svg>
      );
    case 'scope':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <rect x="60" y="40" width="80" height="110" rx="8" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="4"/>
          <path d="M80 70h40M80 95h40M80 120h25" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      );
    case 'wireframe':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <rect x="60" y="50" width="80" height="100" rx="10" stroke="#94A3B8" strokeWidth="4" strokeDasharray="8 8"/>
          <path d="M60 100h80M100 50v100" stroke="#CBD5E1" strokeWidth="2"/>
          <circle cx="100" cy="100" r="15" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2"/>
        </svg>
      );
    case 'uiux':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <circle cx="80" cy="80" r="40" fill="#F43F5E" fillOpacity="0.6"/>
          <circle cx="120" cy="80" r="40" fill="#3B82F6" fillOpacity="0.6"/>
          <circle cx="100" cy="120" r="40" fill="#FBBF24" fillOpacity="0.6"/>
        </svg>
      );
    case 'code':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <path d="M70 80l-20 20 20 20M130 80l20 20-20 20M110 60l-20 80" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'qa':
      return (
        <svg className={commonSize} viewBox="0 0 200 200" fill="none">
          <circle cx="90" cy="90" r="40" stroke="#1a8fff" strokeWidth="8"/>
          <path d="M120 120l30 30" stroke="#1a8fff" strokeWidth="12" strokeLinecap="round"/>
          <path d="M80 80l20 20m0-20l-20 20" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    default: return null;
  }
};

export default FullProcessPath;