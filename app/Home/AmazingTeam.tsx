import ExpertCard from "@/components/ExpertCard";
import { Clock, ShieldCheck, Zap, Award } from "lucide-react";

export default function AmazingTeam() {
  const features = [
    { 
      heading: `Hire Quickly`,
      paragraph: `Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.`,
      icon: <Clock className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 mb-4 md:mb-6" /> 
    },
    { 
      heading: `The Top 3%`,
      paragraph: `Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.`,
      icon: <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 mb-4 md:mb-6" />
    },
    { 
      heading: `Leading the Future of Work`,
      paragraph: `Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.`,
      icon: <Zap className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 mb-4 md:mb-6" />
    },
    { 
      heading: `A Level Above`,
      paragraph: `Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.`,
      icon: <Award className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 mb-4 md:mb-6" />
    },
  ];

  const experts = [
    {
      name: "Greg Prickril",
      role: "Product Management",
      specialty: "Interim CPO",
      skills: ["Product Strategy", "B2B", "Enterprise", "Agile"],
      previousCompany: "Microsoft",
      imageUrl: "/"
    },
    {
      name: "Ning Xu",
      role: "Design",
      specialty: "Product Designer",
      skills: ["UX Design", "Figma", "Design Systems", "Mobile"],
      previousCompany: "Google",
      imageUrl: "/"
    },
    {
      name: "Mohab Ayman",
      role: "Engineering",
      specialty: "AI Developer",
      skills: ["Python", "TensorFlow", "NLP", "PyTorch"],
      previousCompany: "IBM",
      imageUrl: "/"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="grid lg:grid-cols-2">
        
        {/* LEFT SIDE: Hero & Features */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100 p-6 sm:p-10 lg:p-20">
          <section className="mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] mb-6 tracking-tighter">
              Build Amazing Teams, <br />
              <span className="text-emerald-500 italic">On Demand</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-md">
              Quickly assemble the teams you need, exactly when you need them.
            </p>
          </section>

          {/* Features Grid: 1 col on mobile, 2 on tablet+ */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 py-10 border-t border-gray-200">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-start group">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl md:text-2xl mb-3 text-black">{item.heading}</h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.paragraph}</p>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT SIDE: Expert Cards - Staggered on Desktop, Simple on Mobile */}
        <section className="bg-[#f9fafb] lg:bg-white p-6 sm:p-10 lg:p-20 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6 max-w-3xl w-full">
            {experts.map((expert, index) => {
              let gridClasses = "w-full";
              // Only apply staggered effect on medium screens and up
              if (index === 0) { gridClasses += " md:row-start-1 md:col-start-1 md:row-span-2 "; } 
              else if (index === 1) { gridClasses += " md:row-start-2 md:col-start-2 md:row-span-2 "; } 
              else if (index === 2) { gridClasses += " md:row-start-3 md:col-start-1 md:row-span-2 "; }
              
              return (
                <div key={index} className={`${gridClasses} transition-all duration-500`}>
                  <ExpertCard {...expert} />
                </div>
              )})}
          </div>
        </section>

      </div>
    </div>
  );
}