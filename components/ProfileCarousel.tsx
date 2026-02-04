"use client";
import * as React from "react";

// 1. Define what a Profile Card looks like
interface ProfileCard {
  name: string;
  role: string;
  company: string;
  companySub: string;
  avatar: string;
  image: string;
  avatarBg: string;
}

// 2. Define the Props for the main component
interface ProfileCarouselProps {
  cards?: ProfileCard[];
  onSelect?: (card: ProfileCard) => void;
}

const DEFAULT_CARDS: ProfileCard[] = [
  {
    name: "Meryl Da Silva",
    role: "Marketing Strategist",
    company: "Google",
    companySub: "Previously at",
    avatar: "/avatars/meryl.jpg",
    image: "/images/image1.jpg",
    avatarBg: "from-indigo-200 to-indigo-50",
  },
  {
    name: "Erita Skendaj",
    role: "Project Manager",
    company: "AWS",
    companySub: "Previously at",
    avatar: "/avatars/erita.jpg",
    image: "/images/image1.jpg",
    avatarBg: "from-rose-200 to-rose-50",
  },
  {
    name: "Casey Arrington",
    role: "Product Manager",
    company: "SpaceX",
    companySub: "Previously at",
    avatar: "/avatars/casey.jpg",
    image: "/images/image1.jpg",
    avatarBg: "from-emerald-200 to-emerald-50",
  },
  {
    name: "Arvind Kumar",
    role: "FP&A Expert",
    company: "Goldman Sachs",
    companySub: "Previously at",
    avatar: "/avatars/arvind.jpg",
    image: "/images/image1.jpg",
    avatarBg: "from-sky-200 to-sky-50",
  },
];

export default function ProfileCarousel({ 
  cards = DEFAULT_CARDS, 
  onSelect 
}: ProfileCarouselProps) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  React.useEffect(() => {
    onSelect?.(cards[active]);
  }, [active, cards, onSelect]);

  const prev = () => setActive((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setActive((i) => (i + 1) % cards.length);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="hidden lg:grid h-10 w-10 place-items-center rounded-full border bg-black text-white font-bold shadow-sm hover:bg-slate-800"
        >
          ‹
        </button>

        {/* Carousel */}
        <div className="flex gap-4 overflow-x-auto lg:overflow-x-hidden scrollbar-hide px-3 py-4">
          {cards.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`min-w-75 h-80 shrink-0 overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${
                i === active
                  ? "border-slate-300 ring-2 ring-slate-200"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <CardWithImage card={c} />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="hidden lg:grid h-10 w-10 place-items-center rounded-full border bg-black text-white font-bold shadow-sm hover:bg-slate-800"
        >
          ›
        </button>
      </div>
    </div>
  );
}

// 3. Define props for the sub-component
interface CardWithImageProps {
  card: ProfileCard;
}

function CardWithImage({ card }: CardWithImageProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Top Image */}
      <div className="h-50 w-full bg-slate-100 overflow-hidden flex items-center justify-center">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex flex-1 items-start gap-3 p-4">
        <img
          src={card.image}
          alt={card.name}
          className={`h-10 w-12 shrink-0 rounded-full bg-linear-to-br ${card.avatarBg} object-cover`}
        />

        <div className="min-w-0">
          <div className="truncate text-base font-semibold text-slate-900">
            {card.name}
          </div>
          <div className="truncate text-sm text-slate-600">{card.role}</div>

          <div className="mt-2 text-xs text-slate-500">{card.companySub}</div>
          <div className="truncate text-sm font-semibold text-slate-900">
            {card.company}
          </div>
        </div>
      </div>
    </div>
  );
}