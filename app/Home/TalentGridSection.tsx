"use client";

import React from "react";
import { 
  Code2, 
  PenTool, 
  Filter, 
  BarChart3, 
  Calendar, 
  Network, 
  TrendingUp 
} from "lucide-react";

interface TalentItem {
  title: string;
  body: string;
  icon: React.ElementType;
  className?: string;
}

const ITEMS: TalentItem[] = [
  { 
    title: "Developers", 
    body: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.", 
    icon: Code2 
  },
  { 
    title: "Designers", 
    body: "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.", 
    icon: PenTool 
  },
  { 
    title: "Marketing Experts", 
    body: "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.", 
    icon: Filter 
  },
  { 
    title: "Management Consultants", 
    body: "Finance experts, business strategists, M&A consultants, financial modelers, and more, with expertise ranging from market research to FP&A.", 
    icon: BarChart3 
  },
  { 
    title: "Project Managers", 
    body: "Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.", 
    icon: Calendar 
  },
  { 
    title: "Product Managers", 
    body: "Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.", 
    icon: Network 
  },
  { 
    title: "Sales Experts", 
    body: "Lead generation experts, SDRs, sales reps, BDRs, customer success managers, sales consultants, account managers, and more.", 
    icon: TrendingUp,
    className: "lg:border-b-0" 
  },
];

export default function TalentGridSection() {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#262d3d] mb-6">
            Leverage World-class Talent
          </h2>
          <p className="max-w-3xl mx-auto text-[#6a7381] text-lg leading-relaxed">
            We are the largest, globally distributed network of top business, design, 
            and technology talent, ready to tackle your most important initiatives.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-10 border-r border-b border-gray-200 flex flex-col min-h-[280px] hover:bg-gray-50/50 transition-colors ${item.className || ""}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="text-blue-500/80 bg-blue-50/30 p-2 rounded-sm border border-blue-100/50">
                    <Icon size={32} strokeWidth={1.2} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#262d3d] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#6a7381]">
                  {item.body}
                </p>
              </div>
            );
          })}

          {/* THE "PLUS THOUSANDS" SECTION - SPANS REMAINING COLS */}
          <div className="lg:col-span-2 p-10 bg-[#f8f9fb] border-r border-b border-gray-200 flex flex-col justify-center">
             <h3 className="text-xl font-bold text-[#262d3d] mb-3">
               Plus Thousands More Skills
             </h3>
             <p className="text-[15px] text-[#6a7381]">
               Whatever skill or specialization your business requires, we have the top talent to meet your needs.
             </p>
          </div>
        </div>

        {/* FOOTER LINKS */}
        <div className="mt-16 text-center border-t border-gray-100 pt-8">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">
                GET EVEN MORE FROM TOPTAL
            </p>
            <p className="text-gray-600 text-sm mb-2">
                Explore additional ways to level up your company&apos;s growth and success with Toptal
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                Learn more about Toptal&apos;s Coaching
            </a>
        </div>
      </div>
    </section>
  );
}