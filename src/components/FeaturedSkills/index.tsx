import Image from "next/image";

// ⚡ Selected Skills for Frontend Development
const primarySkills = [
  { name: "JavaScript", icon: "/skill-icons/JavaScript.svg" },
  { name: "TypeScript", icon: "/skill-icons/TypeScript.svg" },
  { name: "Next.js", icon: "/skill-icons/NextJS-Light.svg" }, // Light version for dark backgrounds
  { name: "React.js", icon: "/skill-icons/React-Light.svg" },
  { name: "Redux", icon: "/skill-icons/Redux.svg" },
  { name: "Tailwind CSS", icon: "/skill-icons/TailwindCSS-Light.svg" },
  { name: "Git", icon: "/skill-icons/Git.svg" },
];

const supportingSkills = [
  { name: "Express.js", icon: "/skill-icons/ExpressJS-Light.svg" },
  { name: "SQL", icon: "/skill-icons/MySQL-Light.svg" },
  { name: "Supabase", icon: "/skill-icons/Supabase-Light.svg" },
  { name: "Prisma", icon: "/skill-icons/Prisma.svg" },
  { name: "Firebase", icon: "/skill-icons/Firebase-Light.svg" },
  { name: "Figma", icon: "/skill-icons/Figma-Light.svg" },
//   { name: "Docker", icon: "/skill-icons/Docker.svg" },
];

export default function FeaturedSkills() {
  return (
    <div className="mt-10">
      {/* Primary Skills */}
      <div className="flex flex-wrap justify-center gap-8">
        {primarySkills.map((skill, index) => (
          <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>

      {/* Supporting Skills */}
      <div className="hidden md:flex flex-wrap justify-center gap-8 mt-6">
        {supportingSkills.map((skill, index) => (
          <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

// 🛠 Reusable Skill Icon Component with Hover Glow
const SkillIcon = ({ skill }: { skill: { name: string; icon: string } }) => (
  <div className="flex flex-col items-center group">
    {/* Glow Effect on Hover */}
    <div className="relative p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
      <Image src={skill.icon} alt={skill.name} width={48} height={48} className="w-full max-w-9 md:max-w-12 h-auto object-contain" />
    </div>
    <p className="mt-2 text-gray-300 text-sm">{skill.name}</p>
  </div>
);
