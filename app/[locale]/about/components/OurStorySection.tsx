"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const OurStorySection = () => {
  const t = useTranslations('about.ourStory');
  
  return (
    <section
      id="our-story"
      className="w-full bg-[#D6F2F2] flex flex-col md:flex-row items-center justify-between py-40 md:py-48 px-8 md:px-20 gap-12 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: "url('/images/about-grid/Mainposter.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl z-10 ml-0 md:ml-12" style={{minHeight: '60vh'}}>
        <h2 className="text-[#F9461C] text-5xl md:text-6xl font-extrabold mb-6 text-left">{t('title')}</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-4 text-left max-w-lg leading-relaxed whitespace-pre-line">
          {t('description')}
        </p>
      </div>
      {/* Decorative floating leaves could be added here if desired */}
    </section>
  );
};

export default OurStorySection; 