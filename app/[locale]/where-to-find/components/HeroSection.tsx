"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const WhereToFindHeroSection = () => {
  const t = useTranslations('whereToFind.hero');

  return (
    <section className="w-full bg-[#FFE6B0] flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">
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

      <div className="pt-32 z-10">
        <h1 className="text-[#F9461C] text-3xl sm:text-4xl font-extrabold text-center mb-2">{t('title')}</h1>
        <p className="text-black text-sm text-center max-w-2xl">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default WhereToFindHeroSection; 