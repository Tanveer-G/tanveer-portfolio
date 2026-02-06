'use client';
import React, { RefObject } from 'react';
import { Link } from '@/src/i18n/navigation';
import GradientBtnLayout from '../Buttons/GradientBtnLayout';
import {useTranslations} from 'next-intl'; // for client component

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuRef }) => {
  const t = useTranslations('header');
  if (!isOpen) return null;
  

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-[rgba(6,9,20,0.92)] backdrop-blur-lg z-50 lg:hidden"
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <Link 
          href="/work" 
          onClick={onClose} 
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          {t('navigation.work')}
        </Link>
        <Link 
          href="/about" 
          onClick={onClose} 
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
         {t('navigation.about')}
        </Link>
        {/* <Link 
          href="/blog" 
          onClick={onClose} 
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          Blog
        </Link> */}
        <Link 
          href="/services" 
          onClick={onClose} 
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
         {t('navigation.services')}
        </Link>
        <Link 
          href="/contact" 
          onClick={onClose} 
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          {t('navigation.contact')}
        </Link>
        
        <div className="mt-8 flex gap-4">
          <GradientBtnLayout 
            borderWidth='1.6px'
            borderGradient="linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)"
            className="text-sm md:text-base w-[120px] h-12 inline-flex items-center justify-center rounded-full font-semibold"
          >
            <Link 
              href="/contact" 
              onClick={onClose} 
              className="text-base font-medium"
            >
              {t('hireMe.text')}
            </Link>
          </GradientBtnLayout>
          
          <button 
            onClick={onClose} 
            className="px-6 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            aria-label={t('mobileMenu.close')}
          >
            {t('mobileMenu.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;