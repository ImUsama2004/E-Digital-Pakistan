"use client";
import React, { useState } from 'react';
import services from "./ConsultingServiceData"

const categories = [
  { id: 'tech', label: 'Technology Services', icon: '🌐' },
  { id: 'marketing', label: 'Marketing Agency', icon: '📊' },
  { id: 'management', label: 'Management Consulting', icon: '👥' },
];


export default function ConsultingServices() {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1a2b3b] mb-4">
            Explore Our Consulting & Services
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            We offer a comprehensive, customizable portfolio of services that help you solve your business challenges and achieve your strategic goals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row border border-gray-100 mb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 flex cursor-pointer items-center justify-center gap-3 py-6 px-4 text-sm font-bold border-b-4 transition-all ${
                activeTab === cat.id
                  ? "border-green-600 bg-white text-black"
                  : "border-transparent bg-[#f3f5f7] text-gray-500 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl opacity-60">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-b border-gray-100">
          {services[activeTab as keyof typeof services]?.map((service, index) => (
            <div 
              key={index} 
              className="p-10 border-r border-b border-gray-100 last:border-r-0 md:nth-child-2:border-r-0 lg:nth-child-3:border-r-0 group hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
              <button 
              className='border-none hidden group-hover:block text-sm text-green-600 mt-3 cursor-pointer'
              >Explore {service.title} </button>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-300 rounded-md text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors cursor-pointer ">
            View All Technology Services
          </button>
        </div>
      </div>
    </section>
  );
}