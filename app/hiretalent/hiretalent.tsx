"use client";

import { useState } from "react";
import {
  Code2,
  PenTool,
  Megaphone,
  ClipboardList,
  Package,
  BarChart3,
  Handshake,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

type Role = {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

/* ---------------- DATA ---------------- */

const roles: Role[] = [
  {
    id: "developer",
    title: "Developer",
    desc: "Software Developer, Data Scientist, DevOps, QA...",
    icon: Code2,
  },
  {
    id: "designer",
    title: "Designer",
    desc: "Web, Mobile, UI/UX, Branding, and Visual Designer...",
    icon: PenTool,
  },
  {
    id: "marketing",
    title: "Marketing Expert",
    desc:
      "Growth Marketing Expert, Content Marketing Strategist, Digital Marketer...",
    icon: Megaphone,
  },
  {
    id: "pm",
    title: "Project Manager",
    desc:
      "Digital Project Manager, IT Project Manager, Scrum Master, Agile Coach...",
    icon: ClipboardList,
  },
  {
    id: "product",
    title: "Product Manager",
    desc:
      "Digital Product Manager, Product Owner, Business Analyst...",
    icon: Package,
  },
  {
    id: "consultant",
    title: "Management Consultant",
    desc:
      "Finance Expert, Business Strategist, M&A Expert, Supply Chain Expert...",
    icon: BarChart3,
  },
  {
    id: "sales",
    title: "Sales Expert",
    desc:
      "Sales Development Representative (SDR), Account Executive, Account Manager...",
    icon: Handshake,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function HirePage(): JSX.Element {
  const [selected, setSelected] = useState<string>("developer");

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="max-w-3xl w-full">

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg mb-10">
          <p className="text-gray-700 text-sm">
            Thanks for your interest in hiring through Toptal! Before we get
            started, we'd like to ask a few questions to better understand your
            business needs.
          </p>
        </div>

        {/* Step */}
        <p className="text-sm text-gray-400 tracking-widest mb-2">
          STEP 1
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Who would you like to hire?
        </h1>

        {/* Cards */}
        <div className="space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;
            const active = selected === role.id;

            return (
              <div
                key={role.id}
                onClick={() => setSelected(role.id)}
                className={`
                  group cursor-pointer rounded-xl border
                  p-6 flex items-center justify-between
                  transition-all duration-200
                  ${
                    active
                      ? "border-blue-600 bg-white shadow-md"
                      : "border-gray-200 bg-white hover:shadow-md hover:border-blue-400"
                  }
                `}
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className={`
                      p-3 rounded-lg border transition
                      ${
                        active
                          ? "border-blue-600 text-blue-600"
                          : "border-gray-200 text-gray-500 group-hover:text-blue-600"
                      }
                    `}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {role.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className={`transition ${
                    active
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-blue-600"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-10">
          <button className="text-blue-600 hover:text-blue-700 font-medium transition">
            Are you a talent?
          </button>
        </div>

      </div>
    </div>
  );
}
