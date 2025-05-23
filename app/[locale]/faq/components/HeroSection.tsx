import React from "react";
import Image from "next/image";

const FaqHeroSection = () => (
  <section className="w-full bg-[#CFE8EE] flex flex-col md:flex-row items-start justify-start py-8 px-8 gap-8 relative overflow-hidden min-h-[28vh]">
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
  </section>
);

export default FaqHeroSection; 