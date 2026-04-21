"use client";
import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDetail from './JobDetail';
import ProfileController from './ProfileController';

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
  const [isApplying, setIsApplying] = useState(false);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const handleSelectJob = (job: any) => {
    setSelectedJob(job);
    setShowMobileDetail(true);
  };

  return (
    <div className="h-screen flex flex-col bg-[#f8fafc] overflow-hidden">
      
      {/* RESPONSIVE HEADER */}
      <div className="bg-white border-b py-4 px-6 md:py-6 md:px-8 shrink-0 flex justify-between items-center z-20">
        <div>
           <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">EDP Careers</h1>
           {isApplying && (
             <p className="text-[10px] md:text-sm text-[#2aecb2] font-bold uppercase">Applying: {selectedJob.title}</p>
           )}
        </div>
        
        {/* Back Button for Mobile Detail or Global Application View */}
        {(isApplying || showMobileDetail) && (
          <button 
            onClick={() => {
              setIsApplying(false);
              setShowMobileDetail(false);
            }}
            className="text-sm font-bold text-slate-500 hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            ← Back <span className="hidden sm:inline">to Jobs</span>
          </button>
        )}
      </div>

      <div className="flex-1 flex overflow-hidden w-full relative">
        {!isApplying ? (
          <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
            
            {/* JOB LIST: Hidden on mobile if viewing detail */}
            <div className={`w-full lg:w-1/3 flex flex-col border-r border-slate-200 bg-[#f8fafc] ${showMobileDetail ? 'hidden lg:flex' : 'flex'}`}>
              <div className="p-4 bg-white border-b text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {JOBS_DATA.length} Jobs Available
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {JOBS_DATA.map((job) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    isSelected={selectedJob.id === job.id} 
                    onClick={() => handleSelectJob(job)} 
                  />
                ))}
              </div>
            </div>

            {/* JOB DETAIL: Hidden on mobile if viewing list */}
            <div className={`flex-1 overflow-hidden bg-white ${showMobileDetail ? 'flex' : 'hidden lg:flex'}`}>
              <JobDetail 
                job={selectedJob} 
                onApply={() => setIsApplying(true)} 
              />
            </div>
          </div>
        ) : (
          /* APPLICATION FORM: Full screen on all devices */
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-3xl mx-auto p-4 md:p-8">
              <ProfileController />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}