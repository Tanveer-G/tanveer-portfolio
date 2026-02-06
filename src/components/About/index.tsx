'use client'
import NavbarLayout from '@/src/components/CommonUI/NavbarLayout'
import { FC } from 'react';
import MyWork from '../Work';
import ExperienceSection from '../Experience';


type TabType = {
  label: string;
  icon: string;
  iconSelected: string;
  value: number;
  component: FC; // No props for most components
};
  

const tabs: TabType[] = [
  {
    label: 'Skills',
    icon: '/images/page-specific/home/products/icon-product-nav-03.svg',
    iconSelected: '/images/page-specific/home/products/icon-product-nav-13.svg',
    value: 1,
    component: SkillSection,
  },
  // {
  //   label: 'Experience',
  //   icon: '/images/page-specific/home/products/icon-product-nav-04.svg',
  //   iconSelected: '/images/page-specific/home/products/icon-product-nav-14.svg',
  //   value: 2,
  //   component: ExperienceSection,
  // },
  {
    label: 'Credentials',
    icon: '/images/page-specific/home/products/icon-product-nav-03.svg',
    iconSelected: '/images/page-specific/home/products/icon-product-nav-13.svg',
    value: 3,
    component: CredentialCard,
  },
  // {
  //   label: 'Awards',
  //   icon: '/images/page-specific/home/products/icon-product-nav-04.svg',
  //   iconSelected: '/images/page-specific/home/products/icon-product-nav-14.svg',
  //   value: 4,
  //   component: MyWork,
  // },
];
import { useTranslations } from 'next-intl';
import CredentialCard from '../CredentialCard';
import SkillSection from '../SkillSection';
// import Credentials, { CredentialsUse } from '../Credentials';
export default function AboutMe() {
     const t = useTranslations('about');
  return (
    <div>
{/* <p>{t('aboutTitle')}*</p> */}
      <NavbarLayout tabs={tabs} />
    </div>
  )
}
