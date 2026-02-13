"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================= TYPES ================= */

export interface ProfileCard {
  name: string;
  role: string;
  company: string;
  companySub: string;
  avatar: string;
  image: string;
  avatarBg: string;
}

interface ProfileCarouselProps {
  cards?: ProfileCard[];
  onSelect?: (card: ProfileCard) => void;
}

/* ================= DEFAULT DATA ================= */

const DEFAULT_CARDS: ProfileCard[] = [
  {
    name: "Meryl Da Silva",
    role: "Marketing Strategist",
    company: "Google",
    companySub: "Previously at",
    avatar: "/images/image1.jpg",
    image: "/images/image1.jpg", // Corrected path
    avatarBg: "from-indigo-200 to-indigo-50",
  },
  {
    name: "Erita Skendaj",
    role: "Project Manager",
    company: "AWS",
    companySub: "Previously at",
    avatar: "/images/image1.jpg",
    image: "/images/image1.jpg", // Added path
    avatarBg: "from-rose-200 to-rose-50",
  },
  {
    name: "Casey Arrington",
    role: "Product Manager",
    company: "SpaceX",
    companySub: "Previously at",
    avatar: "/images/image1.jpg",
    image: "/images/image1.jpg", // Added path
    avatarBg: "from-emerald-200 to-emerald-50",
  },
  {
    name: "Arvind Kumar",
    role: "FP&A Expert",
    company: "Goldman Sachs",
    companySub: "Previously at",
    avatar: "/images/image1.jpg",
    image: "/images/image1.jpg", // Added path
    avatarBg: "from-sky-200 to-sky-50",
  },
];

/* ================= MAIN COMPONENT ================= */

const ProfileCarousel: React.FC<ProfileCarouselProps> = ({
  cards = DEFAULT_CARDS,
  onSelect,
}) => {
  const [active, setActive] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  /* ===== Auto Slide ===== */
  useEffect(() => {
    if (!cards.length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  /* ===== Scroll To Active Card ===== */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 320;
    const gap = 16;

    container.scrollTo({
      left: active * (cardWidth + gap),
      behavior: "smooth",
    });

    if (cards[active]) {
      onSelect?.(cards[active]);
    }
  }, [active, cards, onSelect]);

  const handlePrev = (): void => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = (): void => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="hidden lg:grid h-10 w-10 place-items-center border bg-black text-white font-bold shadow-sm hover:bg-slate-800 transition"
        >
          ‹
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto lg:overflow-x-hidden px-3 py-4 scroll-smooth"
        >
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-[320px] h-80 shrink-0 overflow-hidden border bg-white shadow-sm transition-all duration-300 ${
                index === active
                  ? "border-slate-400 ring-2 ring-slate-200 scale-105"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <CardWithImage card={card} />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="hidden lg:grid h-10 w-10 place-items-center border bg-black text-white font-bold shadow-sm hover:bg-slate-800 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ProfileCarousel;

/* ================= CARD COMPONENT ================= */

interface CardWithImageProps {
  card: ProfileCard;
}

const CardWithImage: React.FC<CardWithImageProps> = ({ card }) => {
  return (
    <div className="flex h-full flex-col">
      {/* Top Image */}
      <div className="h-48 w-full bg-slate-100 overflow-hidden flex items-center justify-center">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover" // Changed to cover for better filling
        />
      </div>

      {/* Bottom Content */}
      <div className="flex flex-1 items-start gap-3 p-4">
        {/* Profile Avatar */}
        <img
          src={card.avatar} // Corrected: should use card.avatar here
          alt={card.name}
          className={`h-10 w-10 shrink-0 rounded-full bg-linear-to-br ${card.avatarBg} object-cover border border-slate-200`}
        />

        <div className="min-w-0 text-left">
          <p className="truncate text-base font-semibold text-slate-900">
            {card.name}
          </p>

          <p className="truncate text-sm text-slate-600">
            {card.role}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            {card.companySub}
          </p>

          <p className="truncate text-sm font-semibold text-slate-900">
            {card.company}
          </p>
        </div>
      </div>
    </div>
  );
};