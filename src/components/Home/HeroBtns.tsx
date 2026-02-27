'use client';

import GradientBtnLayout from '../Buttons/GradientBtnLayout';
import { Link } from '@/src/i18n/navigation';
import { trackHeroClick } from '@/lib/analytics';
import { withUtmInternal } from '@/lib/utm';
import { useTranslations } from 'next-intl';

export default function HeroBtns() {
  const t = useTranslations('home');

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
      <GradientBtnLayout
        className="typo-b1 flex h-12 w-full items-center justify-center font-semibold lg:w-1/3"
        borderWidth="1.6px"
        borderGradient="linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)"
      >
        <Link
          href={withUtmInternal('/work', {
            source: 'homepage',
            medium: 'hero',
            campaign: 'work',
          })}
          className="min-w-max px-5 xl:min-w-fit"
          onClick={() => trackHeroClick('work')}
        >
          {t('work')}
        </Link>
      </GradientBtnLayout>

      <GradientBtnLayout
        className="typo-b1 flex h-12 w-full items-center justify-center font-semibold lg:w-1/3"
        borderWidth="1.6px"
        borderGradient="linear-gradient(to left, #6E79FF, #E6E9FF, #6E79FF)"
      >
        <Link
          href={withUtmInternal('/contact', {
            source: 'homepage',
            medium: 'hero',
            campaign: 'contact',
          })}
          className="min-w-max px-5 xl:min-w-fit"
          onClick={() => trackHeroClick('contact')}
        >
          {t('contact')}
        </Link>
      </GradientBtnLayout>
    </div>
  );
}
