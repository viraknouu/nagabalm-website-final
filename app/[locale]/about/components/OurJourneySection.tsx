"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const OurJourneySection = () => {
  const t = useTranslations('about.ourJourney');
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const journeySteps = [
    {
      year: "2013",
      img: "/images/History of CoCo Khmer 3/1) The Beginning.jpg",
    },
    {
      year: "2014",
      img: "/images/History of CoCo Khmer 3/2) The Birth.jpg",
    },
    {
      year: "2015",
      img: "/images/History of CoCo Khmer 3/3) Global Expansion.jpg",
    },
    {
      year: "2020",
      img: "/images/History of CoCo Khmer 3/COVID.JPG",
    },
    {
      year: "2023",
      img: "/images/History of CoCo Khmer 3/4) The Rebirth (2).jpg",
    },
    {
      year: "2024",
      img: "/images/History of CoCo Khmer 3/5) Growing Strong.jpg",
    },
    {
      year: "BEYOND",
      img: "/images/History of CoCo Khmer 3/6. Global Vision.jpg",
    },
  ];

  const scrollBy = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#FFE6B0] py-20 flex flex-col items-center relative">
      <h2 className="text-[#F9461C] text-4xl font-extrabold mb-2 text-center">{t('title')}</h2>
      <p className="text-gray-700 text-lg mb-12 text-center max-w-2xl">{t('subtitle')}</p>
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#F9461C] rounded-full shadow p-2 hidden md:block"
          onClick={() => scrollBy(-260)}
          aria-label="Scroll left"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#F9461C] rounded-full shadow p-2 hidden md:block"
          onClick={() => scrollBy(260)}
          aria-label="Scroll right"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div ref={carouselRef} className="flex flex-row overflow-x-auto gap-8 w-full max-w-7xl justify-start items-stretch relative px-4 scrollbar-hide pb-8 pt-14">
          {/* Timeline line - positioned behind the cards with lower z-index */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300 -z-10" />
          {journeySteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white/60 card shadow p-4 min-w-[220px] max-w-[260px] flex-shrink-0 relative mt-2">
              <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#F9461C] text-white font-bold px-6 py-2 rounded-full text-sm z-10">
                {step.year}
              </span>
              <div className="w-full h-36 mb-4 rounded-xl overflow-hidden relative bg-gray-100">
                <Image src={step.img} alt={t(`steps.${step.year}.title`)} fill className="object-cover w-full h-full" unoptimized />
              </div>
              <div className="text-[#F9461C] font-extrabold text-lg mb-1 text-center">{t(`steps.${step.year}.title`)}</div>
              <div className="text-gray-700 text-xs text-center">{t(`steps.${step.year}.description`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection; 