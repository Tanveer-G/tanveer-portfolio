
interface Skill {
    name: string;
    icon: string;
    category: "Languages" | "Frameworks" | "Libraries" | "Tools";
  }
  
  interface Skill {
    name: string;
    icon: string;
    category: "Languages" | "Frameworks" | "Libraries" | "Tools";
  }
  
  const skills: Skill[] = [
    { name: "JavaScript", icon: "/skill-icons/JavaScript.svg", category: "Languages" },
    { name: "TypeScript", icon: "/skill-icons/TypeScript.svg", category: "Languages" },
    { name: "Next.js", icon: "/skill-icons/NextJS-Light.svg", category: "Frameworks" },
    { name: "React.js", icon: "/skill-icons/React-Light.svg", category: "Libraries" },
    { name: "Redux", icon: "/skill-icons/Redux.svg", category: "Libraries" }, // No Redux icon, using React as a placeholder
    { name: "Tailwind CSS", icon: "/skill-icons/TailwindCSS-Light.svg", category: "Tools" },
    { name: "Express.js", icon: "/skill-icons/ExpressJS-Light.svg", category: "Frameworks" },
    { name: "SQL", icon: "/skill-icons/MySQL-Light.svg", category: "Tools" },
    // Additional skills for frontend development
    { name: "Git", icon: "/skill-icons/Git.svg", category: "Tools" },
    { name: "Webpack", icon: "/skill-icons/Webpack-Light.svg", category: "Tools" },
    { name: "Babel", icon: "/skill-icons/Babel.svg", category: "Tools" }, // No Babel icon, using React as a placeholder
    // { name: "Jest", icon: "/skill-icons/Jest.svg", category: "Tools" },
    { name: "Figma", icon: "/skill-icons/Figma-Light.svg", category: "Tools" },
    { name: "CSS3", icon: "/skill-icons/CSS.svg", category: "Languages" },
    { name: "HTML5", icon: "/skill-icons/HTML.svg", category: "Languages" },
    // { name: "Firebase", icon: "/skill-icons/Firebase-Light.svg", category: "Tools" },
    // { name: "Cloudflare", icon: "/skill-icons/Cloudflare-Light.svg", category: "Tools" },
    { name: "Vite", icon: "/skill-icons/Vite-Light.svg", category: "Tools" },
    // { name: "VSCode", icon: "/skill-icons/VSCode-Light.svg", category: "Tools" },
    // { name: "Yarn", icon: "/skill-icons/Yarn-Light.svg", category: "Tools" },
    // { name: "npm", icon: "/skill-icons/npm-Light.svg", category: "Tools" },
    { name: "MongoDB", icon: "/skill-icons/MongoDB.svg", category: "Tools" },
    { name: "Supabase", icon: "/skill-icons/Supabase-Light.svg", category: "Tools" },
    // { name: "PostgreSQL", icon: "/skill-icons/PostgreSQL-Light.svg", category: "Tools" },
    { name: "Netlify", icon: "/skill-icons/Netlify-Light.svg", category: "Tools" },
    // { name: "Vercel", icon: "/skill-icons/Vercel-Light.svg", category: "Tools" },
    { name: "Material UI", icon: "/skill-icons/MaterialUI-Light.svg", category: "Libraries" },
    { name: "Sass", icon: "/skill-icons/Sass.svg", category: "Tools" },
    { name: "Prisma", icon: "/skill-icons/Prisma.svg", category: "Tools" },
    { name: "Photoshop", icon: "/skill-icons/Photoshop.svg", category: "Tools" },
    { name: "GitHub", icon: "/skill-icons/Github-Light.svg", category: "Tools" },
    // { name: "Markdown", icon: "/skill-icons/Markdown-Light.svg", category: "Tools" },
    { name: "Sentry", icon: "/skill-icons/Sentry.svg", category: "Tools" }, // No Stripe icon, using React as a placeholder
    // { name: "Framer Motion", icon: "/skill-icons/React-Light.svg", category: "Libraries" }, // No Framer Motion icon, using React as a placeholder
];
  
  
  export default skills;