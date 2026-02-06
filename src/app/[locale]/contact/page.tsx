import ContactForm from '@/src/components/Contact'
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export default function Contact() {
  return (
    <ContactForm />
  )
}


export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'contact'});
  
  return {
    title: t('contactTitle'),
    description: t('contactDescription'),
    keywords: t('additionalMetaData')
  };
}

