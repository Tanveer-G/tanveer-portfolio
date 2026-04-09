export interface Skill {
  n: string
  e: string
  c: SkillCategory
  i: string
}

export type SkillCategory =
  | 'Frontend Core'
  | 'State & Data'
  | 'Backend & DB'
  | 'Tools & Libs'
  | 'DevOps & Cloud'

export const SK_CATS: Array<'All' | SkillCategory> = [
  'All',
  'Frontend Core',
  'State & Data',
  'Backend & DB',
  'Tools & Libs',
  'DevOps & Cloud',
]

export const SKILLS: Skill[] = [
  // Frontend Core
  { n: 'React',         e: '⚛',  c: 'Frontend Core',   i: '7+ projects · 3 years daily driver' },
  { n: 'Next.js',       e: '▲',  c: 'Frontend Core',   i: 'App Router, ISR, SSR · 5 projects' },
  { n: 'TypeScript',    e: 'TS', c: 'Frontend Core',   i: 'Strict mode · all major projects' },
  { n: 'JavaScript',    e: 'JS', c: 'Frontend Core',   i: 'ES6+ · core language' },
  { n: 'Tailwind CSS',  e: '◈',  c: 'Frontend Core',   i: 'All projects · utility-first expert' },
  { n: 'CSS3',          e: '🎨', c: 'Frontend Core',   i: 'Advanced animations, grid, custom props' },
  { n: 'HTML5',         e: '🌐', c: 'Frontend Core',   i: 'Semantic, accessible markup' },
  // State & Data
  { n: 'Redux Toolkit', e: '🔧', c: 'State & Data',    i: 'Complex state · 3 projects' },
  { n: 'Context API',   e: '🔗', c: 'State & Data',    i: 'Lightweight state · 4 projects' },
  { n: 'Zustand',       e: '🐻', c: 'State & Data',    i: 'Lightweight state · 2 projects' },
  { n: 'TanStack Query',e: '🔄', c: 'State & Data',    i: 'Server caching & sync · 3 projects' },
  // Backend & DB
  { n: 'Node.js',        e: '⬡',  c: 'Backend & DB',   i: 'API servers, middleware, webhooks' },
  { n: 'Python/FastAPI', e: '🐍', c: 'Backend & DB',   i: 'DocuChat AI backend · SSE streaming' },
  { n: 'MongoDB',        e: '🍃', c: 'Backend & DB',   i: '3 projects · aggregations, indexes' },
  { n: 'PostgreSQL',     e: '🐘', c: 'Backend & DB',   i: 'Relational modeling, joins' },
  { n: 'Supabase',       e: '⚡', c: 'Backend & DB',   i: 'Auth + realtime · Team Task Board' },
  // Tools & Libs
  { n: 'Framer Motion',  e: '🎞', c: 'Tools & Libs',   i: 'Animations · 4 projects' },
  { n: 'Chart.js',       e: '📊', c: 'Tools & Libs',   i: 'CDN analytics dashboards' },
  { n: 'VideoJS',        e: '▶',  c: 'Tools & Libs',   i: 'HLS player · 5centsCDN' },
  { n: 'hls.js',         e: '📹', c: 'Tools & Libs',   i: 'HLS streaming · 5centsCDN' },
  { n: 'Swiper',         e: '🔄', c: 'Tools & Libs',   i: 'Touch-enabled carousels' },
  { n: 'React Select',   e: '☰',  c: 'Tools & Libs',   i: 'Advanced dropdowns' },
  { n: 'jsvectormap',    e: '🗺',  c: 'Tools & Libs',   i: 'Interactive maps at 5centsCDN' },
  // DevOps & Cloud
  { n: 'AWS',            e: '☁',  c: 'DevOps & Cloud', i: 'EC2, ECS · DocuChat AI deployment' },
  { n: 'Docker',         e: '🐳', c: 'DevOps & Cloud', i: 'Containerised DocuChat AI backend' },
  { n: 'Git',            e: '🌿', c: 'DevOps & Cloud', i: 'Daily workflow · branching strategies' },
  { n: 'CI/CD',          e: '⚙',  c: 'DevOps & Cloud', i: 'Concepts · GitHub Actions exposure' },
]
