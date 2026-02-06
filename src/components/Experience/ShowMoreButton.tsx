'use client';
import { useState } from 'react';
import DownArrow from '../DownArrow';
import { useTranslations } from 'next-intl';

const ShowMoreButton: React.FC<{ responsibilities: string[] }> = ({
  responsibilities,
}) => {
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations('experienceCard');

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {showAll && (
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          {responsibilities.slice(1).map((resp, idx) => (
            <li key={idx} className="leading-relaxed">
              {resp}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleToggle}
        className="mt-2 flex cursor-pointer items-center gap-0.5 text-sm font-semibold text-pink-500 hover:text-pink-300"
      >
        {showAll ? t('showLess') : t('showMore')}
        {/* <span
          className={`w-5 text-pink-500 hover:text-pink-300 ${showAll ? 'rotate-180' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span> */}
        <DownArrow size={20} color="currentColor" rotate={showAll} />
          {/* <span className="sr-only"> {t('responsibilities')} at {`company`}</span> */}
      </button>
    </div>
  );
};

export default ShowMoreButton;

