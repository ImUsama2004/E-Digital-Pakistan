import React from 'react';
import { footerLinks } from './footerData';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    // Changed bg to your greenish color and text to a dark slate for readability
    <footer className="bg-green-900 text-black py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Hire Talent Column */}
          <div className="lg:col-span-3">
            {/* Darker borders and text to contrast with green bg */}
            <h4 className="font-bold text-white text-sm mb-8 tracking-wide border-b border-[#00bc71] pb-4">Hire Talent</h4>
            <ul className="space-y-4">
              {footerLinks.hireTalent.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Skills (3 Columns) */}
          <div className="lg:col-span-7 ">
            <h4 className="font-bold text-white text-sm mb-8 tracking-wide border-b border-[#00bc71] pb-4">Featured Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {footerLinks.featuredSkills.map((column, idx) => (
                <ul key={idx} className="space-y-4">
                  {column.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-white hover:underline transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-sm mb-8 tracking-wide border-b border-[#00bc71] pb-4">About</h4>
            <ul className="space-y-4 ">
              {footerLinks.about.map((link) => (
                <li key={link.name}
                className='hover:bg-green-500'>
                  <a href={link.href} className="text-sm text-white hover:underline  transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="border-t border-[#00bc71] pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Logo & Tagline */}
            <div className="flex items-center gap-4">
              <div className="text-2xl flex items-center gap-2">
                <span className="text-white bg-green-500 px-5 py-1 rounded-3xl">E-Digital Pakistan</span>
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              </div>
              <span className="text-white/85 text-xs italic hidden sm:block font-medium">
                The World's Top Talent, On Demand®
              </span>
            </div>

            {/* Social Icons adjusted for Green Theme */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-[#0a1b5c]/80 transition-all text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/85 font-medium">
            <p>© Copyright 2010 - 2026 E-Digital Pakistan, LLC</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Website Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}