"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu, ArrowRight, Briefcase, PenTool, Users, LogIn, UserPlus, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Consulting & Services", href: "/services", icon: Briefcase },
    { name: "Blog", href: "#", icon: PenTool },
    { name: "About Us", href: "#", icon: Users },
  ];

  const mobileMenuItems = [
    { name: "Hire Talent", href: "/hiretalent", icon: Users, subItems: ["Overview", "Enterprise", "Startups"] },
    { name: "Consulting & Services", href: "/services", icon: Briefcase, subItems: ["Strategy", "Development", "Design"] },
    { name: "Clients", href: "#", icon: Sparkles },
    { name: "Blog", href: "#", icon: PenTool },
    { name: "About Us", href: "#", icon: Users },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl border-b shadow-lg' : 'bg-white/80 backdrop-blur-md border-b'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="relative group">
            <Image src="/images/EDP-logo-blue.png" alt="EDP Logo" width={120} height={40} priority className="h-10 w-auto" />
            <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2aecb2] scale-x-0 group-hover:scale-x-100 transition-transform" />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-black rounded-lg hover:bg-slate-100 transition-all">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-black rounded-lg hover:bg-slate-100 transition-all flex items-center gap-2">
              <LogIn size={16} /> Log In
            </Link>
            <Link href="/apply" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#2aecb2] rounded-lg hover:bg-[#2aecb2]/5 transition-all flex items-center gap-2">
              <UserPlus size={16} /> Apply as Talent
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/hiretalent" className="bg-[#2aecb2] text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#00d495] hover:shadow-lg transition-all flex items-center gap-2">
                Hire Talent <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <Link href="/apply" className="bg-[#2aecb2] text-slate-900 px-4 py-2 rounded-full font-bold text-xs uppercase">
              Apply
            </Link>
            <button onClick={() => setOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />
            
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 flex flex-col">
              
              <div className="flex items-center justify-between px-6 h-20 border-b">
                <Image src="/images/EDP-logo-blue.png" alt="Logo" width={100} height={32} />
                <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4">
                {mobileMenuItems.map((item, i) => {
                  const Icon = item.icon;
                  const isExpanded = expanded === item.name;
                  
                  return (
                    <div key={i} className="px-4">
                      <div className="flex items-center justify-between py-4 border-b">
                        <Link href={item.href} onClick={() => !item.subItems && setOpen(false)} className="flex items-center gap-3 font-semibold hover:text-[#2aecb2] transition-colors">
                          <Icon size={20} className="text-[#2aecb2]" /> {item.name}
                        </Link>
                        {item.subItems && (
                          <button onClick={() => setExpanded(isExpanded ? null : item.name)} className="p-2 hover:bg-slate-100 rounded-lg transition-all">
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {item.subItems && isExpanded && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="bg-slate-50 rounded-lg my-2 p-2 space-y-1">
                              {item.subItems.map((sub, idx) => (
                                <Link key={idx} href="#" onClick={() => setOpen(false)} className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white transition-all">
                                  <span className="text-slate-600">{sub}</span>
                                  <ArrowRight size={14} className="text-[#2aecb2]" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              <div className="p-6 bg-slate-50 border-t space-y-3">
                <Link href="/hiretalent" onClick={() => setOpen(false)} className="w-full bg-[#2aecb2] text-slate-900 py-4 rounded-xl font-bold text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Hire Top Talent <ArrowRight size={18} />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/apply" onClick={() => setOpen(false)} className="py-3 border-2 border-[#2aecb2] rounded-xl font-semibold text-center hover:bg-[#2aecb2] hover:text-white transition-all">
                    Apply
                  </Link>
                  <Link href="/login" onClick={() => setOpen(false)} className="py-3 border-2 border-slate-300 rounded-xl font-semibold text-center hover:border-[#2aecb2] transition-all">
                    Log In
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}