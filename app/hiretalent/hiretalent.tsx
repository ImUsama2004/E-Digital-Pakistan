"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  PenTool,
  Megaphone,
  ClipboardList,
  Package,
  BarChart3,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

interface Role {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

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
    desc: "Growth Marketing Expert, Content Marketing Strategist, Digital Marketer...",
    icon: Megaphone,
  },
  {
    id: "pm",
    title: "Project Manager",
    desc: "Digital Project Manager, IT Project Manager, Scrum Master, Agile Coach...",
    icon: ClipboardList,
  },
  {
    id: "product",
    title: "Product Manager",
    desc: "Digital Product Manager, Product Owner, Business Analyst...",
    icon: Package,
  },
  {
    id: "consultant",
    title: "Management Consultant",
    desc: "Finance Expert, Business Strategist, M&A Expert, Supply Chain Expert...",
    icon: BarChart3,
  },
  {
    id: "sales",
    title: "Sales Expert",
    desc: "Sales Development Representative (SDR), Account Executive, Account Manager...",
    icon: Handshake,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function HirePage() {
  const [selected, setSelected] = useState<string>("developer");

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg mb-10">
          <p className="text-gray-700 text-sm leading-relaxed">
            Thanks for your interest in hiring through our platform! Before we
            get started, we&apos;d like to ask a few questions to better
            understand your business needs.
          </p>
        </div>

        {/* Step Indicator */}
        <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-2">
          STEP 1
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Who would you like to hire?
        </h1>

        {/* Selection Cards */}
        <div className="space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = selected === role.id;

            return (
              <button
                key={role.id}
                onClick={() => setSelected(role.id)}
                // Use a button for semantic correctness and keyboard focus
                className={`
                  w-full text-left group cursor-pointer rounded-xl border
                  p-6 flex items-center justify-between
                  transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${
                    isActive
                      ? "border-blue-600 bg-white shadow-md ring-1 ring-blue-600"
                      : "border-gray-200 bg-white hover:shadow-md hover:border-blue-400"
                  }
                `}
              >
                {/* LEFT CONTENT */}
                <div className="flex items-center gap-5">
                  {/* Icon Container */}
                  <div
                    className={`
                      p-3 rounded-lg border transition-colors
                      ${
                        isActive
                          ? "border-blue-600 text-blue-600 bg-blue-50"
                          : "border-gray-100 text-gray-500 bg-gray-50 group-hover:text-blue-600 group-hover:border-blue-200"
                      }
                    `}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {role.desc}
                    </p>
                  </div>
                </div>

                {/* Right Arrow Icon */}
                <ArrowRight
                  size={20}
                  className={`transition-transform duration-200 ${
                    isActive
                      ? "text-blue-600 translate-x-1"
                      : "text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <Link
            href="/apply"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
          >
            Are you a talent?
          </Link>
          
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}