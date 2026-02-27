'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

/* ================= TYPES ================= */

interface TeamMember {
  id: number;
  category: 'executive-team' | 'business-leaders';
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Section {
  id: string;
  label: string;
}

/* ================= TEAM DATA ================= */

const MOCK_TEAM_DATA: TeamMember[] = [
  {
    id: 1,
    category: 'executive-team',
    name: 'Ismael Peinado',
    role: 'Chief Technology Officer',
    image:
      'https://images.unsplash.com/photo-1519085184658-7ad51bbf7404?auto=format&fit=crop&q=80&w=800',
    bio: 'Leads engineering and product teams focusing on scalable innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    category: 'executive-team',
    name: 'Carlos Aguirre',
    role: 'Chief Financial Officer',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    bio: 'Oversees financial operations ensuring sustainable growth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    category: 'executive-team',
    name: 'Megan Amdahl',
    role: 'Chief Customer Officer',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Leads global customer experience initiatives. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const SECTIONS: Section[] = [
  { id: 'executive-team', label: 'Executive Team' },
  { id: 'business-leaders', label: 'Executive Business Leaders' },
  { id: 'impact', label: 'Impact Initiatives' },
];

/* ================= IMPACT DATA ================= */

const impactData = [
  {
    title: 'Smart Agriculture Solutions',
    description:
      'AI-powered farming analytics, crop monitoring, and smart irrigation improving productivity and sustainability.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Digital Healthcare Platforms',
    description:
      'Telemedicine and smart patient management systems improving healthcare accessibility.',
    image:
      'https://images.unsplash.com/photo-1580281658629-3c5c1c46d3a7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Enterprise IT Transformation',
    description:
      'Cloud infrastructure, automation, and enterprise-grade scalable software solutions.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
  },
];

/* ================= COUNTER ================= */

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = value / 60;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl font-bold text-blue-600">{count}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTeamMembers(MOCK_TEAM_DATA);
  }, []);

  const openBio = (id: number) => {
    const index = teamMembers.findIndex((m) => m.id === id);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBio = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextMember = () =>
    setCurrentIndex((p) => (p !== null ? (p + 1) % teamMembers.length : null));

  const prevMember = () =>
    setCurrentIndex((p) =>
      p !== null ? (p - 1 + teamMembers.length) % teamMembers.length : null
    );

  const selectedMember =
    currentIndex !== null ? teamMembers[currentIndex] : null;

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-162.5 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-6">
          <h1 className="text-white text-6xl font-light max-w-4xl">
            We connect technology with real-world impact.
          </h1>
        </div>
      </section>

      {/* ================= NAV ================= */}
      <nav className="sticky top-0 bg-white border-b z-40">
        <ul className="flex justify-center gap-16 py-6 font-semibold text-blue-700 hover:cursor-pointer">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= TEAM SECTIONS ================= */}
      {SECTIONS.slice(0, 2).map((section) => (
        <section key={section.id} id={section.id} className="py-24">
          <h2 className="text-5xl text-center mb-16 font-light">
            {section.label}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="shadow hover:shadow-xl transition cursor-pointer"
              >
                <img
                  src={member.image}
                  className="aspect-3/3 object-cover grayscale hover:grayscale-0 transition"
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>

                  <button
                    onClick={() => openBio(member.id)}
                    className="text-blue-700 mt-3 font-semibold"
                  >
                    View bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ================= PREMIUM IMPACT SECTION ================= */}
      <section id="impact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-light">Impact Initiatives</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Delivering technology-driven impact across agriculture,
              healthcare, and enterprise ecosystems.
            </p>
          </motion.div>

          <div className="space-y-28">
            {impactData.map((item, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className={`group relative ${reverse ? 'md:order-2' : ''}`}>
                    <div className="absolute -inset-2 bg-linear-to-r from-blue-500 to-cyan-400 blur-xl opacity-0 group-hover:opacity-40 transition" />
                    <img
                      src={item.image}
                      className="relative rounded-2xl shadow-xl h-85 w-full object-cover group-hover:scale-105 transition"
                      alt={item.title}
                    />
                  </div>

                  <div className={reverse ? 'md:order-1' : ''}>
                    <h3 className="text-3xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* STATS */}
          <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-10">
            <Counter value={120} label="Projects Delivered" />
            <Counter value={60} label="Enterprise Clients" />
            <Counter value={15} label="Countries Served" />
            <Counter value={10} label="Years Innovation" />
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="w-1/4 bg-black/40 backdrop-blur-sm" onClick={closeBio} />

          {/* Modal Content Wrapper */}
          <div className="w-3/4 bg-white flex flex-col relative shadow-2xl">
            
            {/* STICKY HEADER - Buttons Stay Put */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-16 py-6 border-b border-gray-100 z-50 flex items-center justify-between">
              <div className="flex bg-gray-100 p-1.5 rounded-full shadow-inner">
                <button 
                  onClick={prevMember} 
                  className="p-3 hover:bg-white hover:shadow-md rounded-full transition-all text-gray-600 hover:text-blue-600 active:scale-95"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="w-[1px] bg-gray-300 mx-2 my-2" />
                <button 
                  onClick={nextMember} 
                  className="p-3 hover:bg-white hover:shadow-md rounded-full transition-all text-gray-600 hover:text-blue-600 active:scale-95"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <button 
                onClick={closeBio}
                className="p-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 group shadow-sm"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* SCROLLABLE BODY - Only this part scrolls */}
            <div className="overflow-y-auto flex-1 p-16">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="sticky top-0">
                  <img
                    src={selectedMember.image}
                    className="rounded-xl object-cover shadow-xl w-full"
                    alt={selectedMember.name}
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-6xl font-light text-gray-900 leading-tight">
                      {selectedMember.name}
                    </h2>
                    <p className="text-blue-600 text-2xl mt-2 font-medium">
                      {selectedMember.role}
                    </p>
                  </div>
                  
                  <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 text-xl leading-relaxed whitespace-pre-line">
                      {selectedMember.bio}
                    </p>
                    {/* Placeholder for long content to ensure scrolling works */}
                    <p className="text-gray-400 mt-10 italic">
                      More details and achievements can be listed here to test the scrolling behavior while the navigation remains fixed at the top.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}