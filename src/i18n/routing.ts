import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'ar-SA',],
  defaultLocale: 'en-US',
  pathnames: {
    '/': '/',
    // '/about': {
    //   'en-US': '/about',
    //   'ar-SA': '/من-نحن'
    // },
    '/about': {
      'en-US': '/about',
      'ar-SA': '/about'
    },
    '/work': {
      'en-US': '/work',
      'ar-SA': '/work'
    },
    '/experience': {
      'en-US': '/experience',
      'ar-SA': '/experience'
    },
    '/contact': {
      'en-US': '/contact',
      'ar-SA': '/contact'
    },
     '/services': {
      'en-US': '/services',
      'ar-SA': '/services'
    },
    // '/about': '/about',
    // '/work': '/work',
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];