import ExperienceCard from './ExperienceCard';
import {
  ExperienceDataType,
  getAllExperiences,
} from '@/src/constants/experiences';

const ExperienceSection: React.FC = () => {
  const experiences = getAllExperiences();
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-screen-lg px-4 py-12 text-white"
    >
      <h2 className="mb-8 text-center text-[3rem] font-bold">
        Professional{' '}
        <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Experience.
        </span>
      </h2>

      <ul className="relative space-y-20 md:space-y-2">
        {/* Center vertical line (visible on md and larger screens) */}
        <div className="absolute top-0 bottom-0 left-1/2 hidden w-[2px] -translate-x-1/2 transform bg-gray-700 md:block" />

        {experiences.map((exp: ExperienceDataType, index: number) => (
          <li key={exp.id + index}>
            <ExperienceCard index={index} experienceId={exp.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

// Component to handle the "Show More" functionality

export default ExperienceSection;
