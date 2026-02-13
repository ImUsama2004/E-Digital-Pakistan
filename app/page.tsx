import React from "react";
import AmazingTeam from "./Home/AmazingTeam";
import HiringMadeEasy from "./Home/HiringMadeEasy";
import TalentNetwork from "./Home/TalentNetwork";
import ConsultingServices from "./Home/ConsultingServices";
import WhyChooseOrganization from "./Home/WhyChooseOrganization";
import ExpertSkillsets from "./Home/ExpertSkillsets";
import BrandCollaborations from "./Home/BrandCollaborations";
import ClientSatisfaction from "./Home/ClientSatisfaction";
import LandingHero from "./Home/LandingHero";
import TalentGridSection from "./Home/TalentGridSection";

export default function Page() {
  return (
    <main className="">
      <LandingHero />
      <TalentGridSection />
      <AmazingTeam />
      <HiringMadeEasy />
      <TalentNetwork />
      <ConsultingServices />
      <WhyChooseOrganization />
      <BrandCollaborations />
      <ClientSatisfaction />
      <ExpertSkillsets />

      {/* Hire Talent Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-20 px-4">
        <p className="text-gray-600 text-lg md:text-xl text-center md:text-left">
          Top talent in high demand.
        </p>
        <button className="w-full md:w-auto border-none rounded-sm text-center px-10 py-3 bg-[#00d37f] hover:bg-[#00bc71] transition-colors duration-300 cursor-pointer text-white font-bold shadow-sm active:scale-95">
          Start Hiring
        </button>
      </div>
      
    </main>
  );
}