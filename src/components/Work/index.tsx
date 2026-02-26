'use client';
import ProjectCard from '@/src/components/ProjectCard';
import { getAllProjects, ProjectId } from '@/src/constants/projects';

export default function MyWork() {
  const projects = getAllProjects(); // or getFeaturedProjects() for only featured

  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-screen-5xl px-0 md:px-4 py-12 text-white"
    >
      <h2 className="mb-8 text-center text-[3rem] font-bold">
        My{' '}
        <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Projects.
        </span>
      </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              projectId={project.id as ProjectId} 
            />
          ))}
        </div>
    </section>
  );
}