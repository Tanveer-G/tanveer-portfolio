import MyWork from '@/src/components/Work';
import { getTranslations } from 'next-intl/server';
type Props = {
  params: Promise<{locale: string}>;
};
export default function Work() {
  return <MyWork />;
}

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'work'});
  
  return {
    title: t('workTitle'),
    description: t('workDescription'),
    keywords: t('additionalMetaData')
  };
}

