'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ProjectId, PROJECTS_REGISTRY } from '@/src/constants/projects';
import VideoModal from '@/src/components/modals/VideoModal';
import SkillCapsule from '../common/SkillCapsule';

interface ProjectCardProps {
  projectId: ProjectId;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId }) => {
  const t = useTranslations('projects');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Get non-translatable project data from registry
  const projectData = PROJECTS_REGISTRY[projectId];
  
  // Get translated content
  const title = t(`projects.projectsList.${projectId}.title`);
  const description = t(`projects.projectsList.${projectId}.description`);
  const techStack = projectData.techStack;

  return (
    <>
      <article 
        className="group flex flex-col rounded-2xl bg-[#051622]/60 backdrop-blur-sm border border-gray-700/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-gray-500/30 hover:bg-[#051622]/70"
        aria-labelledby={`project-title-${projectId}`}
      >
        {/* Thumbnail Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={projectData.image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk8jkjX4hw3Uu9gU9gQAAA"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051622] via-transparent to-transparent opacity-80"></div>
          
          {/* Hover Overlay with Action Buttons */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
            {projectData.video && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#6867F9] to-[#ff3ebc] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                aria-label={t('projects.actions.playVideo')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="font-medium">{t('projects.actions.video')}</span>
              </button>
            )}
            
            {projectData.live && (
              <a
                href={projectData.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border border-white/20"
              >
                <span>🌐</span>
                <span className="font-medium">{t('projects.actions.live')}</span>
              </a>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-grow p-6">
          {/* Title */}
          <h3 
            id={`project-title-${projectId}`}
            className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight"
          >
            {title}
          </h3>

          {/* Tech Stack */}
          {/* <div className="mb-4">
            <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
              {techStack}
            </p>
            
          </div> */}
          <div className="flex flex-wrap gap-2 mb-4">
                      {techStack.map((tech, idx) => (
                        <SkillCapsule label={tech} key={tech + idx} />
                      ))}
                    </div>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
            {description}
          </p>

          {/* Action Buttons - Visible on mobile, hidden on desktop (shown in overlay) */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-gray-700/50 lg:hidden">
            {projectData.video && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#6867F9] to-[#ff3ebc] text-white text-sm hover:shadow-lg transition-all duration-200 flex-1 justify-center min-w-[120px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                {t('projects.actions.video')}
              </button>
            )}
            
            {projectData.live && (
              <a
                href={projectData.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-200 flex-1 justify-center min-w-[100px] border border-white/20"
              >
                <span>🌐</span>
                {t('projects.actions.live')}
              </a>
            )}
            
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700/50 text-white text-sm hover:bg-gray-600/50 transition-all duration-200 flex-1 justify-center min-w-[100px] border border-gray-600/50"
            >
              <span>💻</span>
              {t('projects.actions.github')}
            </a>
          </div>
        </div>
      </article>

      {/* Video Modal */}
      {projectData.video && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc={projectData.video}
          title={title}
          projectId={projectId}
        />
      )}
    </>
  );
};

export default ProjectCard;