import ExperienceSection from '@/src/components/Experience'
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export default function Experience() {
  return (
    <ExperienceSection />
  )
}

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'experience'});
  
  return {
    title: t('experienceTitle'),
    description: t('hexperienceescription'),
    keywords: t('additionalMetaData')
  };
}

