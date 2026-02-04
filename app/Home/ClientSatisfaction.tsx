import React from 'react';

const testimonials = [
  {
    quote: "I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond.",
    author: "Lee Batters-Rees",
    role: "Partner",
    company: "BCG X",
    stars: 5
  },
  {
    quote: "Toptal is my go-to source to find high-quality talent I can't find elsewhere. I've been very impressed with the breadth and depth of talent they have been able to deliver.",
    author: "Tess Caputa",
    role: "Chief Operating Officer",
    company: "zoetis",
    stars: 5
  },
  {
    quote: "With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Toptal delivered the talent and expertise needed to launch a brand-new fan engagement platform.",
    author: "Conor Kenney",
    role: "VP, Product and Technology",
    company: "CAVALIERS",
    stars: 5
  }
];
const items = [
    {
        icon : "🌐",
        no: "100+",
        text: "Countries Served"
    },
    {
        icon : "📑",
        no: "30,000+",
        text: "Clients Served"
    }
]

export default function ClientSatisfaction() {
  return (
    <section className="bg-white py-20 px-4 font-sans text-center">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16 border-b border-gray-300 pb-10">
          <h2 className="text-4xl font-semibold text-[#1a2b3b] mb-4">Our Clients' Satisfaction is Our Top Priority</h2>
          <p className="text-gray-500">We have a reputation for helping clients around the world find success on their most important projects.</p>
        </div>

       <div className='flex flex-wrap justify-center items-center gap-x-10 gap-y-8 px-4'>
        {items.map((item, index) => (
            <div key={index} className='flex flex-row justify-center items-center gap-3 pb-4 md:pb-10'>
            <span className='text-4xl md:text-5xl opacity-50 shrink-0'>{item.icon}</span>
            <div className='flex flex-col items-start'>
                <p className='font-black text-2xl md:text-3xl leading-none text-[#1a2b3b]'>{item.no}</p>
                <p className='font-medium text-xs md:text-sm text-gray-500 whitespace-nowrap mt-1'>{item.text}</p>
            </div>
            </div> 
            ))}
        </div>
        
        <p className='text-gray-600 text-sm mb-6'>Clients rate Toptal <span className='opacity-80'>⭐⭐⭐⭐⭐</span> 4.9 out of 5 on average based on 40,031 reviews.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group p-8 border border-gray-100 rounded-sm hover:border-[#00d37f] hover:shadow-lg transition-all cursor-pointer flex flex-col">
              <span className="text-4xl text-blue-600 font-serif mb-4 group-hover:text-[#00d37f]">“</span>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 italic">
                {t.quote}
              </p>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-xs">★</span>
                ))}
              </div>

              <div className="border-t border-gray-50 pt-6">
                <p className="font-bold text-[#1a2b3b] text-sm">{t.author}</p>
                <p className="text-gray-400 text-[11px] uppercase tracking-wide mb-3">{t.role}</p>
                <p className="font-black text-lg text-gray-300 group-hover:text-[#0a1b5c] transition-colors">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}