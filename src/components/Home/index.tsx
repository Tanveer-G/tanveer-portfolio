import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import HeroBtns from './HeroBtns';

export default async function Hero() {
  const t = await getTranslations('home');

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Main hero */}
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="order-2 w-full text-center md:order-1 md:col-span-7 md:text-start lg:max-w-146 lg:min-w-md">
          <div className="text-secondary mb-1 flex items-center justify-center gap-2 text-sm md:justify-start md:text-[15px] lg:gap-3">
            <span className="text-indigo-300">+</span>
            <span className="">{t('welcomeLine')}</span>{' '}
            {/* Welcome to my creative realm */}
          </div>
          <h1
            id="hero-heading"
            className="home-title h1-gradient max-w-md text-center md:text-start"
          >
            {t('myProfessionFD')}
          </h1>{' '}
          {/*FRONTEND DEVELOPER */}
          <p className="text-secondary mt-6 max-w-md text-center text-lg md:text-start">
            {t('greetings')} <strong>{t('myName')}</strong> —{' '}
            <span className="text-[#6E79FF]">{t('myProfessionWD')}</span> <br />
            {t('myIntroPara')} <br /> {t('myIntroParaLine2')}{' '}
            <strong className="font-normal text-[#6E79FF]">
              {t('webApps')}
            </strong>
          </p>
          <HeroBtns />
        </div>

        <div className="order-1 hidden justify-center md:order-2 md:col-span-5 md:flex md:justify-end">
          <div className="portrait-shadow -ml-[0.3rem] max-h-[80vh] w-auto overflow-hidden rounded-xl md:ml-0">
            <Image
              src="/myself.png"
              alt="Tanveer portrait"
              width={840}
              height={1120}
              className="h-full w-auto object-contain"
              priority
              // sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
