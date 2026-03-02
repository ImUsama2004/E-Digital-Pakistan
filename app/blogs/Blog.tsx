import React from 'react';
import { Search, Share2 } from 'lucide-react';
import BlogCard from '@/components/BlogCard';

// 1. Define the Data Shape (matches your backend response)
interface Post {
  id: number;
  image: string;
  category: string;
  subCategory: string;
  title: string;
  description: string;
  readTime: string;
  authorImage: string;
  authorName: string;
  authorExpertise: string;
  authorBio: string;
}

// 2. Data Fetching Function
async function getBlogData(): Promise<Post[]> {
  // In a real app, you would use:
  // const res = await fetch('https://api.yourbackend.com/posts', { next: { revalidate: 3600 } });
  // return res.json();

  // Mock data representing the backend response
  return [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      category: "Management Consulting",
      subCategory: "Profitability and Efficiency",
      title: "Maintaining Continuity, Managing Change: How to Make the Most of an Interim CEO",
      description: "An interim CEO provides stability and strategic direction during leadership transitions. Learn how to maximize their impact.",
      readTime: "10-Minute Read",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
      authorName: "John S. Doss",
      authorExpertise: "Management Consulting",
      authorBio: "John is a finance and technology leader with deep expertise in enterprise architecture and business strategy."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      category: "Engineering",
      subCategory: "Software Architecture",
      title: "Building Resilient Distributed Systems for Global Scale",
      description: "Deep dive into the patterns and practices used by top-tier engineering teams to ensure 99.99% uptime.",
      readTime: "12-Minute Read",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      authorName: "Jane Smith",
      authorExpertise: "Backend Engineering",
      authorBio: "Jane is a distributed systems expert with a focus on cloud-native infrastructure."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
      category: "Design",
      subCategory: "User Experience",
      title: "The Intersection of Minimalism and Functional Design",
      description: "Why less is often more when it comes to user engagement and digital product success.",
      readTime: "8-Minute Read",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      authorName: "Michael Wong",
      authorExpertise: "Product Design",
      authorBio: "Michael has designed interfaces for some of the world's most popular financial apps."
    }
  ];
}

export default async function BlogPage() {
  const posts = await getBlogData();

  return (
    <main className="min-h-screen bg-[#f8f9fb]">
      {/* --- HEADER SECTION --- */}
      <section className="relative w-full overflow-hidden bg-[#001b44] font-sans text-white">
        {/* Background Radial Glow */}
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle at 80% 20%, #1a4da1 0%, transparent 50%)` }}
        />
        
        {/* Network Pattern SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <path d="M2 2 L100 50 M2 2 L50 100" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 md:px-12 lg:px-16">
          <h1 className="text-[56px] md:text-[64px] font-light leading-tight mb-8 tracking-tight">
            E-Digital Pakistan Blogs
          </h1>

          <p className="max-w-3xl text-[19px] md:text-[21px] text-[#b3bac5] leading-[1.6] mb-10">
            The <span className='text-green-600'>E-Digital Pakistan</span> Blogs is the top hub for developers, designers, management consultants, 
            executives, and entrepreneurs, featuring key technology updates, tutorials, 
            freelancer resources, and management insights.
          </p>

          {/* Share Section */}
          <div className="flex items-center gap-4 mb-12">
            <button className="flex items-center justify-center w-13.5 h-13.5 border border-[#3e5272] rounded-sm hover:bg-white/5 transition-colors shadow-sm">
              <Share2 size={20} strokeWidth={1.5} />
            </button>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/90">
              132.3K Shares
            </span>
          </div>

          {/* Search Bar matches the picture exactly */}
          <div className="relative w-full max-w-240">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="text-white" size={26} strokeWidth={1.5} />
            </div>
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full h-12 bg-transparent border border-[#3e5272] rounded-sm pl-16 pr-6 text-[26px] font-light text-white placeholder-white/70 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-[inset_0_1px_4px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </section>

      {/* --- CONTENT GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:px-12 lg:px-16">
        {/* This grid ensures 3 cards appear per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <BlogCard 
              key={post.id}
              image={post.image}
              category={post.category}
              subCategory={post.subCategory}
              title={post.title}
              description={post.description}
              readTime={post.readTime}
              authorImage={post.authorImage}
              authorName={post.authorName}
              authorExpertise={post.authorExpertise}
              authorBio={post.authorBio}
            />
          ))}
        </div>
      </section>
    </main>
  );
}