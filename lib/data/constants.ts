export const SITE = {
  name: 'Tanveer H.',
  role: 'Frontend-focused Full Stack Developer',
  years: '3+',
  tagline: 'I build fast, reactive web apps that solve real problems.',
  email: 'infpdfzx@gmail.com', // Update to your real email
  linkedin: 'https://www.linkedin.com/in/tanveer-h1/', // Replace with real URL
  github: 'https://github.com/tanveer-G',   // Replace with real URL
  twitter: '#',  // Replace with real URL
} as const

export const MQ_ITEMS = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB',
  'Redux Toolkit', 'Framer Motion', 'Chart.js', 'VideoJS', 'hls.js', 'Supabase',
  'TanStack Query', 'Zustand', 'FastAPI', 'Docker', 'AWS', 'Context API',
  'jsvectormap', 'Swiper', 'Python', 'REST APIs',
] as const

export const STAT_PILLS = [
  { label: 'Available for Work', dot: true },
  { label: '35+ Projects Shipped', dot: false },
  { label: '96% Client Satisfaction', dot: false },
] as const

export const IMPACT_STATS = [
  { to: 3,   sfx: '+',  label: 'Years Experience',    fontSize: '2.8rem' },
  { to: 35,  sfx: '+',  label: 'Projects Delivered',  fontSize: '2.8rem' },
  { to: 92,  sfx: '%',  label: 'Client Satisfaction', fontSize: '2.8rem' },
  { to: 200, sfx: 'k+', label: 'Lines of Code',       fontSize: '2.2rem' },
  { to: 95,  sfx: '+',  label: 'Lighthouse Score',    fontSize: '2.8rem', badges: ['Perf', 'A11y', 'SEO'] },
] as const

export const DEGREE = {
  title: 'B.Sc. (Honours) in Computer Science',
  institution: 'Aligarh Muslim University, Aligarh — India',
  period: '2020 – 2023',
  grade: '1st Division',
} as const
