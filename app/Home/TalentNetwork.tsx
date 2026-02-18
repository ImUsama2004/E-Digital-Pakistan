"use client";

import React, { useState } from 'react';
import ExpertCard from '@/components/ExpertCard';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Briefcase, 
  LayoutGrid, 
  Box, 
  BarChart3,
  Users,
  ArrowRight
} from 'lucide-react';

// 1. Define Types for TypeScript
interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface Expert {
  name: string;
  role: string;
  specialty: string;
  skills: string[];
  imageUrl: string;
  previousCompany: string;
}

const categories: Category[] = [
  { id: 'developers', label: 'Developers', icon: Code2 },
  { id: 'designers', label: 'Designers', icon: Palette },
  { id: 'marketing', label: 'Marketing Experts', icon: TrendingUp },
  { id: 'management', label: 'Management Consultants', icon: Briefcase },
  { id: 'project', label: 'Project Managers', icon: LayoutGrid },
  { id: 'product', label: 'Product Managers', icon: Box },
  { id: 'sales', label: 'Sales Experts', icon: BarChart3 },
];

export default function TalentNetwork() {
  const [activeTab, setActiveTab] = useState<string>('developers');

  const experts: Expert[] = [
    {
      name: "Adam Ivansky",
      role: "Engineering",
      specialty: "Python Developer",
      skills: ["SQL", "Python", "Spark", "Machine Learning"],
      imageUrl: "/adam.jpg",
      previousCompany: "Apple",
    },
    {
      name: "Manuela Kajkara",
      role: "Engineering",
      specialty: "AR/VR Developer",
      skills: ["Software Architecture", "C#", "REST API", "Git"],
      imageUrl: "/manuela.jpg",
      previousCompany: "Meta",
    },
    {
      name: "Nimrod Talmon",
      role: "Engineering",
      specialty: "AI Developer",
      skills: ["Data Science", "Python", "Algorithms", "Artificial Intelligence"],
      imageUrl: "/nimrod.jpg",
      previousCompany: "Google",
    }
  ];

  return (
    <section className="bg-[#f9fafb] py-16 md:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[42px] font-bold text-[#1a2b3b] tracking-tight">
            Meet Talent in Our Network
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#00d37f] mx-auto rounded-full" />
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto md:justify-center border-b border-gray-200 mb-12 no-scrollbar">
          <div className="flex flex-nowrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2.5 px-6 py-5 text-sm font-bold transition-all border-b-2 whitespace-nowrap group ${
                    isActive
                      ? "border-[#00d37f] text-[#0a1b5c]"
                      : "border-transparent text-gray-400 hover:text-slate-600"
                  }`}
                >
                  <Icon 
                    size={18} 
                    strokeWidth={isActive ? 2.5 : 2} 
                    className={isActive ? "text-[#00d37f]" : "text-gray-300 group-hover:text-gray-400"} 
                  />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, idx) => (
            <ExpertCard key={idx} {...expert} />
          ))}

          {/* Professional CTA Card */}
          <div className="bg-[#0a1b5c] rounded-xl p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden min-h-100 shadow-xl group">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full bg-white/10 ring-1 ring-white/20">
                <Users size={40} className="text-[#00d37f]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                Discover 20,000+ <br/> More Talent
              </h3>
              <p className="text-blue-200/80 mb-8 text-sm tracking-wide uppercase font-medium">
                In the E-Digital Network
              </p>
              
              <button className="bg-[#00d37f] hover:bg-[#00bc71] text-[#0a1b5c] font-bold py-4 px-8 rounded-lg transition-all text-sm uppercase tracking-widest flex items-center gap-2 group/btn">
                Hire Talent
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}