"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Our Web application development process goes from brainstorming, sketching concepts, wireframing, to designing UX/UI, coding, debugging, and launching.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Mobile Application Development",
    description: "Our Mobile application development covers all the latest technologies so that you can get the right one for your project.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Creatives",
    description: "Our Creative Production plays the much-needed role of using digital media as a key factor in helping your brand reach new levels.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Our digital marketing team oversees the time frames, ensures visibility, and correct application usage for maximum results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    description: "Our SEO services include the best digital practices to increase traffic on your website and your ranking on all search engines.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "CMS Development",
    description: "Our customized CMS development will give you personalized website authoring, administration tools, and collaboration.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Headline and Staggered Cards */}
        <div className="lg:w-1/2 flex flex-col gap-12">
          <header className="max-w-md">
            <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.1] text-[#000000] tracking-tight mb-8">
              A Digital Presence That Will Break All Boundaries!
            </h1>
            <p className="text-[#555555] text-[17px] leading-[1.6]">
              Fast solutions, efficient workflows, and ideas that will take your company to the next level – 
              get all this and so much more with our wide range of services. From Web Development to 
              Search Engine Optimization, Wolfiz is here to empower you.
            </p>
          </header>

          {/* Cards 1, 3, 5 */}
          {services.filter((_, i) => i % 2 === 0).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Right Column: Offset Cards (2, 4, 6) */}
        <div className="lg:w-1/2 flex flex-col gap-12 lg:pt-32">
          {services.filter((_, i) => i % 2 !== 0).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: ServiceItem }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white border border-[#eeeeee] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
  >
    <div className="relative h-[300px] w-full overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-10">
      <h3 className="text-[24px] font-bold text-[#000000] mb-4">
        {service.title}
      </h3>
      <p className="text-[#666666] text-[16px] leading-[1.6] mb-8">
        {service.description}
      </p>
      <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#dddddd] group-hover:bg-black group-hover:text-white transition-all duration-300">
        <ArrowRight size={20} />
      </div>
    </div>
  </motion.div>
);

export default ServicesGrid;