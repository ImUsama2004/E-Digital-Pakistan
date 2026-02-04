"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (item: string) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link href="/EDP-logo-blue.png" className="flex items-center shrink-0">
            <Image 
              src="/images/EDP-logo-blue.png" 
              alt="EDP Logo" 
              width={100} 
              height={32} 
              priority 
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 text-sm text-black">
            <Link href="#">Hire Talent</Link>
            <Link href="#">Consulting & Services</Link>
            <Link href="#">Clients</Link>
            <Link href="#">Blog</Link>
            <Link href="#">About Us</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 text-sm text-black">
            <Link href="#">Apply as Talent</Link>
            <button className="bg-emerald-500 text-black px-4 py-2 rounded-md font-medium hover:bg-emerald-600 transition">
              Hire Top Talent
            </button>
            <Link href="#">Log In</Link>
          </div>

          {/* Hamburger & Mobile Button */}
          <div className="flex items-center">
            <button className="lg:hidden bg-emerald-500 text-black py-2 px-4 mr-4 rounded-md font-medium hover:bg-emerald-600 transition cursor-pointer text-sm">
              Hire Top Talent
            </button>
            <button
              className="lg:hidden text-2xl text-black p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? '×' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-60 bg-white flex flex-col overflow-y-auto">
          {/* Top Bar in Mobile Menu */}
          <div className="flex items-center justify-between px-6 h-16 border-b shrink-0">
            <Image 
              src="/logo.png" 
              alt="EDP Logo" 
              width={100} 
              height={32} 
              className="h-8 w-auto object-contain"
            />
            <button
              className="text-3xl text-black p-2"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col w-full border-b">
            {[
              { name: "Hire Talent", hasSub: true },
              { name: "Consulting & Services", hasSub: true },
              { name: "Clients", hasSub: false },
              { name: "Blog", hasSub: false },
              { name: "About Us", hasSub: false },
            ].map((item) => (
              <div key={item.name} className="border-b">
                <button
                  onClick={() =>
                    item.hasSub ? toggleExpand(item.name) : setOpen(false)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-black hover:bg-slate-50"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasSub && (
                    <span className="text-xl text-slate-400">
                      {expanded[item.name] ? "−" : "▸"}
                    </span>
                  )}
                </button>
                {item.hasSub && expanded[item.name] && (
                  <div className="pl-6 pb-4 flex flex-col space-y-3 text-black bg-slate-50 pt-2">
                    <Link href="#" className="text-sm py-1" onClick={() => setOpen(false)}>Subitem 1</Link>
                    <Link href="#" className="text-sm py-1" onClick={() => setOpen(false)}>Subitem 2</Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col p-6 gap-3 mt-auto border-t bg-slate-50">
            <button className="w-full bg-emerald-500 text-black py-3 rounded-md font-semibold hover:bg-emerald-600 transition">
              Hire Top Talent
            </button>
            <div className="flex gap-3">
              <button className="flex-1 border border-slate-300 py-3 rounded-md font-medium text-black hover:bg-white transition">
                Apply as Talent
              </button>
              <button className="flex-1 border border-slate-300 py-3 rounded-md font-medium text-black hover:bg-white transition">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}