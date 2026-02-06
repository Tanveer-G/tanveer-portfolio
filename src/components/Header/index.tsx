// 'use client'
// import React, {use, useState, useRef, useEffect } from 'react'
// import {useTranslations} from 'next-intl'; // for client component
// import {getTranslations, setRequestLocale} from 'next-intl/server';
// import {Link} from '@/src/i18n/navigation';

// import Image from 'next/image'
// import GradientBtnLayout from '../Buttons/GradientBtnLayout';
// import SocialSideStrip from '../SocialSideStrip/index';
// import LanguageSwitcher from '../Buttons/LanguageSwitcher';

// export default function Header() {
//   const [open, setOpen] = useState(false)
//   const mobileMenuRef = useRef<HTMLDivElement | null>(null)

//   // close mobile menu on outside click or Escape
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === 'Escape') setOpen(false)
//     }
//     function onDocClick(e: MouseEvent) {
//       if (!mobileMenuRef.current) return
//       if (open && !mobileMenuRef.current.contains(e.target as Node)) {
//         setOpen(false)
//       }
//     }
//     document.addEventListener('keydown', onKey)
//     document.addEventListener('mousedown', onDocClick)
//     return () => {
//       document.removeEventListener('keydown', onKey)
//       document.removeEventListener('mousedown', onDocClick)
//     }
//   }, [open])

//   return (
//     <header className="w-full relative z-50 max-w-7xl mx-auto py-2.5 flex items-center justify-between">
//       {/* top bar container */}
//         {/* left: logo + lang (logo replaceable) */}
//         <div className="flex items-center gap-10">
//           <Link href="/" aria-label="Home" className="inline-flex items-center gap-3">
//             {/* Logo placeholder - replace inner div with your image/svg */}
//             <div
//               className="w-[58px] h-[80px]"
//               aria-hidden
//             >
//               <Image src={'/my-logo.svg'} alt='my-logo' width={58} height={80} className='h-auto'/>
//             </div>
//             <span className="sr-only">Tanveer — Frontend Developer</span>
//           </Link>

//           {/* Language selector (small) */}
//           <div className="hidden sm:flex items-center gap-2">
            
//             <LanguageSwitcher />
//           </div>
//         </div>

//         {/* right: desktop nav */}
//         <nav className="hidden md:flex items-center gap-6 text-base font-medium">
//           <Link href="/work" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">Work</Link>
//           <Link href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">About</Link>
//           <Link href="/blog" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">Blog</Link>
//           <Link href="/services" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">Services</Link>
//           <Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">Contact</Link>

//           {/* Hire button (outline with gradient border) */}
//            <GradientBtnLayout 
//            borderWidth='1.6px'
//            borderGradient="linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)"
//            className='ml-2 text-sm md:text-base w-[96px] h-10 inline-flex items-center justify-center rounded-full  font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
//            >
//           <Link
//             href="/contact"
//             className="text-base font-medium"
//             aria-label="Hire me"
//           >
//             Hire Me
//           </Link></GradientBtnLayout>
//         </nav>

//         {/* mobile controls */}
//         <div className="flex items-center gap-3 md:hidden">
//           <button
//             aria-label="Open social"
//             className="w-9 h-9 rounded-md bg-[#071022] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
//             onClick={() => {
//               // optional: toggle social (not implemented)
//             }}
//           >
//             {/* small social icon (replace if needed) */}
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
//               <path d="M12 2v20" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>

//           <button
//             onClick={() => setOpen(prev => !prev)}
//             aria-expanded={open}
//             aria-controls="mobile-menu"
//             aria-label={open ? 'Close menu' : 'Open menu'}
//             className="w-10 h-10 flex items-center justify-center rounded-md bg-white/6 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
//           >
//             {/* hamburger / close icon */}
//             <svg className={`${open ? 'hidden' : 'block'}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
//               <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <svg className={`${open ? 'block' : 'hidden'}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
//               <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>

 

