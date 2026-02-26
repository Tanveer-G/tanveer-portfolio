'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { trackEvent } from '@/lib/analytics';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  projectId: string | number;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  title,
  projectId,
}: Readonly<VideoModalProps>) {
  const t = useTranslations('projects');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 🔥 REAL watch-time tracking
  const playStartRef = useRef<number | null>(null);
  const watchedMsRef = useRef<number>(0);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const progressFired = useRef<Record<number, boolean>>({});

  const tryFireProgress = useCallback(
    (current: number, duration: number) => {
      if (!duration || duration <= 0) return;

      const pct = Math.floor((current / duration) * 100);
      const thresholds = [25, 50, 75, 100];

      thresholds.forEach((thr) => {
        if (pct >= thr && !progressFired.current[thr]) {
          progressFired.current[thr] = true;

          trackEvent('video_progress', {
            projectId: String(projectId),
            threshold: thr,
            percent: pct,
            currentTime: Math.round(current),
            duration: Math.round(duration),
          });
        }
      });
    },
    [projectId]
  );

  // Modal open
  useEffect(() => {
    if (!isOpen) return;

    setIsLoading(true);
    setHasError(false);
    progressFired.current = {};
    watchedMsRef.current = 0;
    playStartRef.current = null;

    trackEvent('video_open', {
      projectId: String(projectId),
      title,
    });

    const el = videoRef.current;
    if (el) {
      el.currentTime = 0;
      const playPromise = el.play();
      playPromise?.catch(() => setIsLoading(false));
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, projectId, title]);

  const handleLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);

    trackEvent('video_error', {
      projectId: String(projectId),
    });
  }, [projectId]);

  // Video listeners
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onPlay = () => {
      // Start measuring
      playStartRef.current = Date.now();

      trackEvent('video_play', {
        projectId: String(projectId),
        currentTime: Math.round(el.currentTime),
        duration: Math.round(el.duration),
      });
    };

    const onPause = () => {
      // Accumulate watched time
      if (playStartRef.current) {
        watchedMsRef.current += Date.now() - playStartRef.current;
        playStartRef.current = null;
      }

      trackEvent('video_pause', {
        projectId: String(projectId),
        currentTime: Math.round(el.currentTime),
        duration: Math.round(el.duration),
      });
    };

    const onTime = () => {
      tryFireProgress(el.currentTime, el.duration);
    };

    const onEnded = () => {
      // Final accumulate if still playing
      if (playStartRef.current) {
        watchedMsRef.current += Date.now() - playStartRef.current;
        playStartRef.current = null;
      }

      tryFireProgress(el.duration, el.duration);

      trackEvent('video_complete', {
        projectId: String(projectId),
        duration: Math.round(el.duration),
        watchedMs: watchedMsRef.current,
      });
    };

    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', onEnded);

    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('ended', onEnded);
    };
  }, [projectId, tryFireProgress]);

  const handleClose = useCallback(() => {
    const el = videoRef.current;

    if (el) {
      // If still playing, accumulate before closing
      if (playStartRef.current) {
        watchedMsRef.current += Date.now() - playStartRef.current;
        playStartRef.current = null;
      }

      el.pause();

      const watchedPct = el.duration
        ? Math.round((el.currentTime / el.duration) * 100)
        : 0;

      trackEvent('video_close', {
        projectId: String(projectId),
        watchedPct,
        currentTime: Math.round(el.currentTime),
        duration: Math.round(el.duration),
        watchedMs: watchedMsRef.current,
      });
    } else {
      trackEvent('video_close', {
        projectId: String(projectId),
      });
    }

    onClose();
  }, [onClose, projectId]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`video-modal-title-${projectId}`}
    >
      <div
        className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-700">
          <div>
            <h2
              id={`video-modal-title-${projectId}`}
              className="text-lg md:text-xl font-bold text-white"
            >
              {title}
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mt-1">
              {t('projects.demo.watchDemo')}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg"
            aria-label={t('projects.demo.close')}
          >
            ✕
          </button>
        </div>

        {/* Video */}
        <div className="relative bg-black aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div>
                <div className="w-12 h-12 border-4 border-[#6867F9] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-400 text-center">
                  {t('projects.demo.loading')}
                </p>
              </div>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <p className="text-gray-400">
                {t('projects.demo.error')}
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              className="w-full h-full object-contain"
              onLoadedData={handleLoaded}
              onError={handleError}
              preload="metadata"
            />
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-800/50 border-t border-gray-700 text-sm text-gray-400 flex justify-between">
          <span>{t('projects.demo.close')}</span>
          <span>{t('projects.demo.pressEsc')}</span>
        </div>
      </div>
    </div>
  );
}