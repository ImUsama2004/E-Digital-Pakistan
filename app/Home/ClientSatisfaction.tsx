"use client";

import React from 'react';
import { Globe, FileText, Star, Quote } from 'lucide-react';

// 1. Define Types
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

interface StatItem {
  icon: React.ElementType;
  no: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I have been working with E-Digital engineers for several years now. They have all been exceptionally talented, professional, highly productive, and willing to go above and beyond.",
    author: "Lee Batters-Rees",
    role: "Partner",
    company: "BCG X",
    stars: 5
  },
  {
    quote: "This is my go-to source to find high-quality talent I can't find elsewhere. I've been very impressed with the breadth and depth of talent delivered.",
    author: "Tess Caputa",
    role: "Chief Operating Officer",
    company: "zoetis",
    stars: 5
  },
  {
    quote: "With the pressure on and millions watching, the team delivered the talent and expertise needed to launch a brand-new fan engagement platform flawlessly.",
    author: "Conor Kenney",
    role: "VP, Product and Technology",
    company: "CAVALIERS",
    stars: 5
  }
];

const items: StatItem[] = [
  {
    icon: Globe,
    no: "100+",
    text: "Countries Served"
  },
  {
    icon: FileText,
    no: "30,000+",
    text: "Clients Served"
  }
];

export default function ClientSatisfaction() {
  return (
    <section className="bg-white py-20 px-4 font-sans text-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 border-b border-gray-100 pb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b3b] mb-6 tracking-tight">
            Our Clients' Satisfaction is Our Top Priority
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            We have a reputation for helping clients around the world find success on their most important projects.
          </p>
        </div>

        {/* Stats Section */}
        <div className='flex flex-wrap justify-center items-center gap-x-16 gap-y-8 px-4 mb-12'>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className='flex items-center gap-4'>
                <div className='p-4 rounded-full bg-slate-50 text-slate-300'>
                  <Icon size={32} strokeWidth={1} />
                </div>
                <div className='flex flex-col items-start'>
                  <p className='font-bold text-3xl text-[#1a2b3b]'>{item.no}</p>
                  <p className='font-bold text-[10px] uppercase tracking-widest text-gray-400'>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-16 py-4 bg-slate-50/50 rounded-full max-w-2xl mx-auto">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
            ))}
          </div>
          <p className='text-gray-600 text-sm font-medium'>
            Clients rate E-Digital <span className='font-bold text-slate-900'>4.9/5</span> on average based on 40,031 reviews.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group p-10 border border-gray-100 rounded-xl hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col text-left">
              <Quote className="text-slate-200 mb-6 group-hover:text-[#00d37f] transition-colors" size={32} />
              
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </p>
              
              <div className="flex gap-0.5 mb-8">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={12} className="fill-orange-400 text-orange-400" />
                ))}
              </div>

              <div className="border-t border-gray-50 pt-8">
                <p className="font-bold text-[#1a2b3b] text-sm mb-1">{t.author}</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">{t.role}</p>
                <p className="font-black text-xl tracking-tighter text-slate-200 group-hover:text-slate-900 transition-colors uppercase">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}