"use client";

import React from 'react';
import Image from 'next/image';

const videoData = [
  {
    id: 1,
    title: "How Bridgestone Scaled Their Engineering Team",
    thumbnail: "/",
    logo: "BRIDGESTONE"
  },
  {
    id: 2,
    title: "Defining the Future of FinTech with Meta",
    thumbnail: "/",
    logo: "Meta"
  },
  {
    id: 3,
    title: "Driving Global Innovation at Motorola",
    thumbnail: "/",
    logo: "MOTOROLA"
  }
];

export default function WhyChooseOrganization() {
  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1a2b3b] mb-4">
            Why Organizations Choose Toptal
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Discover the many ways in which our clients have embraced the benefits of working with Toptal.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoData.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Hover Reveal */}
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-gray-100">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* 1. Play Button: hidden, shows on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                      <div className="w-0 h-0 border-t-10 border-t-transparent border-l-15 border-l-green-700 border-b-10 border-b-transparent ml-1" />
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="py-6 flex flex-col flex-1">
                {/* <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 mb-2">
                </span> */}
                
                <h3 className="text-xl font-bold text-[#1a2b3b] leading-tight mb-4 group-hover:text-green-700 transition-colors">
                  {video.title}
                </h3>

                {/* 2. "Watch" Button: display: none until group hover */}
                <div className="mt-auto hidden group-hover:block transition-all animate-in fade-in slide-in-from-bottom-2">
                    <button className="flex items-center gap-2 text-green-700 font-bold text-sm border-b-2 border-blue-700 pb-1">
                        Watch Video <span className="text-lg">→</span>
                    </button>
                </div>

                {/* Logo placeholder - visible when NOT hovering */}
                <div className="mt-auto block group-hover:hidden">
                    <p className="text-gray-400 font-black text-xl tracking-tighter uppercase opacity-40">
                        {video.logo}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}