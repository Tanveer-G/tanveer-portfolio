// 'use client'
// import { useState } from "react";
// import Image from "next/image";
// import skills from './constants'
// // Define a type for a Skill
// interface Skill {
//   name: string;
//   icon: string;
//   category: "Languages" | "Frameworks" | "Libraries" | "Tools";
// }

// // // Example skill data
// // const skills: Skill[] = [
// //   { name: "JavaScript", icon: "/skill-icons/JavaScript.svg", category: "Languages" },
// //   { name: "TypeScript", icon: "/skill-icons/TypeScript.svg", category: "Languages" },
// //   { name: "Next.js", icon: "/skill-icons/NextJS-Light.svg", category: "Frameworks" },
// //   { name: "React.js", icon: "/skill-icons/React-Light.svg", category: "Libraries" },
// //   { name: "Tailwind CSS", icon: "/skill-icons/TailwindCSS-Light.svg", category: "Tools" },
// //   { name: "Express.js", icon: "/skill-icons/ExpressJS-Light.svg", category: "Frameworks" },
// //   { name: "SQL", icon: "/skill-icons/MySQL-Light.svg", category: "Tools" },
// // ];

// // Tab options for filtering
// const categories = ["All", "Languages", "Frameworks", "Libraries", "Tools"];

// const SkillIcon = ({ skill }: { skill: Skill }) => (
//   <div className="flex flex-col items-center group">
//     <div className="relative p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
//       <Image
//         src={skill.icon}
//         alt={skill.name}
//         width={48}
//         height={48}
//         className="w-full max-w-12 h-auto object-contain"
//       />
//     </div>
//     <p className="mt-2 text-gray-300 text-sm">{skill.name}</p>
//   </div>
// );

// const SkillSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   // Filter skills based on selected category
//   const filteredSkills = selectedCategory === "All"
//     ? skills
//     : skills.filter((skill) => skill.category === selectedCategory);

//   return (
//     <section className="w-full py-10 text-white">
//       <div className="container mx-auto px-4">
//       <h2 className="text-[3rem] font-bold text-center mb-8">
//         My{" "}
//         <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
//           Skills.
//         </span>
//       </h2>

//         {/* Category Tabs */}
//         <div className="flex justify-center mb-8 flex-wrap gap-4">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full transition-colors duration-300 border ${
//                 selectedCategory === category
//                   ? "bg-blue-500 border-blue-500 text-white"
//                   : "bg-transparent border-gray-500 text-gray-300 hover:bg-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {filteredSkills.map((skill) => (
//             <SkillIcon key={skill.name} skill={skill} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillSection;


// 2nd test


// import React from 'react';
// import SkillCard from './SkillCard'; // Adjust path as needed
// // import { FaCode, FaDatabase, FaTools, FaCogs } from 'react-icons/fa'; // Example icons

// const SkillsSection: React.FC = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-center mb-12 relative">
//           My Skills
//           <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full"></span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Frontend Development Card */}
//           <SkillCard
//             // icon={<FaCode />}
//             title="Frontend Development"
//             years="2020 - 2023"
//             description="Crafting responsive, performant, and intuitive user interfaces."
//             tags={[
//               'HTML5',
//               'CSS3 / SCSS+',
//               'Tyec.js', // Assuming this is a typo and should be React.js or Vue.js etc.
//               'Redux.js',
//               'Responsive Design',
//               'Web Accessibility',
//               'Web Usability',
//             ]}
//           />

//           {/* Backend & Databases (APIs) Card */}
//           <SkillCard
//             // icon={<FaDatabase />}
//             title="Backend & Databases"
//             years="2020 - 2023"
//             description="Building robust APIs and for managing scalable applications."
//             tags={[
//               'Node.js',
//               'RESTful APIs',
//               'MongoDB',
//               'PostgreSQL',
//               'Tailwind CSS', // Assuming this is meant to be here, might be better under Tools
//               'Authentication (JWT)',
//               'Docker (Basic)',
//               'Figma.js', // Assuming this is meant to be here, might be better under Tools
//             ]}
//           />

//           {/* Backend & Databases (Algorithms/Systems) Card */}
//           <SkillCard
//             // icon={<FaCogs />}
//             title="Backend & Databases" // Or "Backend Fundamentals" for clarity
//             years="2020 - 2023"
//             description="Building strong fundamentals in algorithms, system design and code quality."
//             tags={[
//               'Git / GitHub',
//               'Express.js',
//               'VS Code',
//               'Webpack / Vite',
//               'Docker (Basic)',
//               'NPM / Yarn',
//             ]}
//           />

//           {/* Tools & Workflow Card */}
//           <SkillCard
//             // icon={<FaTools />}
//             title="Tools & Workflow"
//             years="2020 - 2023"
//             description="Comprehending fundamentals in stream-lining and ensuring code quality."
//             tags={[
//               'Problem Solving',
//               'Team Serving', // Assuming "Teamwork"
//               'Communication',
//               'Adaptability',
//               'Time Management',
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


import React from 'react'
import SkillCard, { ExampleSkillCard } from './SkillCard'

export default function SkillsSection() {
  return (
    <section className="w-full max-w-screen-lg mx-auto py-12 px-4 text-white relative">
       <div className="max-w-7xl mx-auto">
         {/* <h2 className="text-4xl font-extrabold text-center mb-12 relative">
           My Skills
           <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full"></span>
         </h2> */}

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
       <SkillCard
      title="Frontend Development"
      percent={95}
      primary="JavaScript · React · Next — 95%"
      tags={["TypeScript", "Next.JS", "React.JS", "Optimization", "Webpack", "HTML5", "CSS3 / SASS", "Responsive Design", "Web Accessibility", "SEO"]}
      meta="2+ years · 10+ projects"
      // iconSrc="/icons/code-circle.png"
      accent="#17a8ff"
    />
      <SkillCard
      title="Backend Development"
      percent={55}
      primary="Express · HTTP · Rest APIs  — 75%"
      tags={["Node.JS", "Security Best Practices", "CRUD Operations", "Auth", "Authorization", "JWT", "Validation and Sanitization", "CI/CD"]} // "Error Handling & Logging",
      meta="3+ Months · 5+ projects"
      // iconSrc="/icons/code-circle.png"
      accent="#17a8ff"
    />

  <SkillCard
      title="Database Management"
      percent={50 }
      primary="Scalable Schema Design — 70%"
      tags={["Redis", "SupaBase", "Mongoose", "SQL, No-SQL Basic", "Prisma", "Indexes", "Relations & References", "CDN", ]}
      meta="1+ Months · 1+ projects"
      // iconSrc="/icons/code-circle.png"
      accent="#17a8ff"
    />
{/* <SkillCard
  title="Dev Tools & Workflow"
  percent={30}
  primary="Git · Docker · Deployment — 75%"
  tags={[
    "Git & GitHub",
    "Docker (Basics)",
    "Postman",
    "Linux Basics",
    "Nginx (Intro)",
    "Vercel",
  ]}
  meta="2+ years"
  accent="#17a8ff"
/> */}

      {/* gimini */}
       {/* <SkillCard
        title="Frontend Development"
        icon={""} // Using Heroicons for a clean icon
        proficiencyPercentage={75}
        experienceYears="3+ years"
        projectsCount={12}
        skills={[
          "HTML5",
          "CSS3 / SASS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Vue.js",
          "Angular",
          "Responsive Design",
          "Web Accessibility",
        ]}
      /> */}
    </div>
    </div>
    </section>
  )
}
