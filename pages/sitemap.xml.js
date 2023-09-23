const generateSitemap = (pages, locales, defaultLocale) => {
    const languageUrls = [];
  
    pages.forEach((page) => {
      locales.forEach((locale) => {
        const url = `https://tanveer-portfolio.vercel.app/${locale}${page}`;
        const isDefault = locale === defaultLocale;
        languageUrls.push({
          url,
          lang: isDefault ? 'x-default' : locale,
        });
      });
    });
  
    return languageUrls;
  };
  
  export const getServerSideProps = async ({ res }) => {
    const pages = [
      '/about',
      '/contact',
      '/services',
      '/testimonials',
      '/work',
      '/home',
      // Add more pages here as needed
    ];
    const locales = ['ar-SA', 'de', 'en-US', 'ms-SG', 'mt'];
    const defaultLocale = 'en-US';
  
    const languageUrls = generateSitemap(pages, locales, defaultLocale);
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlSet xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        ${languageUrls
          .map(({ url, lang }) => `
            <url>
              <loc>${url}</loc>
              ${locales
                .map((locale) => `
                  <xhtml:link
                    rel="alternate"
                    hreflang="${locale}"
                    href="${url}"
                  />
                `)
                .join('')}
              ${lang === 'x-default' ? `<xhtml:link rel="alternate" hreflang="x-default" href="${url}" />` : ''}
            </url>
          `)
          .join('')}
      </urlSet>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  };
  
  export default function SitemapXml() {
    //Simple React Component for rendering. This component doesn't need any content.
    return null;
  }