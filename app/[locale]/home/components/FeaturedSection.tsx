import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const FeaturedSection = () => {
  const t = useTranslations('featured');
  const locale = useLocale();

  const featuredProducts = [
    {
      key: 'nagabalmGo',
      img: "/images/Images for NB/Naga-Balm-Go.jpg",
      bgColor: "bg-[#E8F5F0]",
      badgeColors: "bg-[#B2E3D7] text-[#009688]",
    },
    {
      key: 'inhalerRollOn',
      img: "/images/Images for NB/Inhaler&RollOn.jpg",
      bgColor: "bg-[#FFE6B0]",
      badgeColors: "bg-[#E8F5F0] text-[#009688]",
    },
    {
      key: 'mosquitoRepellent',
      img: "/images/Images for NB/NagaBalm-MosquitoRepellent.jpg",
      bgColor: "bg-[#FFF8E1]",
    },
    {
      key: 'nagabalmFire',
      img: "/images/Images for NB/Naga-Balm-Fire.jpg",
      bgColor: "bg-[#FFE0D6]",
    },
    {
      key: 'extremeLiniment',
      img: "/images/Images for NB/Leniment-Oil-Extreme.jpg",
      bgColor: "bg-[#F9461C]",
      textColor: "text-white",
      isLastCard: true,
    },
  ];

  return (
    <section className="bg-white w-full py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className={`text-[#F9461C] text-4xl font-bold tracking-tight ${locale === 'km' ? 'font-hanuman' : ''}`}>
            {t('title')}
          </h2>
          <Link 
            href={`/${locale}/products`}
            className={`bg-[#F9461C] text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300 hover:bg-[#d13a17] flex items-center gap-2 group ${locale === 'km' ? 'font-hanuman' : ''}`}
          >
            {t('viewAll')}
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Image Container */}
              <div className={`card relative aspect-square mb-6 bg-white overflow-hidden`}>
                {/* Product Image */}
                <div className="absolute inset-0 w-full h-full rounded-[10px] overflow-hidden">
                  <Image
                    src={product.img}
                    alt={t(`products.${product.key}.name`)}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  />
                </div>
                {/* Badge */}
                {t.has(`products.${product.key}.label`) && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${product.badgeColors} ${locale === 'km' ? 'font-hanuman' : ''}`}>
                    {t(`products.${product.key}.label`)}
                  </span>
                )}
              </div>
              {/* Product Info */}
              <div className={`flex flex-col flex-grow text-[#F9461C]`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-bold text-xl ${locale === 'km' ? 'font-hanuman' : ''}`}>
                    {t(`products.${product.key}.name`)}
                  </h3>
                  <span className={`text-sm font-bold opacity-75 ${locale === 'km' ? 'font-hanuman' : ''}`}>
                    {t(`products.${product.key}.weight`)}
                  </span>
                </div>
                <p className={`text-sm text-black mb-4 min-h-[48px] ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`products.${product.key}.description`)}
                </p>
                {/* Learn More Button */}
                <Link 
                  href={`/${locale}/products`}
                  className={`mt-auto w-full py-3 px-8 rounded-full font-bold text-sm transition-colors duration-300 border border-current hover:bg-[#F9461C] hover:text-white text-center ${locale === 'km' ? 'font-hanuman' : ''}`}
                >
                  {t('learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection; 