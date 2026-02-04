"use client";
import React, { useState } from 'react';
import ExpertCard from '@/components/ExpertCard';

const categories = [
  { id: 'developers', label: 'Developers', icon: '</>' },
  { id: 'designers', label: 'Designers', icon: '💎' },
  { id: 'marketing', label: 'Marketing Experts', icon: '⏳' },
  { id: 'management', label: 'Management Consultants', icon: '📊' },
  { id: 'project', label: 'Project Managers', icon: '📋' },
  { id: 'product', label: 'Product Managers', icon: '📦' },
  { id: 'sales', label: 'Sales Experts', icon: '📈' },
];

export default function TalentNetwork() {
  const [activeTab, setActiveTab] = useState('developers');

  // Sample data
  const experts = [
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
    <section className="bg-[#f9fafb] py-12 md:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-[42px] font-semibold text-[#1a2b3b] mb-8 md:mb-12">
          Meet Talent in Our Network
        </h2>

        {/* Tab Navigation: Scrollable on mobile, Centered on desktop */}
        <div className="flex overflow-x-auto md:justify-center border-b border-gray-200 mb-12 no-scrollbar scroll-smooth">
          <div className="flex flex-nowrap md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                  activeTab === cat.id
                    ? "border-[#00d37f] text-[#0a1b5c] bg-white rounded-t-md"
                    : "border-transparent text-gray-400 hover:text-blue-600"
                }`}
              >
                <span className={activeTab === cat.id ? "text-[#00d37f]" : ""}>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, idx) => (
            <ExpertCard key={idx} {...expert} />
          ))}

          {/* CTA Card: Responsive height and padding */}
          <div className="bg-[#0a1b5c] rounded-sm p-6 md:p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden min-h-87.5">
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 text-4xl md:text-5xl">💎</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Discover 20,000+ More Talent
              </h3>
              <p className="text-blue-200 mb-8 text-sm md:text-base">in the E-Digital Network</p>
              
              <button className="bg-[#00d37f] hover:bg-[#00bc71] text-[#0a1b5c] font-black py-3 px-8 rounded-sm transition-all text-sm uppercase tracking-wide active:scale-95 w-full sm:w-auto">
                Discover Talent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}