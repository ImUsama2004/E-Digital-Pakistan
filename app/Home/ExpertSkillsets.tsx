"use client";

import React from 'react';
import { Plus } from 'lucide-react';

const skillsets = [
  "Web Development", "Mobile Development",
  "DevOps & Cloud Computing", "Data Science & AI",
  "UX/UI Designers", "Database & Big Data Technologies",
  "Programming Languages", "CMS Platforms",
  "Software Development Roles & Collaboration Models", "E-commerce & CRM Platforms",
  "Quality Assurance & Testing", "Visual & Brand Design",
  "API Development & Integration", "Product & Project Management",
  "Blockchain Development", "Finance & Management Consulting",
  "Desktop Development", "Marketing",
  "AR/VR & Game Development", "Trending Skills & Roles"
];

export default function ExpertSkillsets() {
  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[40px] font-semibold text-emerald-500 mb-16">
          Discover Our Expert Skillsets
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-gray-100">
          {skillsets.map((skill, index) => (
            <div 
              key={index}
              className="group flex items-center justify-between py-5 border-b border-gray-100 cursor-pointer transition-colors"
            >
              {/* Skill Text: Turns green on hover */}
              <span className="text-[17px] font-medium text-[#4a4a4a] group-hover:text-emerald-500 transition-colors">
                {skill}
              </span>

              {/* Icon: Turns green on hover */}
              <Plus 
                size={20} 
                className="text-gray-400 group-hover:text-emerald-500 transition-colors" 
                strokeWidth={1.5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}