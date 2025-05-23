"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const TheSpiritSection = () => {
  const t = useTranslations('about.theSpirit');
  
  return (
    <section className="w-full bg-[#CFE8EE] flex flex-col items-center py-28 px-8 gap-16 relative overflow-hidden min-h-[60vh]">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 flex justify-center items-center relative min-h-[380px]">
          <Image
            src="/images/Logo/NagaInFiredefr.png"
            alt="Naga Logo"
            width={350}
            height={350}
            className="relative z-20 object-contain translate-y-[40%] scale-180"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl z-10">
          <h2 className="text-[#F9461C] text-5xl font-extrabold mb-10">{t('title')}</h2>
          <p className="text-gray-700 text-xl mb-6">
            {t('description1')}
          </p>
          <p className="text-gray-700 text-xl">
            {t('description2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheSpiritSection; 