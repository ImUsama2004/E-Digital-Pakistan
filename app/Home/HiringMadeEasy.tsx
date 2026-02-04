import { MoveRight, MoveLeft } from "lucide-react";

const steps = [
  { id: 1, title: "Talk to One of Our Industry Experts", description: "An expert on our team will work with you to understand your goals, technical needs, and team dynamics." },
  { id: 2, title: "Work With Hand-Selected Talent", description: "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours." },
  { id: 3, title: "The Right Fit, Guaranteed", description: "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job." },
];

export default function HiringMadeEasy() {
  return (
    <section className="bg-white py-20 px-4 font-sans max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center w-full mb-20">
        <div className="relative flex items-center gap-8">    
          <div className="hidden lg:flex flex-col items-center text-emerald-500 animate-bounce">
             <span className="text-[10px] font-bold uppercase mb-1">Experts</span>
             <MoveLeft size={40} strokeWidth={1} />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight text-center">
            Hiring Made <span className="text-emerald-500 italic">Easy</span>
          </h1>

          <div className="hidden lg:flex flex-col items-center text-emerald-500 animate-bounce">
             <span className="text-[10px] font-bold uppercase mb-1">On Demand</span>
             <MoveRight size={40} strokeWidth={1} />
          </div>
        </div>
        <div className="w-24 h-1 bg-gray-100 mt-6 rounded-full"></div>
      </div>

      {/* Steps Container */}
      <div className="relative flex flex-col md:flex-row justify-between items-start">
        
        {/* SVG PROGRESS LINE (Desktop) */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-px pointer-events-none">
          <svg width="100%" height="20" className="overflow-visible">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <path d="M0 0 L10 5 L0 10" fill="none" stroke="#10B981" strokeWidth="1.5" />
              </marker>
            </defs>
            {/* Using percentages for a more concise responsive SVG line */}
            <line x1="5%" y1="10" x2="15%" y2="10" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowhead)" opacity="0.3"/>
            <line x1="28%" y1="10" x2="38%" y2="10" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowhead)" />
            <line x1="62%" y1="10" x2="72%" y2="10" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowhead)" />
            <line x1="85%" y1="10" x2="95%" y2="10" stroke="#10B981" strokeWidth="1" markerEnd="url(#arrowhead)" opacity="0.3"/>
          </svg>
        </div>

        {steps.map((step) => (
          <div key={step.id} className="group relative z-10 flex flex-col items-center text-center px-4 flex-1 cursor-pointer">
            {/* Circle Number: Animate BG and Text on Hover */}
            <div className="w-20 h-20 rounded-full border border-emerald-500 bg-white flex items-center justify-center mb-10 shadow-sm transition-all duration-300 group-hover:bg-[#00d37f] group-hover:scale-110">
              <span className="text-[28px] text-emerald-500 font-light group-hover:text-white transition-colors">
                {step.id}
              </span>
            </div>

            {/* Content: Text turns green on hover */}
            <h3 className="text-[20px] font-bold text-[#2d3748] mb-4 leading-tight group-hover:text-[#00bc71] transition-colors">
              {step.title}
            </h3>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-[320px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}