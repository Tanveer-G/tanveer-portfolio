export interface Project {
  id: number
  title: string
  desc: string
  tech: string[]
  img: string          // local path: /projects/filename.webp
  live: string         // replace with actual demo URL
  gh: string           // replace with actual GitHub repo URL
}


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Curalink: AI Medical Research Assistant',
    desc: 'Transparent AI pipeline for medical research. Retrieves, ranks, and synthesizes insights from PubMed, OpenAlex, and ClinicalTrials.gov.',
    tech: ['MERN', 'React', 'Node.js', 'Express', 'MongoDB', 'OpenRouter', 'HuggingFace', 'SSE'],
    img: '/projects/curalink.webp',
    live: 'https://curalink-search.vercel.app',
    gh: 'https://github.com/Tanveer-G/Curalink-AI-Medical-Research-Assistant-Backend',
  },
  {
    id: 2,
    title: 'Team Task Board (Mini Jira)',
    desc: 'Multi-tenant SaaS frontend with Supabase auth (password + magic link), realtime sync, RLS, TanStack Query caching, Zustand, mobile-first responsive UI, and GTM analytics.',
    tech: ['Supabase', 'RLS', 'zustand', 'TanStack Query', 'Realtime'],
    img: '/projects/task-board.webp',
    live: 'https://th-task-board.netlify.app/',
    gh: 'https://github.com/Tanveer-G/',
  },
    {
    id: 3,
    title: 'DocuChat AI RAG - powered PDF chat app',
    desc: 'A PDF chat application that lets you upload documents and ask questions, with cited page references and transparent source tracking.',
    tech: ['Supabase', 'pgVector', 'Hugging Face', 'langchain', 'openrouter'],
    img: '/projects/docuchat.webp',
    live: 'https://tanveer-docuchat-ai.vercel.app/',
    gh: 'https://github.com/Tanveer-G/DocuChat-AI-RAG-powered-PDF-chat-app/tree/main',
  },
    {
    id: 4,
    title: 'PayForm Pro: Modular Razorpay Integration',
    desc: 'PayForm Pro streamlines payment integration by offering a modular solution for secure form submissions and payment processing. It features a user-friendly frontend, robust backend API routes, and efficient data management with MongoDB.',
    tech: ['React', 'Redux', 'Razorpay API'],
    img: '/projects/pay-form-pro.webp',
    live: 'https://tanveer-payformpro.vercel.app/',
    gh: 'https://github.com/Tanveer-G/payFormPro-ModularRazorPayIntegration',
  },
  {
    id: 5,
    title: 'Good News PWA: Filters & Bookmarks',
    desc: 'Good News PWA provides an intuitive news browsing experience with advanced filtering, search, bookmarking, and infinite scrolling features. The app is optimized for performance and includes a smooth scroll-to-top function for effortless navigation across news articles.',
    tech: ['Next.js', 'Tailwind CSS', 'SWR', 'Context API', 'Next-PWA'],
    img: '/projects/good-news.webp',
    live: 'https://tanveer-goodnews.vercel.app/',
    gh: 'https://github.com/Tanveer-G/GoodNewsPWA-FiltersAndBookmark',
  },
  {
    id: 6,
    title: 'ZipSearch: Postal Code Information App',
    desc: 'ZipSearch is an interactive platform for exploring global postal code data. Leveraging the Zippopotam API, the app delivers seamless access to location-based information for data-driven searches.',
    tech: ['React', 'Tailwind CSS', 'React-Query', 'React-Country-Flag', 'Vite', 'Zippopotam API'],
    img: '/projects/zip-search.webp',
    live: 'https://tanveer-zipsearch.vercel.app/',
    gh: 'https://github.com/Tanveer-G/ZipSearch-PostalCode-Information',
  },
  {
    id: 7,
    title: 'Pic Perfect: Realtime Image Optimization App',
    desc: 'Pic Perfect is a web application designed for real-time image optimization. It enables users to efficiently manipulate and optimize images, ensuring a fast and seamless experience.',
    tech: ['TypeScript', 'Next.js', 'Sharp'],
    img: '/projects/pic-perfect-pro.webp',
    live: 'https://tanveer-pic-perfect-pro.vercel.app/',
    gh: 'https://github.com/Tanveer-G/pic-perfect-pro',
  },
  {
    id: 8,
    title: 'Geo-Targeted Portfolio App: Multilingual & SEO-Optimized',
    desc: "Tanveer's Portfolio is a multilingual and SEO-optimized web app that showcases skills, projects, and achievements. Built with modern technologies, it offers an engaging and accessible experience for diverse audiences.",
    tech: ['Next.js', 'next-i18next', 'Framer Motion', 'React Icons', 'Swiper', 'TSParticles', 'Google Analytics'],
    img: '/projects/og.webp',
    live: 'https://tanveer-portfolio.vercel.app/',
    gh: 'https://github.com/Tanveer-G/tanveer-portfolio',
  },
  // {
  //   id: 9,
  //   title: 'Best Weather App',
  //   desc: 'Best Weather App delivers real-time weather updates with dynamic visuals that change based on current conditions. It offers accurate live data with an engaging interface.',
  //   tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
  //   img: '/projects/best-weather.webp',
  //   live: '#',  // No live URL provided – update when available
  //   gh: 'https://github.com/Tanveer-G',
  // },
  {
    id: 9,
    title: 'Block Buster: Movie Reviews & Filters',
    desc: 'Block Buster is a dynamic web application for movie reviews that combines filtering, sorting, and detailed movie insights. Designed for responsiveness and speed, it offers an engaging experience for film enthusiasts.',
    tech: ['TypeScript', 'Next.js', 'Redux'],
    img: '/projects/block-buster.webp',
    live: '#',  // No live URL provided – update when available
    gh: 'https://github.com/Tanveer-G',
  },
]