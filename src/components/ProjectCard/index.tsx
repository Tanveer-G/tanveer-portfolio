'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ProjectId, PROJECTS_REGISTRY } from '@/src/constants/projects';
import VideoModal from '@/src/components/modals/VideoModal';
import SkillCapsule from '../common/SkillCapsule';
import { trackEvent } from '@/lib/analytics';

interface ProjectCardProps {
  projectId: ProjectId;
}
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk8jkjX4hw3Uu9gU9gQAAA";

const IMPRESSION_VISIBLE_MS = 400;
const IMPRESSION_THRESHOLD = 0.5; // 50% visible

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId }) => {
  const t = useTranslations('projects');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const impressionTimerRef = useRef<number | null>(null);
  const impressionFiredRef = useRef(false);

  const projectData = PROJECTS_REGISTRY[projectId];
  const { image, techStack = [], video, live, github } = projectData;

  const title = t(`projects.projectsList.${projectId}.title`);
  const description = t(`projects.projectsList.${projectId}.description`);

  // Build tracked url (keeps it safe)
  const buildTrackedUrl = useCallback((url: string, type: string) => {
    try {
      const u = new URL(url);
      u.searchParams.set('utm_source', 'portfolio');
      u.searchParams.set('utm_medium', 'project_card');
      u.searchParams.set('utm_project', projectId);
      u.searchParams.set('utm_type', type);
      return u.toString();
    } catch {
      return url;
    }
  }, [projectId]);

  // Impression observer
  useEffect(() => {
    const node = cardRef.current;
    if (!node || impressionFiredRef.current) return;

    let visibleStart = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleStart = performance.now();
          impressionTimerRef.current = window.setTimeout(() => {
            if (!impressionFiredRef.current) {
              trackEvent('project_impression', { projectId, visibleForMs: IMPRESSION_VISIBLE_MS });
              impressionFiredRef.current = true;
            }
          }, IMPRESSION_VISIBLE_MS);
        } else {
          if (impressionTimerRef.current) {
            clearTimeout(impressionTimerRef.current);
            impressionTimerRef.current = null;
          }
        }
      });
    }, { threshold: IMPRESSION_THRESHOLD });

    io.observe(node);
    return () => {
      io.disconnect();
      if (impressionTimerRef.current) clearTimeout(impressionTimerRef.current);
    };
  }, [projectId]);

  // interaction tracking
  const handleInteraction = useCallback((action: 'video' | 'live' | 'github', href?: string) => {
    trackEvent('project_interaction', { projectId, action, location: 'project_card', href });
  }, [projectId]);

  const openVideo = useCallback(() => {
    handleInteraction('video');
    setIsVideoModalOpen(true);
  }, [handleInteraction]);

  const openExternal = useCallback((rawHref: string, type: 'live' | 'github') => {
    handleInteraction(type, rawHref);
    const href = buildTrackedUrl(rawHref, type);
    // small delay so Vercel SDK can send event
    setTimeout(() => window.open(href, '_blank', 'noopener'), 120);
  }, [buildTrackedUrl, handleInteraction]);

  return (
    <>
      <article
        ref={cardRef}
        aria-labelledby={`project-title-${projectId}`}
        className="group flex flex-col rounded-2xl bg-[#051622]/60 backdrop-blur-sm border border-gray-700/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-gray-500/30 hover:bg-[#051622]/70"
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            {...(blurDataURL ? { placeholder: 'blur' as const, blurDataURL } : {})}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#051622] via-transparent to-transparent opacity-80" />

          {/* Overlay - visible on hover (desktop) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 px-4">
            <div className="flex gap-3 flex-wrap justify-center">
              {video && (
                <button
                  onClick={openVideo}
                  className="flex items-center gap-2 px-3 py-2 min-w-[88px] max-w-[160px] text-sm leading-snug whitespace-normal text-center bg-gradient-to-r from-[#6867F9] to-[#ff3ebc] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  <span className="truncate">{t('projects.actions.video')}</span>
                </button>
              )}

              {live && (
                <button
                  onClick={() => openExternal(live, 'live')}
                  className="flex items-center gap-2 px-3 py-2 min-w-[88px] max-w-[160px] text-sm leading-snug whitespace-normal text-center bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transform hover:scale-105 transition border border-white/20"
                >
                  <span>🌐</span>
                  <span className="truncate">{t('projects.actions.live')}</span>
                </button>
              )}

              {github && (
                <button
                  onClick={() => openExternal(github, 'github')}
                  className="flex items-center gap-2 px-3 py-2 min-w-[88px] max-w-[160px] text-sm leading-snug whitespace-normal text-center bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transform hover:scale-105 transition border border-gray-600/50"
                >
                  <span>💻</span>
                  <span className="truncate">{t('projects.actions.github')}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <h3 id={`project-title-${projectId}`} className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, idx) => (
              <SkillCapsule label={tech} key={`${tech}-${idx}`} />
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
            {description}
          </p>

          {/* Mobile / small screens: buttons visible here */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-gray-700/50 lg:hidden">
            {video && (
              <button
                onClick={openVideo}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#6867F9] to-[#ff3ebc] text-white text-sm flex-1 min-w-[100px] whitespace-normal"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                <span className="leading-tight">{t('projects.actions.video')}</span>
              </button>
            )}

            {live && (
              <button
                onClick={() => openExternal(live, 'live')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white text-sm flex-1 min-w-[100px] whitespace-normal border border-white/20"
              >
                <span>🌐</span>
                <span className="leading-tight">{t('projects.actions.live')}</span>
              </button>
            )}

            {github && (
              <button
                onClick={() => openExternal(github, 'github')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700/50 text-white text-sm flex-1 min-w-[100px] whitespace-normal border border-gray-600/50 justify-center"
              >
                <span>💻</span>
                <span className="leading-tight">{t('projects.actions.github')}</span>
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Video Modal */}
      {video && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc={video}
          title={title}
          projectId={projectId}
        />
      )}
    </>
  );
};

export default ProjectCard;