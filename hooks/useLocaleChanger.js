import { useRouter } from "next/router";

export default function useLocaleChanger() {
  const router = useRouter();

  const languageChanger = ( newLocale ) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return { languageChanger };
  // change just the "locale" and "maintain all other route" information including href's query
}
