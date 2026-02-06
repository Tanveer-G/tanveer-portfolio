// import { Project } from "@/src/types/project";

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "Good News PWA: Filters & Bookmarks",
//     image: "/projects/goodnews.webp",
//     techStack: "Next.js, Tailwind CSS, SWR, Context API, Next-PWA",
//     description:
//       `"Good News PWA" provides an intuitive news browsing experience with advanced filtering, search, bookmarking, and infinite scrolling features. The app is optimized for performance and includes a smooth scroll-to-top function for effortless navigation across news articles.`,
//     video: "/projects/video/good-news.webm",
//     live: "https://tanveer-goodnews.vercel.app/",
//     github: "https://github.com/Tanveer-G/GoodNewsPWA-FiltersAndBookmark",
//   },
//   {
//     id: 2,
//     title: "PayForm Pro: Modular Razorpay Integration",
//     image: "/projects/payformpro.webp",
//     techStack: "React, Redux, Razorpay API",
//     description:
//       `"PayForm Pro" streamlines payment integration by offering a modular solution for secure form submissions and payment processing. It features a user-friendly frontend, robust backend API routes, and efficient data management with MongoDB.`,
//     live: "https://tanveer-payformpro.vercel.app/",
//     github: "https://github.com/Tanveer-G/payFormPro-ModularRazorPayIntegration",
//   },
//   {
//     id: 3,
//     title: "ZipSearch: Postal Code Information App",
//     image: "/projects/zipsearch.webp",
//     techStack: "React, Tailwind CSS, React-Query, React-Country-Flag, Vite, Zippopotam API",
//     description:
//       `"ZipSearch" is an interactive platform for exploring global postal code data. Leveraging the Zippopotam API, the app delivers seamless access to location-based information, making it a vital tool for data-driven searches.`,
//     live: "https://tanveer-zipsearch.vercel.app/",
//     github: "https://github.com/Tanveer-G/ZipSearch-PostalCode-Information",
//   },
//   {
//     id: 4,
//     title: "Pic Perfect: Realtime Image Optimization App",
//     image: "/projects/picPerfectpro.webp",
//     techStack: "TypeScript, Next.JS, Sharp",
//     description:
//       `"Pic Perfect" is a web application designed for real-time image optimization. It leverages cutting-edge technologies to allow users to efficiently manipulate and optimize images, ensuring a fast and seamless experience.`,
//     live: "https://tanveer-pic-perfect-pro.vercel.app/",
//     github: "https://github.com/Tanveer-G/pic-perfect-pro",
//   },
//   {
//     id: 5,
//     title: "Geo-Targeted Portfolio App: Multilingual & SEO-Optimized",
//     image: "/projects/og.webp",
//     techStack: "Next.JS, next-i18next, framer-motion, react-icons, swiper, tsparticles, Google Analytics",
//     description:
//       `"Tanveer's Portfolio" is a multilingual and SEO-optimized web app that showcases my skills, projects, and achievements. Built with modern technologies, it offers an engaging and accessible experience tailored to diverse audiences.`,
//     live: "https://tanveer-portfolio.vercel.app/",
//     github: "https://github.com/Tanveer-G/tanveer-portfolio",
//   },
//   {
//     id: 6,
//     title: "Best Weather App",
//     image: "/projects/bestweather.webp",
//     techStack: "HTML, CSS, JavaScript, Weather API",
//     description:
//       `"Best Weather App" delivers real-time weather updates with dynamic visuals that change based on current conditions. It offers accurate, live data with an engaging interface that keeps users informed at a glance.`,
//     video: "/projects/video/best-weather.webm",
//     github: "https://github.com/Tanveer-G",
//   },
//   {
//     id: 7,
//     title: "Block Buster: Movie Reviews & Filters",
//     image: "/projects/blockbuster.webp",
//     techStack: "TypeScript, Next.JS, Redux",
//     description:
//       `"Block Buster" is a dynamic web application for movie reviews that combines filtering, sorting, and detailed movie insights. Designed for responsiveness and speed, it offers an engaging user experience for film enthusiasts.`,
//     video: "/projects/video/",
//     github: "https://github.com/Tanveer-G",
//   },
// ];
// src/constants/projects.ts
import { Project } from '@/src/types/project';

