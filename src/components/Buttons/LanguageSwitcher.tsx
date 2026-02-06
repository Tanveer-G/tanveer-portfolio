// 'use client';
// import { useRouter } from '@/src/i18n/navigation';
// import { usePathname } from '@/src/i18n/navigation';
// import { useLocale } from 'next-intl';
// import Image from 'next/image';

// const languages = [
//   { name: 'English', code: 'en-US' },
//   { name: 'العربية', code: 'ar-SA' },
// ];

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   // const locales = routing.locales;
//   const currentLocale = useLocale();
//   const switchLanguage = (locale: string) => {
//     router.replace(pathname, { locale });
//   };

//   return (
//     <>
//       {languages.map((locale) => (
//         <button
//           key={locale.code + locale.name}
//           onClick={() => switchLanguage(locale.code)}
//           className="flex items-center cursor-pointer gap-1.5 rounded border border-transparent px-2 py-1 text-base font-medium hover:border-white/10 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none"
//           aria-haspopup="true"
//           aria-label="Change language"
//         >
//           <span className="relative h-5 w-5">
//             <Image
//               src={`/flags/${locale.code}.svg`}
//               width={20}
//               height={20}
//               alt=""
//               className="h-full w-5 rounded-full object-contain"
//             />
//           </span>
//           {locale.name} 
//           {currentLocale === locale.code && <span>•</span>}
//         </button>
//       ))}
//     </>
//   );
// }
'use client';

import { useRouter, usePathname } from '@/src/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const languages = [
  { name: 'English', code: 'en-US' },
  { name: 'العربية', code: 'ar-SA' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // find the language that is NOT current
  const targetLanguage = languages.find(
    (lang) => lang.code !== currentLocale
  );

  if (!targetLanguage) return null;

  const switchLanguage = () => {
    router.replace(pathname, { locale: targetLanguage.code });
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-1.5 rounded border border-transparent px-2 py-1 text-base font-medium cursor-pointer hover:border-white/10"
      aria-label={`Switch language to ${targetLanguage.name}`}
    >
      <span className="relative h-5 w-5">
        <Image
          src={`/flags/${targetLanguage.code}.svg`}
          width={20}
          height={20}
          alt=""
          className="rounded-full object-contain"
        />
      </span>
      {targetLanguage.name}
    </button>
  );
}
