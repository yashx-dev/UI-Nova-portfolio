import { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const isYouTubeVideo = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string): string => {
    if (url.includes('shorts/')) {
      const shortsId = url.split('shorts/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${shortsId}?autoplay=1&controls=1&rel=0&modestbranding=1`;
    }
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const videoId = urlParams.get('v');
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`;
    }
    const videoId = url.split('/').pop()?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`;
  };

  const handleClose = useCallback(() => {
    // Stop video playback
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
    
    // Restore focus to previously active element
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
    
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Store currently focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Focus trap setup
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && containerRef.current) {
        const focusableElements = containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus the container
    containerRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  // Render modal directly to document.body using Portal
  return createPortal(
    <div 
      className="video-modal" 
      role="dialog" 
      aria-modal="true" 
      aria-label={title}
      ref={containerRef}
      tabIndex={-1}
    >
      {/* Backdrop */}
      <div 
        className="video-modal__backdrop" 
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div className="video-modal__wrapper">
        <div className="video-modal__container">
          {/* Header */}
          <div className="video-modal__header">
            <h3 className="video-modal__title">{title}</h3>
            <button 
              className="video-modal__close"
              onClick={handleClose}
              aria-label="Close modal"
              type="button"
            >
              <X size={20} />
            </button>
          </div>

          {/* Video Content */}
          <div className="video-modal__content">
            {isYouTubeVideo(videoUrl) ? (
              <iframe
                ref={iframeRef}
                src={getYouTubeEmbedUrl(videoUrl)}
                className="video-modal__iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            ) : (
              <video
                ref={videoRef}
                src={videoUrl}
                className="video-modal__video"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};