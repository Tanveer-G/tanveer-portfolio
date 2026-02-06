// 'use client';

// import { useEffect, useRef } from 'react';
// import Modal from './index';

// interface VideoModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   videoSrc: string;
//   title?: string;
//   description?: string;
//   autoplay?: boolean;
//   loop?: boolean;
//   controls?: boolean;
// }

// export default function VideoModal({
//   isOpen,
//   onClose,
//   videoSrc,
//   title,
//   description,
//   autoplay = true,
//   loop = false,
//   controls = true,
// }: VideoModalProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   // Handle video play/pause when modal opens/closes
//   useEffect(() => {
//     if (isOpen && videoRef.current) {
//       videoRef.current.currentTime = 0;
//       const playPromise = videoRef.current.play();
//       if (playPromise !== undefined) {
//         playPromise.catch(error => {
//           console.log('Autoplay prevented:', error);
//           // Fallback: let user start the video manually
//         });
//       }
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.pause();
//       }
//     };
//   }, [isOpen]);

//   const handleClose = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//     onClose();
//   };

//   return (
//     <Modal 
//       isOpen={isOpen} 
//       onClose={handleClose}
//       title={title}
//       size="xl"
//       closeOnBackdropClick={true}
//       closeOnEscape={true}
//     >
//       <div className="p-1">
//         {/* Video Container */}
//         <div className="relative bg-black rounded-lg overflow-hidden">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             autoPlay={autoplay}
//             loop={loop}
//             controls={controls}
//             className="w-full h-auto max-h-[70vh] object-contain"
//             poster="/video-poster.jpg" // Optional: Add a poster frame
//             preload="metadata"
//           >
//             Your browser does not support the video tag.
//           </video>

//           {/* Custom Play/Pause Overlay (optional) */}
//           {!controls && (
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
//               <button
//                 onClick={() => {
//                   if (videoRef.current) {
//                     if (videoRef.current.paused) {
//                       videoRef.current.play();
//                     } else {
//                       videoRef.current.pause();
//                     }
//                   }
//                 }}
//                 className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"
//               >
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z"/>
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Description */}
//         {description && (
//           <div className="p-4 bg-gray-50 dark:bg-gray-800">
//             <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
//           </div>
//         )}

//         {/* Video Controls Info */}
//         <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-b-lg">
//           <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
//             Press ESC to close • Click outside to dismiss
//           </p>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// components/ui/VideoModal.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  projectId: string | number;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title, projectId }: VideoModalProps) {
  const t = useTranslations('projects');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      setIsLoading(true);
      setHasError(false);
      videoRef.current.currentTime = 0;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, let user start manually
          setIsLoading(false);
        });
      }
    }

    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`video-modal-title-${projectId}`}
    >
      <div 
        className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 
              id={`video-modal-title-${projectId}`}
              className="text-xl font-bold text-white"
            >
              {title}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{t('projects.demo.watchDemo')}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
            aria-label={t('demo.close')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#6867F9] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">{t('projects.demo.loading')}</p>
              </div>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Failed to load video</p>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              className="w-full h-full object-contain"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-800/50 border-t border-gray-700">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{t('projects.demo.close')}</span>
            <span>Press ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}