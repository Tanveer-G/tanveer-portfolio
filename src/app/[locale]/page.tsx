import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from "@/src/components/Home";
import {use} from 'react';

type Props = {
  params: Promise<{locale: string}>;
};

export default  function HomePage({params}: Props) {
    const {locale} = use(params);
  
  setRequestLocale(locale);
  return (
    <Hero />
  );
}

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'home'});
  
  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    keywords: t('additionalMetaData')
  };
}

