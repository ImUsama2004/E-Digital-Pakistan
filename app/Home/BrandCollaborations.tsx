import React from 'react';
import Image from 'next/image';

const collaborations = [
  {
    title: "The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent",
    category: "Toptal Partnership",
    image: "/",
    partners: "Toptal + Motorola"
  },
  {
    title: "Industry Perspective: Salesforce On Team Alignment And Agile Talent",
    category: "Toptal Partnership",
    image: "/",
    partners: "Toptal + Salesforce"
  },
  {
    title: "Call to Action: the On-Demand Business Model",
    category: "Digital Partnership",
    image: "/",
    partners: "Toptal + Microsoft"
  }
];

export default function BrandCollaborations() {
  return (
    <section className="bg-gray-50 py-24 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1a2b3b] mb-4">Collaborations With Leading Brands</h2>
          <p className="text-gray-500">We collaborate with a number of top-tier companies on imagining the future of work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {collaborations.map((collab, i) => (
            <div key={i} className="group bg-white rounded-sm border border-gray-100 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src={collab.image} alt={collab.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 text-sm text-gray-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{collab.category}</span>
                <h3 className="mt-3 text-lg font-bold text-[#1a2b3b] leading-tight group-hover:text-[#00bc71] transition-colors line-clamp-3">
                  {collab.title}
                </h3>
                <div className="mt-6 pt-4 border-t border-gray-50 font-bold text-xs text-gray-400">
                   {collab.partners}
                </div>
              </div>
            </div>
          ))}
        </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-center md:text-left px-4">
        <p className="text-gray-600 text-lg md:text-xl font-medium">Ready to get started?</p>
        <button className="w-full md:w-auto bg-[#00d37f] hover:bg-[#00bc71] text-white px-10 py-3.5 rounded-md font-bold transition-all duration-300 cursor-pointer shadow-sm active:scale-95">
        Hire Top Talent</button>
      </div>
      </div>
    </section>
  );
}