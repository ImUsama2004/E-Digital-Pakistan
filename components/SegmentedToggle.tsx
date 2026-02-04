"use client";

import * as React from "react";

// 1. Define what an individual option looks like
interface ToggleOption {
  label: string;
  value: string;
}

// 2. Define the props for the component
interface SegmentedToggleProps {
  label?: string;
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function SegmentedToggle({ 
  label, 
  options, 
  value, 
  onChange 
}: SegmentedToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {label ? <span className="text-sm text-slate-600">{label}</span> : null}

      <div
        className="rounded-full bg-white/60 p-1 shadow-sm ring-1 ring-slate-200 backdrop-blur"
        role="tablist"
        aria-label={label ?? "Segmented toggle"}
      >
        <div className="flex items-center">
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onChange(opt.value)}
                className={[
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-white text-slate-900 border border-blue-400 shadow ring-1 ring-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-gray-300",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}