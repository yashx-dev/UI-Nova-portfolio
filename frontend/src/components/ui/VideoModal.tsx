import { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, AlertTriangle } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

// Separate the video content into its own component to use key-based remounting
const VideoContent = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeError, setIframeError] = useState(false);

  // Detect if URL is YouTube
  const isYouTubeVideo = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return (
        urlObj.hostname.includes('youtube.com') ||
        urlObj.hostname.includes('youtu.be')
      );
    } catch {
      return url.includes('youtube.com') || url.includes('youtu.be');
    }
  };

  // Extract YouTube Video ID from various URL formats
  const extractYouTubeId = (url: string): string | null => {
    try {
      if (url.includes('youtu.be/')) {
        const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
      }

      if (url.includes('youtube.com/shorts/')) {
        const match = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
      }

      if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url);
        return urlObj.searchParams.get('v');
      }

      if (url.includes('youtube.com/embed/')) {
        const match = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
      }

      if (url.includes('youtube.com/v/')) {
        const match = url.match(/\/v\/([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
      }

      return null;
    } catch {
      return null;
    }
  };

  // Build proper YouTube embed URL with mobile-compatible parameters
  const getYouTubeEmbedUrl = (url: string): string | null => {
    const videoId = extractYouTubeId(url);
    
    if (!videoId) return null;

    const params = new URLSearchParams({
      autoplay: '1',
      mute: '0',
      controls: '1',
      rel: '0',
      modestbranding: '1',
      showinfo: '0',
      enablejsapi: '1',
      origin: window.location.origin,
      playsinline: '1',
      fs: '1',
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  // Get original YouTube watch URL for fallback
  const getYouTubeWatchUrl = (url: string): string | null => {
    const videoId = extractYouTubeId(url);
    return videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  const isYouTube = isYouTubeVideo(videoUrl);
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoUrl) : null;
  const watchUrl = isYouTube ? getYouTubeWatchUrl(videoUrl) : null;

  // Render YouTube embed
  if (isYouTube && !iframeError) {
    return (
      <div className="video-modal__content">
        <iframe
          ref={iframeRef}
          src={embedUrl!}
          className="video-modal__iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
          onError={handleIframeError}
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
        />
        {watchUrl && (
          <div className="video-modal__fallback">
            <button
              className="video-modal__fallback-button"
              onClick={() => window.open(watchUrl, '_blank', 'noopener,noreferrer')}
              aria-label="Open on YouTube"
            >
              <ExternalLink size={16} />
              Open on YouTube
            </button>
          </div>
        )}
      </div>
    );
  }

  // Render error state for YouTube
  if (iframeError) {
    return (
      <div className="video-modal__content">
        <div className="video-modal__error">
          <AlertTriangle size={48} className="video-modal__error-icon" />
          <p className="video-modal__error-text">
            Unable to load video
          </p>
          {watchUrl && (
            <button
              className="video-modal__error-button"
              onClick={() => window.open(watchUrl, '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink size={16} />
              Watch on YouTube
            </button>
          )}
        </div>
      </div>
    );
  }

  // Render local video
  return (
    <div className="video-modal__content">
      <video
        ref={videoRef}
        src={videoUrl}
        className="video-modal__video"
        controls
        autoPlay
        playsInline
        preload="metadata"
      >
        <p>
          Your browser doesn't support HTML video. 
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            Download the video
          </a>
        </p>
      </video>
    </div>
  );
};

export const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    // Restore focus
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

    // Handle escape key and focus trap
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
    containerRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

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

          {/* 
            Key-based remounting: 
            - Resets all internal state (including iframeError) 
            - Ensures clean state when video URL changes
            - No need for manual state reset in effects
          */}
          <VideoContent 
            key={videoUrl} 
            videoUrl={videoUrl} 
            title={title} 
          />
        </div>
      </div>
    </div>,
    document.body
  );
};