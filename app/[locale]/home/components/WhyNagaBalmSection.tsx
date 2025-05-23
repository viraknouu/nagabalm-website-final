import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const WhyNagaBalmSection = () => {
  const t = useTranslations('whyNagaBalm');
  const locale = useLocale();

  const cards = [
    {
      key: 'petroleumFree',
      color: "bg-[#CFE8EE]",
      textColor: "text-white",
      logo: "/images/Logo/Naga Balm__Brandmark_Fire.png",
    },
    {
      key: 'wideRange',
      color: "bg-[#00B4D8]",
      textColor: "text-white",
      logo: "/images/Logo/Naga Balm__Brandmark_White.png",
    },
    {
      key: 'handcrafted',
      color: "bg-[#FF4500]",
      textColor: "text-white",
      logo: "/images/Logo/Naga Balm__Brandmark_Gambodge.png",
    },
  ];

  return (
    <section className="w-full bg-[#E0F4F9] py-20 flex flex-col items-center relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute right-[-15%] top-[30%] w-[600px] h-[600px] opacity-50 pointer-events-none">
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Ice.png"
          alt="Background Logo"
          layout="fill"
          objectFit="contain"
          className="opacity-50"
        />
      </div>
      <div className="w-full flex flex-col items-center relative z-10">
        <h3 className={`text-[#FF4500] text-4xl font-extrabold mb-16 text-center ${locale === 'km' ? 'font-hanuman' : ''}`}>
          {t('title')}
        </h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full max-w-7xl px-4 mb-12">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`card p-8 flex-1 min-w-[280px] ${card.color} ${card.textColor} flex flex-col items-start relative overflow-hidden`}
            >
              <div className="absolute right-[-50%] bottom-[-10%] w-[400px] h-[400px] opacity-90">
                <Image
                  src={card.logo}
                  alt="Card Logo"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90"
                />
              </div>
              <div className="relative z-10 max-w-[65%]">
                <div className={`font-extrabold text-xl mb-3 ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`cards.${card.key}.title`)}
                </div>
                <div className={`font-semibold text-lg mb-3 ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`cards.${card.key}.subtitle`)}
                </div>
                <div className={`text-sm leading-relaxed ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`cards.${card.key}.description`)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={`/${locale}/about`}>
          <button className={`bg-[#FF4500] hover:bg-[#d13a17] text-white font-bold py-3 px-12 rounded-full text-lg transition-colors ${locale === 'km' ? 'font-hanuman' : ''}`}>
            {t('getToKnowUs')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyNagaBalmSection; 