import React from 'react';
import { ChevronRight, ArrowRight, BadgeCheck } from 'lucide-react';

interface BlogCardProps {
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

const BlogCard = ({ 
  image, category, subCategory, title, description, 
  readTime, authorImage, authorName, authorExpertise, authorBio 
}: BlogCardProps) => {
  return (
    <div className="flex flex-col bg-white border border-gray-300 shadow-sm hover:shadow-2xl transition-all duration-300 group h-full overflow-hidden">
      
      {/* 1. Image Container */}
      <div className="w-full aspect-16/10 overflow-hidden bg-[#1b56e0] cursor-pointer">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="p-8 flex flex-col grow">
        
        {/* Category Div */}
        <div className="flex items-center gap-1 text-[11px] font-bold tracking-widest text-[#264ecf] uppercase mb-4 cursor-pointer hover:text-[#00a37e] transition-colors">
          <span>{category}</span>
          <ChevronRight size={12} strokeWidth={3} />
          <span>{subCategory}</span>
        </div>

        {/* Title Div - Height is now dynamic to show full text */}
        <div className="mb-4">
          <h2 className="text-[24px] leading-[1.2] font-semibold text-[#1a3461] group-hover:text-[#00a37e] transition-colors cursor-pointer">
            {title}
          </h2>
        </div>

        {/* Description Div - 'flex-grow' ensures this fills the space and pushes footer down */}
        <div className="grow mb-8">
          <p className="text-[#516384] text-[16px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* 3. Footer Action Div (Reading Time & Button) */}
        {/* mt-auto ensures this bar stays at the bottom of every card in the row */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-200 mb-8 mt-auto">
          <div className="text-[12px] font-bold tracking-widest text-[#516384] uppercase whitespace-nowrap">
            {readTime}
          </div>
          
          <button className="flex items-center gap-2 text-[13px] text-[#264ecf] uppercase tracking-tight antialiased hover:text-[#00a37e] transition-all cursor-pointer whitespace-nowrap">
            Continue Reading <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>

        {/* 4. Author Detail Div */}
        <div className="flex gap-4 items-start pt-2">
          <div className="shrink-0">
            <img 
              src={authorImage} 
              alt={authorName} 
              className="w-14 h-14 rounded-sm object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" 
            />
          </div>
          
          <div className="flex flex-col">
            <div className="text-[#1a3461] text-[15px]">
              By <span className="font-bold cursor-pointer hover:text-[#00a37e] transition-colors">{authorName}</span>
            </div>
            
            <div className="flex items-center gap-1 text-[#00a37e] font-semibold text-[13px] mt-0.5">
              <BadgeCheck size={14} fill="#00a37e" className="text-white" />
              <span>Verified Expert</span>
            </div>
            
            <div className="text-[#00a37e] text-[13px] font-medium leading-tight mb-2">
              in {authorExpertise}
            </div>
            
            <div className="text-[#516384] text-[13px] line-clamp-2 leading-snug italic">
              {authorBio}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;