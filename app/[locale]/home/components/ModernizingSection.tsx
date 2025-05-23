import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const ModernizingSection = () => {
  const t = useTranslations('modernizing');
  const locale = useLocale();

  return (
    <section className="w-full bg-[#FFE6B0] py-16 relative overflow-hidden">
      {/* Cloud elements */}
      <div className="absolute left-0 top-0 w-[300px] h-[200px]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Cloud Decoration Left"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute right-0 top-0 w-[300px] h-[200px] transform scale-x-[-1]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Cloud Decoration Right"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Center content */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-[80px] h-[80px] mb-6 relative">
          <Image
            src="/images/Logo/Naga Balm__Brandmark_Fire.png"
            alt="Naga Balm Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        
        <h2 className={`text-center max-w-4xl mx-auto text-2xl sm:text-3xl font-bold leading-relaxed ${locale === 'km' ? 'font-hanuman text-[#FF4500]' : ''}`}>
          {locale === 'en' ? (
            <>
              <span className="text-[#FF4500]">WE ARE MODERNIZING THE TIME-HONORED REMEDY OF </span>
              <span className="text-[#00B4D8]">THE PRENG KOLA</span>
              <span className="text-[#FF4500]">, PRESERVING ITS RICH </span>
              <span className="text-[#00B4D8]">CAMBODIAN HERITAGE</span>
              <br />
              <span className="text-[#FF4500]">WHILE EVOLVING IT FOR THE </span>
              <span className="text-[#00B4D8]">21ST CENTURY.</span>
            </>
          ) : (
            <span className="text-[#FF4500]">{t('message')}</span>
          )}
        </h2>
      </div>
    </section>
  );
};

export default ModernizingSection; 