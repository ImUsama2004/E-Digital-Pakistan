"use client";
import React, { useState } from 'react';
import * as Icons from 'lucide-react'; 
import services from "./ConsultingServiceData";

// 1. Define the shape of a single service
interface ServiceItem {
  title: string;
  iconName: string;
  description: string;
}

// 2. Define the shape of your categories
interface Category {
  id: 'tech' | 'marketing' | 'management'; // Explicitly allow only these keys
  label: string;
  iconName: keyof typeof Icons; // Ensures iconName must exist in Lucide
}

const categories: Category[] = [
  { id: 'tech', label: 'Technology Services', iconName: 'Globe' },
  { id: 'marketing', label: 'Marketing Agency', iconName: 'BarChart3' },
  { id: 'management', label: 'Management Consulting', iconName: 'Users' },
];

export default function ConsultingServices() {
  // 3. Type the state so it only accepts valid keys
  const [activeTab, setActiveTab] = useState<Category['id']>('tech');
  
  const activeLabel = categories.find(c => c.id === activeTab)?.label;

  return (
    <section className="bg-white py-12 md:py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b3b] mb-4 tracking-tight">
            Digital Solutions for Development
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive, customizable portfolio of services to achieve your strategic goals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row border border-gray-100 rounded-xl overflow-hidden shadow-sm mb-8">
          {categories.map((cat) => {
            // Fix Index Signature Error for Tabs
            const Icon = Icons[cat.iconName] as React.ElementType;
            const isActive = activeTab === cat.id;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-1 flex cursor-pointer items-center justify-center gap-3 py-6 px-4 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black border-b-4 border-green-600 shadow-sm"
                    : "bg-gray-50/50 text-gray-400 hover:bg-gray-50 border-b-4 border-transparent"
                }`}
              >
                <div className={`p-2 rounded-lg ${isActive ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"}`}>
                  {Icon && <Icon size={18} />}
                </div>
                <span className="tracking-wider uppercase text-[11px] md:text-xs">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div 
          key={activeTab} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100"
        >
          {/* Fix Index Signature for services object */}
          {(services as Record<string, ServiceItem[]>)[activeTab]?.map((service: ServiceItem, index: number) => {
            // Fix Index Signature for dynamic Icons
            const ServiceIcon = (Icons[service.iconName as keyof typeof Icons] || Icons.HelpCircle) as React.ElementType;
            
            return (
              <div 
                key={index} 
                className="group relative bg-white border-r border-b border-gray-100 flex flex-col h-100 md:h-112.5 transition-all duration-300 hover:shadow-2xl hover:z-10"
              >
                <div className="p-8 md:p-10 pb-4">
                  <div className="mb-6 text-gray-300 group-hover:text-green-600 transition-colors duration-300">
                    <ServiceIcon size={40} strokeWidth={1.2} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-green-700">
                    {service.title}
                  </h3>
                </div>
                
                <div className="px-8 md:px-10 grow overflow-hidden relative mb-20">
                  <div className="h-full overflow-y-hidden group-hover:overflow-y-auto custom-scrollbar pr-2">
                    <p className="text-gray-500 text-sm leading-relaxed pb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-white via-white/80 to-transparent group-hover:hidden pointer-events-none" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-white border-t border-gray-50 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <button className="flex items-center gap-2 text-xs font-black text-green-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Service 
                    <Icons.ArrowRight size={16} />
                  </button>
                </div>

                <div className="absolute top-0 left-0 h-0.75 w-0 bg-green-600 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a2b3b] text-white rounded-full text-sm font-bold hover:bg-green-600 transition-all duration-300 shadow-xl">
            VIEW ALL {activeLabel}
            <Icons.ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}