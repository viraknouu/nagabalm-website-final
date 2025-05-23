"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { products as allProducts } from "../products";

const ProductsHeroSection = () => {
  const router = useRouter();
  const t = useTranslations();

  // Get preview products for each category
  const activeProducts = allProducts.filter((p: any) => p.useCase.type.includes("active")).slice(0, 3);
  const everydayProducts = allProducts.filter((p: any) => p.useCase.type.includes("everyday")).slice(0, 3);

  return (
    <section className="w-full min-h-[70vh] bg-[#C6E6F2] flex flex-col items-center pt-40 pb-16 relative overflow-hidden">
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

      <h1 className="text-[#F9461C] text-4xl sm:text-5xl font-extrabold text-center mb-16 mt-8 z-10 whitespace-pre-line">
        {t('products.heroTitle')}
      </h1>
      <div className="flex flex-col md:flex-row gap-16 w-full max-w-7xl justify-center items-stretch z-10">
        {/* Active Lifestyles Card */}
        <div className="bg-[#F9461C] card p-6 text-white w-full max-w-2xl flex flex-col relative rounded-xl">
          <div className="flex-1 pr-32 pl-4">
            <h3 className="font-extrabold text-3xl mb-3">{t('products.activeLifestyles.title')}</h3>
            <p className="text-xl mb-3 whitespace-pre-line">{t('products.activeLifestyles.subtitle')}</p>
            <p className="text-base mb-4 opacity-90 whitespace-pre-line">
              {t('products.activeLifestyles.description')}
            </p>
            <div className="absolute bottom-6 right-10 z-10">
              <button
                onClick={() => router.push('/products/preview/active')}
                className="bg-[#FFE6B0] text-[#F9461C] font-bold py-3 px-8 rounded-full text-lg flex items-center gap-2 hover:bg-[#ffd580] transition-colors"
              >
                {t('products.activeLifestyles.viewProducts')}
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
        <div className="bg-[#00B388] card p-6 text-white w-full max-w-2xl flex flex-col relative rounded-xl">
          <div className="flex-1 pr-32 pl-4">
            <h3 className="font-extrabold text-3xl mb-3">{t('products.everydayRelief.title')}</h3>
            <p className="text-xl mb-3 whitespace-pre-line">{t('products.everydayRelief.subtitle')}</p>
            <p className="text-base mb-4 opacity-90 whitespace-pre-line">
              {t('products.everydayRelief.description')}
            </p>
            <div className="absolute bottom-6 right-10 z-10">
              <button
                onClick={() => router.push('/products/preview/everyday')}
                className="bg-[#FFE6B0] text-[#00B388] font-bold py-3 px-8 rounded-full text-lg flex items-center gap-2 hover:bg-[#ffd580] transition-colors"
              >
                {t('products.everydayRelief.viewProducts')}
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

export default ProductsHeroSection; 