//       {/* Mobile menu (slide-down) */}
//       <div
//         id="mobile-menu"
//         ref={mobileMenuRef}
//         className={`md:hidden bg-[rgba(6,9,20,0.72)] backdrop-blur-sm w-full absolute left-0 transition-transform duration-200 ease-in-out origin-top ${open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 pointer-events-none'}`}
//         style={{ top: '72px' }} // pushes below header, tweak if header height changes
//         aria-hidden={!open}
//       >
//         <div className="max-w-[1200px] mx-auto px-6 py-6">
//           <div className="flex flex-col gap-4">
//             <Link href="#work" onClick={() => setOpen(false)} className="text-lg font-semibold">Work</Link>
//             <Link href="#about" onClick={() => setOpen(false)} className="text-lg font-semibold">About</Link>
//             <Link href="#blog" onClick={() => setOpen(false)} className="text-lg font-semibold">Blog</Link>
//             <Link href="#contact" onClick={() => setOpen(false)} className="text-lg font-semibold">Contact</Link>

//             <div className="mt-3 flex gap-3">
//               <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary inline-flex items-center justify-center h-12 px-6 rounded-2xl font-semibold">
//                 Hire me
//               </Link>
//               <button onClick={() => setOpen(false)} className="btn-outline inline-flex items-center justify-center h-12 px-6 rounded-2xl font-semibold">Close</button>
//             </div>

//             <div className="mt-4 pt-4 border-t border-white/6">
//               <div className="flex items-center gap-3 text-sm text-[var(--text-main)]">
//                 <span className="text-indigo-300">+</span>
//                 <span>Welcome to my creative realm</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

// <SocialSideStrip />
//     </header>
//   )
// }



'use client';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';
import Image from 'next/image';
import SocialSideStrip from '../SocialSideStrip/index';
import LanguageSwitcher from '../Buttons/LanguageSwitcher';
import { useBreakpoint } from '@/src/hooks/useBreakpoint';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';



export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const { isDesktop } = useBreakpoint();
const t = useTranslations('header');
  // Close mobile menu on outside click or Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }
    
    function onDocClick(e: MouseEvent) {
      if (!mobileMenuRef.current) return;
      if (isMobileMenuOpen && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDocClick);
    
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDocClick);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  return (
    <header className="w-full relative z-50 max-w-7xl mx-auto py-2.5 flex items-center justify-between">
      {/* Logo and language selector */}
      <div className="flex items-center gap-10">
        <Link href="/" aria-label="Home" className="inline-flex items-center gap-3">
          <div className="w-14.5 h-20" aria-hidden>
            <Image src={'/my-logo.svg'} alt={t('logo.alt')} width={58} height={80} className='h-auto'/>
          </div>
          <span className="sr-only">{t('logo.alt')}</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Desktop Navigation - only renders on desktop */}
      {isDesktop && (
      <Navbar />
        
      )}

      {/* Mobile controls - only renders on mobile/tablet */}
      {!isDesktop && (
        <div className="flex items-center gap-3">
          {/* social media buttons */}
          {/* <button
            aria-label="Open social"
            className="w-9 h-9 rounded-md bg-[#071022] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2v20" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button> */}

          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white/6 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMobileMenuOpen && !isDesktop}
        onClose={() => setMobileMenuOpen(false)}
        menuRef={mobileMenuRef}
      />

      <SocialSideStrip />
    </header>
  );
}


/*
<nav className="flex items-center gap-6 text-base font-medium">
          <Link 
            href="/work" 
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Blog
          </Link>
          <Link 
            href="/services" 
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Contact
          </Link>

          <GradientBtnLayout 
            borderWidth='1.6px'
            borderGradient="linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)"
            className='ml-2 text-sm md:text-base w-[96px] h-10 inline-flex items-center justify-center rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'
          >
            <Link 
              href="/contact" 
              className="text-base font-medium" 
              aria-label="Hire me"
            >
              Hire Me
            </Link>
          </GradientBtnLayout>
        </nav>
*/