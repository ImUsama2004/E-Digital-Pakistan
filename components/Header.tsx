"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  const toggleExpand = (item: string) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const navLinks = [
    { name: "Consulting & Services", href: "/services" },
    { name: "Blog", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/EDP-logo-blue.png"
              alt="EDP Logo"
              width={110}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-medium text-slate-600 transition-colors hover:text-black group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#2aecb2] scale-x-0 transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-black transition">
              Log In
            </Link>
            <Link 
              href="/apply" 
              className="text-sm font-medium text-slate-600 hover:text-[#2aecb2] transition"
            >
              Apply as Talent
            </Link>
            <Link 
              href="/hiretalent"
              className="bg-[#2aecb2] text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#00d495] hover:shadow-lg hover:shadow-[#2aecb2]/20 transition-all active:scale-95"
            >
              Hire Talent
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <Link 
              href="/apply"
              className="bg-[#2aecb2] text-slate-900 py-2 px-4 rounded-full font-bold text-xs uppercase tracking-wider"
            >
              Apply
            </Link>
            <button
              className="p-2 text-slate-900 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all ${open ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`} />
                <span className={`h-0.5 bg-current transition-all ${open ? 'opacity-0' : 'w-4'}`} />
                <span className={`h-0.5 bg-current transition-all ${open ? 'w-6 -translate-y-2 rotate-45' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col`}>
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <Image src="/images/EDP-logo-blue.png" alt="Logo" width={100} height={32} />
          <button onClick={() => setOpen(false)} className="p-2 text-3xl">&times;</button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          {[
            { name: "Hire Talent", hasSub: true, path: "/hiretalent" },
            { name: "Consulting & Services", hasSub: true, path: "/services" },
            { name: "Clients", hasSub: false, path: "#" },
            { name: "Blog", hasSub: false, path: "#" },
            { name: "About Us", hasSub: false, path: "#" },
          ].map((item) => (
            <div key={item.name} className="px-6">
              <div className="flex items-center justify-between border-b border-slate-100 py-5">
                <Link href={item.path} onClick={() => setOpen(false)} className="text-lg font-semibold text-slate-900">
                  {item.name}
                </Link>
                {item.hasSub && (
                  <button 
                    onClick={() => toggleExpand(item.name)}
                    className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-transform ${expanded[item.name] ? 'rotate-180' : ''}`}
                  >
                    ↓
                  </button>
                )}
              </div>
              {item.hasSub && expanded[item.name] && (
                <div className="bg-slate-50 rounded-xl mt-2 mb-4 p-4 flex flex-col gap-4">
                  <Link href="/hiretalent" onClick={() => setOpen(false)} className="text-slate-600 font-medium">Overview</Link>
                  <Link href="#" onClick={() => setOpen(false)} className="text-slate-600 font-medium">Sub Option</Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-6 bg-slate-50 border-t flex flex-col gap-3">
          <Link 
            href="/hiretalent" 
            className="w-full bg-[#2aecb2] text-slate-900 py-4 rounded-xl font-bold text-center shadow-md"
          >
            Hire Top Talent
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/apply" className="py-3 border border-slate-300 rounded-xl font-semibold text-center bg-white">Apply</Link>
            <Link href="/login" className="py-3 border border-slate-300 rounded-xl font-semibold text-center bg-white">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}