"use client";
import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDetail from './JobDetail';
import ProfileController from './ProfileController'; // Import your new form

const JOBS_DATA = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    location: 'Remote',
    postedDate: '04/15/2026',
    category: 'Engineering',
    trending: true,
    description: 'Lead our frontend team in building Next.js applications...',
    requirements: ['5+ years React', 'TypeScript', 'Node.js', 'Tailwind', 'Cloud experience']
  },
  {
    id: '2',
    title: 'Product Designer',
    location: 'Lahore',
    postedDate: '04/18/2026',
    category: 'Design',
    description: 'Create beautiful UI/UX for global fintech products...',
    requirements: ['Figma Expert', 'Design Systems', '3+ years experience', 'Portfolio', 'User Testing']
  }
];

export default function JobPage() {
  const [selectedJob, setSelectedJob] = useState(JOBS_DATA[0]);
  const [isApplying, setIsApplying] = useState(false); // New state to handle view

  return (
    <div className="h-screen flex flex-col bg-[#f8fafc] overflow-hidden">
      
      {/* Dynamic Header */}
      <div className="bg-white border-b py-6 px-8 shrink-0 flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-extrabold text-slate-900">EDP Careers</h1>
           {isApplying && (
             <p className="text-sm text-[#2aecb2] font-bold">Applying for: {selectedJob.title}</p>
           )}
        </div>
        
        {/* Back Button if applying */}
        {isApplying && (
          <button 
            onClick={() => setIsApplying(false)}
            className="text-sm font-bold text-slate-500 hover:text-slate-800 flex items-center gap-2"
          >
            ← Back to Jobs
          </button>
        )}
      </div>

      <div className="flex-1 flex overflow-hidden w-full">
        {!isApplying ? (
          // VIEW 1: JOB EXPLORATION
          <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
            <div className="w-full lg:w-1/3 flex flex-col border-r border-slate-200">
              <div className="p-4 bg-[#f8fafc] border-b text-sm font-bold text-slate-500 uppercase">
                {JOBS_DATA.length} Jobs Available
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {JOBS_DATA.map((job) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    isSelected={selectedJob.id === job.id} 
                    onClick={() => setSelectedJob(job)} 
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block flex-1 overflow-hidden">
              {/* Pass the onApply function to the detail component */}
              <JobDetail 
                job={selectedJob} 
                onApply={() => setIsApplying(true)} 
              />
            </div>
          </div>
        ) : (
          // VIEW 2: APPLICATION FORM
          <div className="flex-1 overflow-y-auto bg-white">
            <ProfileController />
          </div>
        )}
      </div>
    </div>
  );
}