// Project IDs as enum for type safety
export enum ProjectId {
  GOOD_NEWS = 'good-news',
  PAYFORM_PRO = 'payform-pro',
  ZIPSEARCH = 'zipsearch',
  PIC_PERFECT = 'pic-perfect',
  PORTFOLIO = 'portfolio',
  WEATHER_APP = 'weather-app',
  BLOCKBUSTER = 'blockbuster'
}

// Single source of truth for all non-translatable project data
export const PROJECTS_REGISTRY: Record<ProjectId, Omit<Project, 'title' | 'description'>> = {
  [ProjectId.GOOD_NEWS]: {
    id: ProjectId.GOOD_NEWS,
    image: "/projects/goodnews.webp",
    video: "/projects/video/good-news.mp4",
    live: "https://tanveer-goodnews.vercel.app/",
    github: "https://github.com/Tanveer-G/GoodNewsPWA-FiltersAndBookmark",
    featured: true,
    techStack: ["Next.js", "Tailwind CSS", "SWR", "Context API", "Next-PWA"],
    categories: ["pwa", "nextjs", "news"]
  },
  [ProjectId.PAYFORM_PRO]: {
    id: ProjectId.PAYFORM_PRO,
    image: "/projects/payformpro.webp",
    live: "https://tanveer-payformpro.vercel.app/",
    github: "https://github.com/Tanveer-G/payFormPro-ModularRazorPayIntegration",
    featured: true,
    techStack: ["React", "Redux", "Razorpay API"],
    categories: ["react", "payments", "commerce"]
  },
  [ProjectId.ZIPSEARCH]: {
    id: ProjectId.ZIPSEARCH,
    image: "/projects/zipsearch.webp",
    live: "https://tanveer-zipsearch.vercel.app/",
    github: "https://github.com/Tanveer-G/ZipSearch-PostalCode-Information",
    featured: true,
    techStack: ["React", "Tailwind CSS", "React-Query", "React-Country-Flag", "Vite", "Zippopotam API"],
    categories: ["react", "api", "utility"]
  },
  [ProjectId.PIC_PERFECT]: {
    id: ProjectId.PIC_PERFECT,
    image: "/projects/picPerfectpro.webp",
    live: "https://tanveer-pic-perfect-pro.vercel.app/",
    github: "https://github.com/Tanveer-G/pic-perfect-pro",
    featured: false,
    techStack: ["TypeScript", "Next.js", "Sharp"],
    categories: ["nextjs", "image-processing", "typescript"]
  },
  [ProjectId.PORTFOLIO]: {
    id: ProjectId.PORTFOLIO,
    image: "/projects/og.webp",
    live: "https://tanveer-portfolio.vercel.app/",
    github: "https://github.com/Tanveer-G/tanveer-portfolio",
    featured: true,
    techStack: ["Next.js", "next-i18next", "Framer Motion", "React Icons", "Swiper", "TSParticles", "Google Analytics"],
    categories: ["nextjs", "portfolio", "seo"]
  },
  [ProjectId.WEATHER_APP]: {
    id: ProjectId.WEATHER_APP,
    image: "/projects/bestweather.webp",
    video: "/projects/video/best-weather.mp4",
    github: "https://github.com/Tanveer-G",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    categories: ["javascript", "api", "weather"]
  },
  [ProjectId.BLOCKBUSTER]: {
    id: ProjectId.BLOCKBUSTER,
    image: "/projects/blockbuster.webp",
    video: "/projects/video/blockbuster-demo.mp4",
    github: "https://github.com/Tanveer-G",
    featured: false,
    techStack: ["TypeScript", "Next.js", "Redux"],
    categories: ["nextjs", "movies", "typescript"]
  }
};

// Helper function to get all projects (useful for mapping)
export const getAllProjects = () => Object.values(PROJECTS_REGISTRY);

// Helper function to get featured projects
export const getFeaturedProjects = () => 
  getAllProjects().filter(project => project.featured);

// Helper function to get project by ID with type safety
export const getProjectById = (id: ProjectId) => PROJECTS_REGISTRY[id];