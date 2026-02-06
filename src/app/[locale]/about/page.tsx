import { useTranslations } from 'next-intl'; // for client component
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Link } from '@/src/i18n/navigation';
import { use } from 'react';
import AboutMe from '@/src/components/About';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function About({ params }: Props) {

  return (
    <div>
      {/* <h1>{t('homeTitle')}</h1> */}
      {/* <p>{t('description')}</p> */}
      {/* <Link href="/">{t('aboutLink')}</Link> */}

      <AboutMe />
      {/* <NavbarLayout tabs={tabs}/> */}
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    keywords: t('additionalMetaData')
  };
}
