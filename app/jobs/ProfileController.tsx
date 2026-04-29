"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Upload, Info, X, ChevronDown, Check } from 'lucide-react';

const ProfileController = () => {
  const [activeSection, setActiveSection] = useState('IMPORT YOUR PROFILE');
  
  // State for Dynamic Sections
  const [showExpForm, setShowExpForm] = useState(false);
  const [showEduForm, setShowEduForm] = useState(false);
  const [showLangForm, setShowLangForm] = useState(false);
  const [showESignDetails, setShowESignDetails] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const countryData = [
    { name: 'Pakistan', code: '+92' },
    { name: 'Senegal', code: '+221' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'France', code: '+33' },
    { name: 'India', code: '+91' },
    { name: 'United Arab Emirates', code: '+971' },
  ];

  const sections = [
    { id: 'import', label: 'IMPORT YOUR PROFILE' },
    { id: 'contact', label: 'CONTACT INFORMATION' },
    { id: 'address', label: 'ADDRESS' },
    { id: 'work', label: 'WORK AND EDUCATION HISTORY' },
    { id: 'docs', label: 'SUPPORTING DOCUMENTS AND URLS' },
    { id: 'misc', label: 'MISCELLANEOUS DOCUMENTS' },
    { id: 'lang', label: 'LANGUAGES' },
    { id: 'questions', label: 'APPLICATION QUESTIONS' },
    { id: 'extra', label: 'EXTRA INFORMATION' },
    { id: 'esign', label: 'E-SIGNATURE' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.id === entry.target.id);
            if (section) setActiveSection(section.label);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#333] flex font-sans">
      <div className="flex-1 max-w-4xl mx-auto px-10 py-20 space-y-32">
        
        {/* 1. IMPORT YOUR PROFILE */}
        <section id="import">
          <h2 className="text-[22px] font-semibold mb-1">Import your profile</h2>
          <p className="text-[13px] text-gray-500 mb-8">You can import your information.</p>
          <div className="bg-[#f2f5f8] rounded-[40px] p-12 flex justify-center border border-gray-100/50">
            <button className="bg-[#2aecb2] text-white px-10 py-3.5 rounded-full flex items-center space-x-3 shadow-lg active:scale-95 transition-all">
              <Linkedin size={20} fill="white" />
              <span className="font-bold text-sm">Apply With LinkedIn</span>
            </button>
          </div>
        </section>

        {/* 2. CONTACT INFORMATION */}
        <section id="contact" className="space-y-8">
          <h2 className="text-[22px] font-semibold border-b border-gray-100 pb-4">Contact Information</h2>
          <div className="space-y-10">
            <OracleInput label="Last Name" required />
            <OracleInput label="First Name" required />
            <OracleInput label="Email Address" type="email" value="codewithadeel1@gmail.com" hasCheck />
            <div className="flex gap-4">
              <div className="w-1/3">
                <OracleInput label="Country code" value="+92" list={countryData} />
              </div>
              <div className="w-2/3"><OracleInput label="Phone Number" /></div>
            </div>
          </div>
        </section>

        {/* 3. ADDRESS */}
        <section id="address" className="space-y-10">
          <div className="flex items-center gap-2">
            <h2 className="text-[22px] font-semibold">Address</h2>
            <div className="bg-[#2aecb2] text-white rounded-full p-1"><Info size={14}/></div>
          </div>
          <p className="text-[13px] text-gray-400 -mt-6">Please enter your home address.</p>
          <div className="space-y-10">
            <OracleInput 
                label="Country" 
                required 
                value="Pakistan" 
                isDropdown 
                hasX 
                list={['Pakistan', 'Senegal', 'United States', 'United Kingdom', 'Canada', 'France']} 
            />
            <OracleInput label="Address Line 1" required />
            <OracleInput label="Address Line 2" />
            <div className="grid grid-cols-3 gap-6">
                <OracleInput label="City" required />
                <OracleInput label="State" />
                <OracleInput label="Postal Code" />
            </div>
          </div>
        </section>

        {/* 4. WORK AND EDUCATION */}
        <section id="work" className="space-y-10">
          <h2 className="text-[22px] font-semibold">Work and Education History</h2>
          <div className="min-h-75 flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              {!showExpForm && !showEduForm ? (
                <motion.div key="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center py-10">
                  <div className="absolute h-full w-[1.5px] bg-gray-200"></div>
                  <div className="flex justify-between w-full max-w-xl z-10">
                    <button onClick={() => setShowExpForm(true)} className="bg-white border-[2.5px] border-[#2aecb2] text-[#2aecb2] px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors">Add Experience</button>
                    <button onClick={() => setShowEduForm(true)} className="bg-white border-[2.5px] border-[#2aecb2] text-[#2aecb2] px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors">Add Education</button>
                  </div>
                  {[2027, 2025, 2023, 2021].map((year) => (
                    <div key={year} className="mt-24 bg-white px-3 text-[11px] font-bold text-gray-300 z-10">{year}</div>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full space-y-10 p-10 border border-emerald-100 rounded-[40px] bg-emerald-50/10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-black text-[#2aecb2] uppercase text-[12px] tracking-widest">{showExpForm ? 'Add Experience' : 'Add Education'}</h3>
                    <X className="cursor-pointer text-gray-400 hover:text-red-500" onClick={() => {setShowExpForm(false); setShowEduForm(false);}} />
                  </div>
                  <div className="space-y-8">
                    <OracleInput label={showExpForm ? "Employer" : "Institution"} required />
                    <OracleInput label={showExpForm ? "Job Title" : "Degree/Major"} required />
                    <OracleInput label="Location" placeholder="City, Country" />
                    <div className="grid grid-cols-2 gap-6">
                      <OracleInput label="Start Date" type="date" />
                      <OracleInput label="End Date" type="date" />
                    </div>
                  </div>
                  <button onClick={() => {setShowExpForm(false); setShowEduForm(false);}} className="w-full py-4 bg-[#2aecb2] text-white rounded-full font-bold text-xs uppercase tracking-[2px] shadow-lg">Save to Timeline</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 5. SUPPORTING DOCUMENTS */}
        <section id="docs" className="space-y-10">
          <h2 className="text-[22px] font-semibold">Supporting Documents and URLs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UploadBox label="Upload CV/Resume" sub="browse" isLarge />
            <div className="space-y-6">
               <OracleInput label="LinkedIn URL" placeholder="https://linkedin.com/in/..." />
               <OracleInput label="Portfolio/Website URL" placeholder="https://..." />
            </div>
          </div>
        </section>

        {/* 6. MISC DOCUMENTS */}
        <section id="misc" className="space-y-10">
          <h2 className="text-[22px] font-semibold">Miscellaneous Documents</h2>
          <div className="grid grid-cols-3 gap-6">
            <UploadBox label="Cover Letter" sub="browse" />
            <UploadBox label="Certificates" sub="browse" />
            <UploadBox label="Other" sub="browse" />
          </div>
        </section>

        {/* 7. LANGUAGES */}
        <section id="lang" className="space-y-8">
          <h2 className="text-[22px] font-semibold">Languages</h2>
          <AnimatePresence mode="wait">
            {showLangForm ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 p-10 border border-gray-100 rounded-[40px] bg-gray-50/50">
                <div className="flex justify-between items-center"><span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">New Language</span><X size={16} className="cursor-pointer" onClick={() => setShowLangForm(false)}/></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <OracleInput label="Language" isDropdown required list={['English', 'French', 'Urdu', 'Arabic', 'Spanish']} />
                  <OracleInput label="Proficiency Level" isDropdown required list={['Native', 'Professional', 'Intermediate', 'Beginner']} />
                </div>
                <button onClick={() => setShowLangForm(false)} className="w-full py-3 border-2 border-[#2aecb2] text-[#2aecb2] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#2aecb2] hover:text-white transition-all">Add to List</button>
              </motion.div>
            ) : (
              <div className="flex justify-center">
                <button onClick={() => setShowLangForm(true)} className="border-[2.5px] border-[#2aecb2] text-[#2aecb2] px-10 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-all">
                  Add Language
                </button>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* 8. QUESTIONS */}
        <section id="questions" className="space-y-12">
          <h2 className="text-[22px] font-semibold">Application Questions</h2>
          <div className="space-y-10">
            <RadioQuestion label="Have you previously been employed by E-Digital Pakistan?" required />
            <RadioQuestion label="I confirm that everything in my application is true and correct." required />
          </div>
        </section>

        {/* 9. EXTRA INFO */}
        <section id="extra" className="space-y-10">
          <h2 className="text-[22px] font-semibold">Extra Information</h2>
          <div className="space-y-10">
            <OracleInput label="Citizenship" isDropdown list={['Pakistani', 'American', 'British']} />
            <div className="space-y-4">
              <label className="text-[13px] font-bold text-[#555]">Gender</label>
              <div className="flex gap-4">
                {['Female', 'Male', 'Other'].map(g => (
                  <button 
                    key={g} 
                    onClick={() => setSelectedGender(g)}
                    className={`px-8 py-2.5 border rounded-full text-sm font-semibold transition-all ${selectedGender === g ? 'border-[#2aecb2] text-[#2aecb2] bg-emerald-50' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. E-SIGNATURE */}
        <section id="esign" className="space-y-8">
          <h2 className="text-[22px] font-semibold">E-Signature</h2>
          <div className="space-y-4">
            <p className="text-[13px] text-gray-600 leading-relaxed">
              By signing below, I certify that the information provided is true and correct...
              {!showESignDetails && <span onClick={() => setShowESignDetails(true)} className="text-[#2aecb2] font-bold cursor-pointer ml-2 hover:underline">+ Show More</span>}
            </p>
            <AnimatePresence>
              {showESignDetails && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                  <div className="text-[13px] text-gray-500 bg-gray-50 p-6 rounded-2xl border-l-4 border-[#2aecb2] mb-4">
                    All information submitted will be handled according to our privacy policy.
                    <button onClick={() => setShowESignDetails(false)} className="block mt-3 text-[#2aecb2] font-bold text-[11px] uppercase tracking-tighter hover:underline">Show Less</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <OracleInput label="Full Name" required placeholder="Type your legal name" />
          </div>
        </section>

        <div className="flex justify-end pt-10">
          <button className="bg-white border-[2.5px] border-[#2aecb2] text-[#2aecb2] px-16 py-3.5 rounded-full font-black text-xs uppercase tracking-[2.5px] hover:bg-[#2aecb2] hover:text-white transition-all shadow-xl active:scale-95">
            Submit Application
          </button>
        </div>
      </div>

      {/* RIGHT SIDEBAR NAV */}
      <aside className="w-80 sticky top-0 h-screen hidden lg:flex flex-col justify-center px-12 border-l border-gray-50 bg-white">
        <div className="space-y-6 relative">
          <div className="absolute left-0.75 top-2 bottom-2 w-px bg-gray-100"></div>
          {sections.map((s) => (
            <div key={s.id} onClick={() => scrollTo(s.id)} className="flex items-center group cursor-pointer relative z-10">
              <motion.div 
                animate={{ 
                  backgroundColor: activeSection === s.label ? '#2aecb2' : '#E5E7EB',
                  scale: activeSection === s.label ? 1.2 : 1,
                }}
                className="w-2 h-2 rounded-full mr-5"
              />
              <span className={`text-[9px] font-black tracking-[1.5px] transition-colors duration-300 ${activeSection === s.label ? 'text-[#2aecb2]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

// COMPONENT: INPUT (FIXED DESTRUCTURING)
const OracleInput = ({ 
    label, 
    required, 
    hasCheck, 
    isDropdown, 
    hasX, 
    value, 
    list, 
    ...props 
}: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value || "");
  const [isTyping, setIsTyping] = React.useState(false);

  const filteredList = list?.filter((item: any) => {
    if (!isTyping) return true;
    const searchItem = inputValue.toLowerCase();
    if (typeof item === 'object') {
      return item.name.toLowerCase().includes(searchItem) || item.code.toLowerCase().includes(searchItem);
    }
    return item.toLowerCase().includes(searchItem);
  });

  return (
    <div className="w-full relative">
      {label && (
        <label className="text-[13px] font-bold text-[#555] mb-2.5 block">
          {label} {required && <span className="text-[#2aecb2] ml-0.5">*</span>}
        </label>
      )}

      <div className="relative">
        {isDropdown ? (
          <select
            {...props}
            defaultValue={value}
            className="w-full px-6 py-3 border border-gray-200 rounded-full text-sm focus:border-[#2aecb2] focus:ring-4 focus:ring-emerald-50/50 outline-none transition-all shadow-sm appearance-none bg-white cursor-pointer"
          >
            <option value="" disabled>Select an option</option>
            {list?.map((item: any) => (
              <option key={typeof item === 'object' ? item.code : item} value={typeof item === 'object' ? item.code : item}>
                {typeof item === 'object' ? `${item.name} (${item.code})` : item}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...props}
            value={inputValue}
            autoComplete="off"
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsTyping(true);
              setIsOpen(true);
            }}
            onFocus={() => { setIsOpen(true); setIsTyping(false); }}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="w-full px-6 py-3 border border-gray-200 rounded-full text-sm focus:border-[#2aecb2] focus:ring-4 focus:ring-emerald-50/50 outline-none transition-all shadow-sm"
          />
        )}

        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
          {hasCheck && (
            <div className="bg-[#01a070] rounded-full p-0.5">
              <Check size={10} className="text-white" strokeWidth={4} />
            </div>
          )}
          {list && <ChevronDown size={18} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
        </div>

        {!isDropdown && isOpen && list && (
          <div className="absolute z-[9999] w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl max-h-60 overflow-y-auto">
            {filteredList.length > 0 ? (
              filteredList.map((item: any) => (
                <div
                  key={typeof item === 'object' ? item.code + item.name : item}
                  onMouseDown={() => {
                    setInputValue(typeof item === 'object' ? item.code : item);
                    setIsTyping(false);
                    setIsOpen(false);
                  }}
                  className="px-6 py-3 text-sm hover:bg-emerald-50 hover:text-[#2aecb2] cursor-pointer transition-colors flex justify-between items-center border-b border-gray-50 last:border-none"
                >
                  {typeof item === 'object' ? (
                    <>
                      <span className="font-medium text-gray-700">{item.name}</span>
                      <span className="text-[#2aecb2] font-bold">{item.code}</span>
                    </>
                  ) : (
                    <span>{item}</span>
                  )}
                </div>
              ))
            ) : (
              <div className="px-6 py-3 text-xs text-gray-400">No match found...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// COMPONENT: RADIO
const RadioQuestion = ({ label, required }: any) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="space-y-4">
      <p className="text-[14px] font-semibold text-[#333]">{label} {required && <span className="text-[#2aecb2]">*</span>}</p>
      <div className="flex gap-8">
        {['Yes', 'No'].map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelected(opt)}>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected === opt ? 'border-[#2aecb2]' : 'border-gray-200 group-hover:border-gray-300'}`}>
              {selected === opt && <div className="w-3 h-3 rounded-full bg-[#2aecb2]"></div>}
            </div>
            <span className={`text-sm font-bold transition-colors ${selected === opt ? 'text-[#333]' : 'text-gray-500'}`}>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// COMPONENT: UPLOAD
const UploadBox = ({ label, sub, isLarge }: any) => (
  <div className={`border-2 border-dashed border-gray-200 rounded-[40px] p-10 flex flex-col items-center justify-center bg-white hover:border-[#2aecb2] transition-colors cursor-pointer group ${isLarge ? 'h-full py-16' : ''}`}>
    <div className="bg-gray-50 p-4 rounded-full group-hover:bg-emerald-50 transition-colors mb-4">
      <Upload size={28} className="text-gray-300 group-hover:text-[#2aecb2]" />
    </div>
    <p className="text-[11px] text-gray-400 font-medium mb-1">{label}</p>
    <p className="text-[10px] font-black text-[#2aecb2] uppercase tracking-widest">or {sub}</p>
  </div>
);

export default ProfileController;