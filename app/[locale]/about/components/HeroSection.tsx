"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const AboutHeroSection = () => {
  const t = useTranslations('about.hero');
  
  return (
    <section className="w-full min-h-[22vh] bg-[#FFE6B0] flex flex-col md:flex-row items-center justify-between pt-2 pb-1 relative overflow-hidden">
      {/* Cloud decorations */}
      {/* Top-left cloud */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-[80px] md:h-[120px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud left"
          fill
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Top-right cloud (mirrored) */}
      <div className="absolute top-0 right-0 w-40 md:w-72 h-[80px] md:h-[120px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud right"
          fill
          className="object-contain w-full h-full transform scale-x-[-1]"
          priority
        />
      </div>
      
      {/* Left side content */}
      <div className="flex-1 flex flex-col justify-center items-start px-12 md:px-16 z-10 mt-4 ml-[10%]">
        <div className="max-w-xl">
          <h1 className="text-[#F9461C] text-5xl sm:text-6xl font-extrabold mb-6 whitespace-pre-line">{t('title')}</h1>
          <p className="text-gray-700 text-lg mb-8">
            {t('description')}
          </p>
          <Link href="#our-story">
            <button className="bg-[#F9461C] hover:bg-[#d13a17] text-white font-bold py-3 px-10 rounded-full text-lg transition-colors">
              {t('continueToStory')}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Right side with the main logo */}
      <div className="flex-1 flex justify-center items-end relative z-10 px-8">
        <div className="relative w-full flex justify-center -ml-[20%]">
          {/* Main logo (the fire naga) */}
          <Image 
            src="/images/Logo/NagaInFiredefr.png" 
            alt="Naga In Fire Logo" 
            width={540} 
            height={540} 
            className="object-contain translate-y-[30%] -translate-x-[20px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 