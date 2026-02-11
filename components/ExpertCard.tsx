import Image from "next/image";

interface ExpertProps {
  name: string;
  role: string;
  specialty: string;
  skills: string[];
  previousCompany?: string;
  imageUrl: string;
}

export default function ExpertCard({
  name,
  role,
  specialty,
  skills,
  previousCompany,
  imageUrl,
}: ExpertProps) {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00d37f]/30 transition-all h-full cursor-pointer w-full">
      {/* Image Section: Aspect ratio remains 4/3 across all screens */}
      <div className="relative aspect-4/3 w-full bg-[#dbe2e8] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay: Hidden on touch devices by default, visible on hover */}
        <div className="absolute inset-0 bg-[#0a1b5c]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button className="bg-[#00d37f] hover:bg-[#00bc71] text-white px-4 md:px-6 py-2 rounded-sm font-bold text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
            View Profile
          </button>
        </div>

        <div className="absolute bottom-0 left-0 p-2">
          <div className="w-4 h-4 bg-[#00d37f] flex items-center justify-center text-[8px] text-white rotate-45 shadow-sm">
            ✦
          </div>
        </div>
      </div>

      {/* Content Section: Padding shrinks slightly on mobile */}
      <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="text-[#1a2b3b] font-bold text-base md:text-lg mb-1 group-hover:text-[#00bc71] transition-colors truncate">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-[11px] md:text-[13px] text-[#00bc71] font-medium mb-1">
          <span className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#00bc71] rounded-full flex items-center justify-center text-white text-[7px] md:text-[8px]">
            ✓
          </span>
          <span className="truncate">Verified Expert in {role}</span>
        </div>

        <p className="text-gray-400 text-[11px] md:text-[13px] mb-4 flex items-center gap-1 truncate">
          <span className="text-blue-500 font-mono">&lt;/&gt;</span> {specialty}
        </p>

        {/* Expertise Pills: flex-wrap is already responsive */}
        <div className="mb-6">
          <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">
            Expertise
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {skills.slice(0, 4).map(
              (
                skill, // Limited to 4 on small screens to prevent overflow
              ) => (
                <span
                  key={skill}
                  className="px-2 md:px-3 py-1 border border-gray-100 rounded-full text-[10px] md:text-[11px] text-gray-500 group-hover:border-[#00d37f]/50 group-hover:text-[#0a1b5c] transition-colors whitespace-nowrap"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Previous Company */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col">
          <p className="text-gray-400 text-[9px] md:text-[10px] uppercase font-bold tracking-widest mb-2">
            Previously at
          </p>
          <div className="text-lg md:text-xl font-black text-[#0a1b5c] grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 truncate">
            {previousCompany === "Meta" ? "∞ Meta" : previousCompany}
          </div>
        </div>
      </div>
    </div>
  );
}
