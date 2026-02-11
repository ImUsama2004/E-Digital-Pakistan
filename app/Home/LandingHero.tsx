"use client";

import * as React from "react";
import SegmentedToggle from "@/components/SegmentedToggle";
import ProfileCarousel from "@/components/ProfileCarousel";

// Define the interface locally so we don't need to change imports
interface ProfileCard {
  name: string;
  role: string;
  company: string;
  companySub: string;
  avatar: string;
  image: string;
  avatarBg: string;
}

export default function LandingHero() {
  const [mode, setMode] = React.useState("talent");

  // FIX: Type the state here so it can hold the card data
  const [selectedExpert, setSelectedExpert] =
    React.useState<ProfileCard | null>(null);

  const content = React.useMemo(() => {
    if (mode === "products") {
      return {
        eyebrow: "I'm looking for",
        headline: (
          <>
            Get Elite{" "}
            <span className="underline underline-offset-4">Consulting</span> &
            Services
          </>
        ),
        body: "Access world-class experts for strategy, delivery, and execution—engage quickly and scale as needed.",
        primaryCta: "Explore Services",
      };
    }
    return {
      eyebrow: "I'm looking for",
      headline: (
        <>
          Hire the <span className="underline underline-offset-4">Top 3%</span>{" "}
          of the World’s Talent<span className="align-super text-xs">™️</span>
        </>
      ),
      body: "An exclusive network of the top software developers, designers, marketing experts, management consultants, product managers, and project managers.",
      primaryCta: "Hire Top Talent",
    };
  }, [mode]);

  return (
    <section className="relative overflow-hidden bg-[#d7dde7]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Toggle */}
        <div className="flex justify-center">
          <SegmentedToggle
            label={content.eyebrow}
            options={[
              { label: "Services", value: "services" },
              { label: "Products", value: "products" },
            ]}
            value={mode}
            onChange={setMode}
          />
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-9 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              {content.headline}
            </h1>

            <p className="mt-4 max-w-prose text-slate-700 sm:text-lg">
              {content.body}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600">
                {content.primaryCta}
              </button>
              <button className="rounded-xl border bg-white px-6 py-3 text-sm font-semibold text-black">
                Learn more
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right – Smaller Card */}
          <div className="lg:col-span-5 flex items-center sm:justify-center">
            <div className="w-full max-w-sm rounded- p-4 lg:p-5 shadow-lg ring-1 ring-black/5 backdrop-blur">
              {/* Image */}
              <div className="flex justify-center">
                <div className="h-52 lg:h-64 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={selectedExpert?.image ?? "/images/default-large.jpg"}
                    alt={selectedExpert?.name ?? "Select an expert"}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-4 text-center">
                <h3 className="text-base lg:text-lg font-bold text-slate-900">
                  {selectedExpert?.name ?? "Select an expert"}
                </h3>

                <p className="mt-1 text-xs lg:text-sm font-medium text-emerald-700">
                  Verified Expert · Consulting
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {selectedExpert?.role ?? "—"}
                </p>

                <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
                  Previously at
                </p>

                <p className="text-lg lg:text-xl font-extrabold text-slate-900">
                  {selectedExpert?.company ?? "—"}
                </p>

                <button
                  disabled={!selectedExpert}
                  className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
                >
                  Contact expert
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-8 rounded-2xl bg-white/30 p-4 backdrop-blur ring-1 ring-white/50">
          {/* TypeScript now understands that setSelectedExpert accepts the ProfileCard type */}
          <ProfileCarousel
            onSelect={(card: ProfileCard) => setSelectedExpert(card)}
          />
        </div>
      </div>
    </section>
  );
}
