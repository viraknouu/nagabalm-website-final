"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();
  const t = useTranslations('navigation');
  const locale = useLocale();
  let lastScrollY = 0;

  // Navigation links avec traductions - utilisation de Link avec locale automatique
  const navLinks = [
    { href: `/`, label: t('home') },
    { href: `/products`, label: t('products') },
    { href: `/about`, label: t('about') },
    { href: `/faq`, label: t('faq') },
    { href: `/contact`, label: t('contact') },
    { href: `/where-to-find`, label: t('whereToFind') },
  ];

  // Effet scroll pour ombre, transparence et direction
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 10) {
        setShowNavbar(true);
        lastScrollY = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile au changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll du body quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Séparation des liens pour desktop (gauche/droite du logo)
  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  // Fonction pour générer un lien nav
  const NavLink = ({ 
    href, 
    label, 
    onClick,
    isMobile = false 
  }: { 
    href: string; 
    label: string; 
    onClick?: () => void;
    isMobile?: boolean;
  }) => {
    // Construire l'URL complète avec la locale
    const fullHref = `/${locale}${href === '/' ? '' : href}`;
    const isActive = pathname === fullHref;
    
    const baseClasses = isMobile 
      ? "text-2xl font-semibold tracking-wide transition-all duration-300 hover:scale-105 relative group"
      : "text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105 relative group px-4 py-2";
    
    return (
      <Link
        href={fullHref}
        className={`${baseClasses} ${
          isActive 
            ? "text-[#2DD4BF]" // Couleur mint-blue pour l'état actif
            : "text-[#F04923] hover:text-[#2DD4BF]" // Orange par défaut, mint au hover
        }`}
        onClick={onClick}
      >
        {/* Effet de background au hover pour desktop */}
        {!isMobile && (
          <span className="absolute inset-0 bg-[#CFE8EE] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
        )}
        
        {/* Effet de background au hover pour mobile */}
        {isMobile && (
          <span className="absolute inset-0 bg-[#CFE8EE] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center -z-10 px-6 py-3"></span>
        )}
        
        <span className="relative z-10">{label}</span>
        
        {/* Indicateur actif pour desktop */}
        {!isMobile && isActive && (
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#2DD4BF] rounded-full"></span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <nav
        className={`fixed left-1/2 top-6 z-50 transform -translate-x-1/2 w-[95vw] max-w-7xl
          ${scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-xl border border-white/20" 
            : "bg-white/90 backdrop-blur-sm shadow-lg"
          }
          rounded-full transition-all duration-500 ease-out hidden md:block overflow-hidden
          ${showNavbar ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
          transition-transform transition-opacity duration-300`}
      >
        {/* Logo en arrière-plan avec opacité */}
        <div className="absolute left-0 top-0 h-full flex items-center pl-6 pointer-events-none">
          <Image
            src="/images/Logo/Naga Balm__Brandmark_Fire.png"
            alt="Background Logo"
            width={72}
            height={72}
            className="max-h-full max-w-[72px] object-contain opacity-30"
          />
        </div>

        <div className="flex items-center justify-center px-6 py-3 relative z-10">
            {/* Container principal centré sur le logo */}
            <div className="flex items-center justify-center w-full">
              {/* Navigation gauche */}
              <div className="flex items-center space-x-2 mr-4">
                {leftLinks.map(link => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>

              {/* Logo centré */}
              <div className="mx-3 transition-transform duration-300 hover:scale-110">
                <Link href={`/${locale}`} className="block">
                  <div className="relative">
                    <Image
                      src="/images/Logo/Naga Balm__Brandmark_Fire.png"
                      alt="Naga Balm Logo"
                      width={42}
                      height={42}
                      priority
                      className="drop-shadow-md"
                    />
                    {/* Effet de glow au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#2DD4BF] rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                  </div>
                </Link>
              </div>

              {/* Navigation droite */}
              <div className="flex items-center space-x-2 ml-4">
                {rightLinks.map(link => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          
          {/* Language Switcher Desktop */}
          <LanguageSwitcher className="ml-6 absolute right-6" />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed left-1/2 top-4 z-50 transform -translate-x-1/2 w-[95vw] max-w-sm
          ${scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-xl" 
            : "bg-white/90 backdrop-blur-sm shadow-lg"
          }
          rounded-full transition-all duration-500 ease-out md:hidden
          ${showNavbar ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
          transition-transform transition-opacity duration-300`}
      >
        {/* Logo en arrière-plan pour mobile */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-30 pointer-events-none">
          <Image
            src="/images/Logo/Naga Balm__Brandmark_Fire.png"
            alt="Background Logo"
            width={38}
            height={38}
          />
        </div>

        <div className="flex items-center justify-between px-5 py-2.5 relative z-10">
          {/* Bouton hamburger animé */}
          <button
            className="flex flex-col justify-center items-center w-12 h-12 focus:outline-none 
              transition-all duration-300 hover:scale-110 rounded-full hover:bg-[#F97316]/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#F97316] transition-all duration-300 rounded-full ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#F97316] my-1.5 transition-all duration-300 rounded-full ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#F97316] transition-all duration-300 rounded-full ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Logo mobile centré */}
          <Link href={`/${locale}`} className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/Logo/Naga Balm__Brandmark_Fire.png"
              alt="Naga Balm Logo"
              width={32}
              height={32}
              priority
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Language Switcher Mobile */}
          <LanguageSwitcher isMobile />
        </div>
      </nav>

      {/* Menu mobile overlay avec animations */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop avec blur */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#F97316]/5 to-[#2DD4BF]/5 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Contenu du menu */}
        <div className="relative h-full flex flex-col items-center justify-center">
          {/* Logo avec animation d'entrée */}
          <div 
            className={`mb-16 transition-all duration-700 delay-200 ${
              isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10"
            }`}
          >
            <Image
              src="/images/Logo/Naga Balm__Brandmark_Fire.png"
              alt="Naga Logo"
              width={64}
              height={64}
              priority
              className="drop-shadow-lg"
            />
          </div>

          {/* Navigation avec animations décalées */}
          <div className="flex flex-col items-center gap-8 w-full px-8">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <NavLink
                  href={link.href}
                  label={link.label}
                  onClick={() => setIsOpen(false)}
                  isMobile={true}
                />
              </div>
            ))}
          </div>

          {/* Effet décoratif en arrière-plan */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#F97316]/10 to-[#2DD4BF]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#2DD4BF]/10 to-[#F97316]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;