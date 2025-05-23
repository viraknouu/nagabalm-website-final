"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useTranslations } from 'next-intl';

const DiscoverSolutionSection = () => {
  const router = useRouter();
  const t = useTranslations('contact.discoverSolution');

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${category}`);
  };

  return (
    <section className="w-full bg-[#D6F2F2] flex flex-col items-center py-16 px-4">
      <h2 className="text-[#F9461C] text-3xl sm:text-4xl font-extrabold text-center mb-10">
        {t('title').split('\\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <div className="flex flex-col md:flex-row gap-16 w-full max-w-7xl justify-center items-stretch">
        {/* Active Lifestyles Card */}
        <div className="bg-[#F9461C] card p-6 text-white w-full max-w-2xl flex flex-row items-center relative h-56 overflow-visible rounded-xl">
          <div className="flex-1 pr-32 pl-4">
            <h3 className="font-extrabold text-3xl mb-3">
              {t('activeLifestyles.title')}<br />
            </h3>
            <p className="text-xl mb-3">
              {t('activeLifestyles.subtitle').split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className="text-base mb-4 opacity-90">
              {t('activeLifestyles.description').split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="absolute bottom-6 right-10 z-10">
              <button 
                onClick={() => handleCategoryClick('active')}
                className="bg-[#FFE6B0] text-[#F9461C] font-bold py-3 px-8 rounded-full text-lg flex items-center gap-2 hover:bg-[#ffd580] transition-colors"
              >
                {t('activeLifestyles.button')}
              </button>
            </div>
          </div>
          <div className="absolute right-[-10px] bottom-0 top-auto">
            <Image 
              src="/images/History of CoCo Khmer 3/ActiveLifeStyle@4x.png"
              alt="Active Lifestyle"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
        {/* Everyday Relief Card */}
        <div className="bg-[#00B388] card p-6 text-white w-full max-w-2xl flex flex-row items-center relative h-56 overflow-visible rounded-xl">
          <div className="flex-1 pr-32 pl-4">
            <h3 className="font-extrabold text-3xl mb-3">
              {t('everydayRelief.title')}<br />
            </h3>
            <p className="text-xl mb-3">
              {t('everydayRelief.subtitle').split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className="text-base mb-4 opacity-90">
              {t('everydayRelief.description').split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="absolute bottom-6 right-10 z-10">
              <button 
                onClick={() => handleCategoryClick('everyday')}
                className="bg-[#CFE8EE] text-[#F9461C] font-bold py-3 px-8 rounded-full text-lg flex items-center gap-2 hover:bg-[#ffd580] transition-colors"
              >
                {t('everydayRelief.button')}
              </button>
            </div>
          </div>
          <div className="absolute right-[-10px] bottom-0 top-auto">
            <Image 
              src="/images/History of CoCo Khmer 3/DailyLifeStyle@4x.png"
              alt="Daily Lifestyle"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSolutionSection; 