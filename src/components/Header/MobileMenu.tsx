'use client';
import React, { RefObject } from 'react';
import { Link } from '@/src/i18n/navigation';
import GradientBtnLayout from '../Buttons/GradientBtnLayout';
import { useTranslations } from 'next-intl';
import { withUtmInternal } from '@/lib/utm';
import { trackMobileMenuClick, trackMobileMenuClose } from '@/lib/analytics';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuRef }) => {
  const t = useTranslations('header');

  const handleLinkClick = (item: 'work' | 'about' | 'services' | 'contact' | 'hire', url: string) => {
    trackMobileMenuClick(item, url);
    onClose();
  };

  const handleCloseClick = () => {
    trackMobileMenuClose();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-[rgba(6,9,20,0.92)] backdrop-blur-lg z-50 lg:hidden"
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* Work */}
        <Link
          href={withUtmInternal('/work', { medium: 'mobile-menu', campaign: 'work' })}
          onClick={() => handleLinkClick('work', '/work')}
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          {t('navigation.work')}
        </Link>

        {/* About */}
        <Link
          href={withUtmInternal('/about', { medium: 'mobile-menu', campaign: 'about' })}
          onClick={() => handleLinkClick('about', '/about')}
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          {t('navigation.about')}
        </Link>

        {/* Services */}
        <Link
          href={withUtmInternal('/services', { medium: 'mobile-menu', campaign: 'services' })}
          onClick={() => handleLinkClick('services', '/services')}
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          {t('navigation.services')}
        </Link>

        {/* Contact */}
        <Link
          href={withUtmInternal('/contact', { medium: 'mobile-menu', campaign: 'contact' })}
          onClick={() => handleLinkClick('contact', '/contact')}
          className="text-2xl font-semibold text-white hover:text-purple-300 transition-colors"
        >
          {t('navigation.contact')}
        </Link>

        <div className="mt-8 flex gap-4">
          <GradientBtnLayout
            borderWidth="1.6px"
            borderGradient="linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)"
            className="text-sm md:text-base w-[120px] h-12 inline-flex items-center justify-center rounded-full font-semibold"
          >
            <Link
              href={withUtmInternal('/contact', { medium: 'mobile-menu', campaign: 'hire' })}
              onClick={() => handleLinkClick('hire', '/contact')}
              className="text-base font-medium"
            >
              {t('hireMe.text')}
            </Link>
          </GradientBtnLayout>

          <button
            onClick={handleCloseClick}
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