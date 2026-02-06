
// import React from 'react';

// interface SkillCardProps {
//   icon?: React.ReactNode; // Or string for an image src, or a component
//   title: string;
//   years?: string; // Optional for years of experience
//   description: string;
//   tags: string[]; // Array of strings for the skill tags
// }

// const SkillCard: React.FC<SkillCardProps> = ({ icon, title, years, description, tags }) => {
//   return (
//     <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
//       <div className="flex items-center mb-4">
//         <div className="text-purple-400 text-3xl mr-3">
//           {/* {icon} */}
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold text-white">{title}</h3>
//           {years && <p className="text-sm text-gray-400">{years}</p>}
//         </div>
//       </div>
//       <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>
//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-purple-600 bg-opacity-30 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-200"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillCard;

import React, { useEffect, useState } from "react";
import Image from "next/image";

export type SkillCardProps = {
  title: string; // e.g. "Frontend Development"
  percent: number; // 0..100
  primary?: string; // highlighted pill string
  tags?: string[]; // chips
  meta?: string; // small subtitle like "3+ years · 12 projects"
  iconSrc?: string; // optional icon url (uses next/image)
  accent?: string; // css color (hex) for the gradient accent
  className?: string; // extra wrapper classes
  onTagClick?: (tag: string) => void; // optional callback
};


// // char gpt
export default function SkillCard({
  title,
  percent,
  primary,
  tags = [],
  meta,
  iconSrc,
  accent = "#17a8ff",
  className = "",
  onTagClick,
}: SkillCardProps) {
  const safePct = Math.max(0, Math.min(100, Math.round(percent)));
  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    // animate on mount or when percent changes
    let raf = 0;
    let start: number | null = null;
    const duration = 650;
    const from = 0;
    const to = safePct;

    function step(t: number) {
      if (!start) start = t;
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // simple ease
      const value = Math.round(from + (to - from) * eased);
      setAnimatedPct(value);
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [safePct]);

  const gradientStyle = {
    background: `linear-gradient(90deg, ${accent} 0%, rgba(255,79,177,0.92) 65%)`,
  } as React.CSSProperties;

  return (
    <div
      className={`relative w-full max-w-sm p-5 rounded-2xl bg-[#07101a]/60 backdrop-blur-md border border-white/6 shadow-[0_10px_40px_rgba(23,168,255,0.06)] ${className}`}
      role="group"
      aria-label={`${title} skill card`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="shrink-0">
          {iconSrc ? (
            <div className="w-12 h-12 rounded-full bg-white/6 border border-white/6 flex items-center justify-center overflow-hidden">
              <Image src={iconSrc} alt="skill icon" width={40} height={40} />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-white/6 border border-white/6 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current text-slate-200/90">
                <path d="M8 16L4 12l4-4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 16l4-4-4-4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>

        {/* Title + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-white truncate">{title}</h3>
            <div className="text-sm md:text-base text-slate-200/90">{safePct}%</div>
          </div>

          {meta && <div className="text-xs text-slate-400 mt-1 truncate">{meta}</div>}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={animatedPct}
          aria-label={`${title} proficiency ${animatedPct} percent`}
          className="w-full h-3 rounded-full bg-white/6 overflow-hidden border border-white/4"
        >
          <div
            className="h-full transition-[width] ease-out duration-300"
            style={{ width: `${animatedPct}%`, ...gradientStyle }}
          />
        </div>
      </div>

      {/* Primary pill */}
      {primary && (
        <div className="mt-4">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: `0 8px 30px ${accent}22`,
            }}
          >
            {primary}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onTagClick?.(t)}
            className="text-xs px-3 py-1 rounded-full border border-white/6 bg-white/3 text-slate-100/90 hover:bg-white/4 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[rgba(23,168,255,0.14)] transition"
            title={t}
            aria-pressed={false}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
        <span>Proficiency</span>
        <span>{animatedPct >= 85 ? "Expert" : animatedPct >= 65 ? "Advanced" : animatedPct >= 40 ? "Intermediate" : "Beginner"}</span>
      </div>
    </div>
  );
}

// /* ==========================
  //  Example usage (for pages/index.tsx or a storybook)
  //  ========================== */

export const ExampleSkillCard = () => (
    <SkillCard
      title="Frontend Development"
      percent={75}
      primary="JavaScript · React · Next — 85%"
      tags={["HTML5", "CSS3 / SASS", "TypeScript", "React", "Responsive Design", "Web Accessibility", "SEO"]}
      meta="2+ years · 10+ projects"
      // iconSrc="/icons/code-circle.png"
      accent="#17a8ff"
    />
);


// gimini
// export interface SkillCardProps {
//   title: string; // e.g., "Frontend Development"
//   icon?: React.ReactNode; // Optional icon, e.g., a React component or SVG
//   proficiencyPercentage: number; // e.g., 75
//   experienceYears?: string; // e.g., "3+ years"
//   projectsCount?: number; // e.g., 12
//   skills: string[]; // Array of individual skill tags, e.g., ["HTML5", "CSS3 / SASS"]
// }

// const SkillCard: React.FC<SkillCardProps> = ({
//   title,
//   icon,
//   proficiencyPercentage,
//   experienceYears,
//   projectsCount,
//   skills,
// }) => {
//   // Ensure percentage is within 0-100
//   const clampedPercentage = Math.max(0, Math.min(100, proficiencyPercentage));

//   return (
//     <div className="relative p-6 bg-gray-800 rounded-xl shadow-2xl border border-purple-700/50 max-w-sm mx-auto my-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30">
//       {/* Card Header */}
//       <div className="flex items-center mb-6">
//         {icon && <div className="mr-4 text-purple-400 text-3xl">{icon}</div>}
//         <div>
//           <h2 className="text-3xl font-bold text-white leading-tight">
//             {title}
//           </h2>
//         </div>
//       </div>

//       {/* Proficiency Bar */}
//       <div className="mb-6">
//         <div className="flex justify-between items-center text-gray-300 text-lg mb-2">
//           <span className="sr-only">Proficiency:</span>
//           <span>{clampedPercentage}%</span>
//         </div>
//         <div className="w-full bg-gray-700 rounded-full h-3">
//           <div
//             className="h-3 rounded-full"
//             style={{
//               width: `${clampedPercentage}%`,
//               background: 'linear-gradient(to right, #6EE7B7, #8B5CF6)', // Tailwind green-300 to purple-500 equivalent
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Experience and Projects */}
//       {(experienceYears || projectsCount !== undefined) && (
//         <p className="text-gray-400 text-base mb-6">
//           {experienceYears && <span>Proficiency: {experienceYears}</span>}
//           {experienceYears && projectsCount !== undefined && <span className="mx-2">·</span>}
//           {projectsCount !== undefined && <span>{projectsCount} projects</span>}
//         </p>
//       )}

//       {/* Skills Tags */}
//       <div className="flex flex-wrap gap-3">
//         {skills.map((skill, index) => (
//           <span
//             key={index}
//             className="px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-full transition-colors duration-200 hover:bg-purple-600 hover:text-white"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillCard;