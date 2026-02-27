'use client';
import { Link } from '@/src/i18n/navigation';
import { usePathname } from 'next/navigation';
import GradientBtnLayout from '@/src/components/Buttons/GradientBtnLayout';
import { useTranslations } from 'next-intl';
import { withUtmInternal } from '@/lib/utm';
import { trackNavClick } from '@/lib/analytics';


// type linkType = "/work" | "/about" | "/services" | "/" | "/contact"
export const pages = [
  // { id: 'home', link: '/' },
  { id: 'work', link: '/work' }, // think change name to projects ( for better SEO but my current portfolio use work)
  { id: 'experience', link: "/experience" },
  { id: 'about', link: '/about' }, // { id: 'about', link: '/about', subpage: [{id:'',link:''},{id:'',link:''}] }
  // { id: 'services', link: '/services' },
  // { id: 'contact', link: '/contact' }, // using hire me button is a contact page so thinking to remove for space
] as const;


export default function Navbar() {
  const pathname = usePathname();
  const pageLink = pathname.split('/').pop();
  const t = useTranslations('header');

  // Determine active page: compare normalized paths
  const isActive = (link: string) => {
    // const currentPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    return pageLink === link || '/' + pageLink ===  link ;
  };

  return (
    <nav className="flex items-center gap-6 text-base font-medium">
      {pages.map(({ id, link }) => (
        <Link
          key={id}
          href={withUtmInternal(link, {
            medium: 'header-nav',
            campaign: id,
          })}
          onClick={() => trackNavClick(id, link)}
          className={`typo-p1 relative underline-offset-7 hover:underline ${
            isActive(link) ? 'text-primary underline' : 'text-secondary'
          }`}
        >
          {t(`navigation.${id}`)}
          {isActive(link) && (
            <div className="bg-primary absolute -bottom-1 h-0.5 w-full rounded-[3px] shadow-[0px_0px_8px_0px_#FDFFFD99] transition-all duration-300" />
          )}
        </Link>
      ))}

      <GradientBtnLayout
        borderWidth="1.6px"
        borderGradient="linear-gradient(to left, #FF6EC7, #AE6CFF, #6E79FF)"
        className="ml-2 inline-flex h-10 w-24 items-center justify-center rounded-full text-sm font-semibold focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none md:text-base"
      >
        <Link
          href={withUtmInternal('/contact', {
            medium: 'header-nav',
            campaign: 'hire',
          })}
          className="text-base font-medium"
          aria-label={t('hireMe.ariaLabel')}
          onClick={() => trackNavClick('hire', '/contact')}
        >
          {t('hireMe.text')}
        </Link>
      </GradientBtnLayout>
    </nav>
  );
}