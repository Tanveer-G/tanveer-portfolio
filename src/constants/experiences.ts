export enum ExperienceId {
  FIVECENTSCDN = 'fivecentscdn',
  HOLIDYHUB = 'holidayhub',
}

export interface ExperienceDataType {
  id: ExperienceId;
  company: string;
  technologies: string[];
  employmentType: 'remote' | 'onsite' | 'hybrid';
}

// Single source of truth for non-translatable data
export const EXPERIENCES_REGISTRY: Record<ExperienceId, ExperienceDataType> = {
  [ExperienceId.FIVECENTSCDN]: {
    id: ExperienceId.FIVECENTSCDN,
    company: '5centsCDN.net',
    employmentType: 'remote',

    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Context API',
      'VideoJS',
      'react-chartjs-2',
      'jsvectormap',
      'framer-motion',
      'hls.js',
      'DashJs',
      'react-toastify',
      'react-select',
      'swiper',
    ],
  },
  [ExperienceId.HOLIDYHUB]: {
    id: ExperienceId.HOLIDYHUB,
    company: 'HolidyHub.in',
    employmentType: 'onsite',

    technologies: [
      'React',
      'CSS3',
      'Redux Toolkit',
      'Material UI',
      'Chart.js',
      'React Router DOM',
    ],
  },
};

// Helper functions
export const getAllExperiences = () => Object.values(EXPERIENCES_REGISTRY);
export const getExperienceById = (id: ExperienceId) => EXPERIENCES_REGISTRY[id];
