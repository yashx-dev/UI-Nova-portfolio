import { useState, useRef } from 'react';
import type { Project } from '../../data/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getAspectClass = () => {
    switch(project.aspectRatio) {
      case '9:16': return 'aspect-9-16';
      case '1:1': return 'aspect-1-1';
      case '4:3': return 'aspect-4-3';
      case '21:9': return 'aspect-21-9';
      default: return '';
    }
  };

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div 
        className={`project-thumb relative cursor-pointer group ${getAspectClass()}`}
        data-aspect={project.aspectRatio || '16:9'}
      >
        <video
          ref={videoRef}
          src={project.videoUrl}
          className="absolute inset-0 w-full h-full object-cover"
          poster={project.thumbnailUrl}
          onEnded={() => setIsPlaying(false)}
        />
        
        <div className="thumb-grid"></div>
        <div className="thumb-glow tg1"></div>
        <div className="thumb-glow tg2"></div>
        
        <div className="play-btn z-10 relative" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </div>
        
        {project.featured && (
          <span className="project-label z-10">{project.category}</span>
        )}
      </div>
      
      <div className="project-info">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        {project.duration && (
          <div className="text-sm text-gray-400 mb-4">
            Duration: {project.duration}
          </div>
        )}
        
        <div className="project-meta">
          <div className="project-tools">
            {project.tools.map((tool) => (
              <span key={tool} className="tool-pill">{tool}</span>
            ))}
          </div>
          <div className="project-arrow">→</div>
        </div>
      </div>
    </div>
  );
};