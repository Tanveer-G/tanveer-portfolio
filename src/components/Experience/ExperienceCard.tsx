'use client';
// import { getTranslations } from 'next-intl/server';
import {
  ExperienceId,
  EXPERIENCES_REGISTRY,
} from '@/src/constants/experiences';
import ShowMoreButton from './ShowMoreButton';
import SkillCapsule from '../common/SkillCapsule';
import { useTranslations } from 'next-intl';

interface PropsTypes {
  // experienceData: ExperienceDataType;
  index: number;
  experienceId: ExperienceId;
}

export default function ExperienceCard({
  // experienceData,
  index,
  experienceId,
}: PropsTypes) {
  // const t = await getTranslations('experienceCard');
  const t = useTranslations('experienceCard');

  // Get non-translatable experience data from registry
  const experienceData = EXPERIENCES_REGISTRY[experienceId];

  // Get translated content using the ID
  const role = t(`experiencesList.${experienceId}.role`);
  const period = t(`experiencesList.${experienceId}.period`);
  const responsibilities = t.raw(
    `experiencesList.${experienceId}.responsibilities`,
  ) as string[];

  const isLeft = index % 2 === 0;
  return (
    <div className="relative flex items-center">
      {/* Timeline Bullet */}
      <div className="absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 md:block" />

      {/* Experience Card */}
      <div
        className={`relative mt-4 rounded-2xl border border-gray-700 bg-[#051622]/50 p-6 shadow-lg backdrop-blur-md md:w-5/12 ${
          isLeft ? 'md:mr-auto md:ml-0' : 'md:mr-0 md:ml-auto'
        }`}
      >
        {/* Period & Employment Type */}
        <p className="mb-1 text-sm text-gray-400">
          {period} &middot;{' '}
          <span className="font-semibold text-pink-500">
            {t(experienceData.employmentType)}
          </span>
        </p>
        {/* Role and Company */}
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="mb-4 text-sm text-gray-400 hover:text-indigo-500">
          {experienceData.company}
        </p>
        {/* Technologies */}
        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold">{t('technologies')}</p>
          <div className="flex flex-wrap gap-2">
            {experienceData.technologies.map((tech, idx) => (
              <SkillCapsule label={tech} key={idx} />
            ))}
          </div>
        </div>
        {/* Responsibilities */}
        <div>
          <p className="mb-2 text-sm font-semibold">{t('responsibilities')}</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {/* Display only the first responsibility initially */}
            <li className="leading-relaxed">{responsibilities[0]}</li>
          </ul>
          {/* Show more button */}
          <ShowMoreButton responsibilities={responsibilities} />
        </div>
      </div>
    </div>
  );
}
