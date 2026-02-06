import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
// import { notFound } from 'next/navigation';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale; // en--us
  // routing.locales // [en-us, ar-sa]
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

//  if (!locales.includes(locale as Locale)) {
//     return notFound();
//   }


  // Load messages for the determined locale
  const messages = {
    common: (await import(`../../messages/${locale}/common.json`)).default,
    header: (await import(`../../messages/${locale}/header.json`)).default,
    home: (await import(`../../messages/${locale}/home.json`)).default,
    about: (await import(`../../messages/${locale}/about.json`)).default,
    contact: (await import(`../../messages/${locale}/contact.json`)).default,
    work: (await import(`../../messages/${locale}/work.json`)).default,
    projects: (await import(`../../messages/${locale}/projects.json`)).default,
    experience: (await import(`../../messages/${locale}/experience.json`)).default,
    experienceCard: (await import(`../../messages/${locale}/experienceCard.json`)).default,
    credentialsCard: (await import(`../../messages/${locale}/credentialsCard.json`)).default,
  
  };

  return {
    locale,
    messages,
    timeZone: 'UTC'
  };
});