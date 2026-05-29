import { useState } from 'react';
import type { Project } from '../../data/types';
import { VideoModal } from '../ui/VideoModal';
import { Play, ExternalLink } from 'lucide-react'; // or use your own icons

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleExternalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening
    window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div 
        className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`View ${project.title} video preview`}
      >
        {/* Thumbnail Section */}
        <div className="project-card__media">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="project-card__thumbnail"
            loading="lazy"
          />
          
          {/* Play Button Overlay */}
          <div className="project-card__play-overlay">
            <div className="project-card__play-button">
              <Play size={24} fill="currentColor" />
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <span className="project-card__badge">Featured</span>
          )}
        </div>

        {/* Content Section */}
        <div className="project-card__content">
          <span className="project-card__category">{project.category}</span>
          
          <h3 className="project-card__title">{project.title}</h3>
          
          <p className="project-card__description line-clamp-1">{project.description}</p>

          {project.duration && (
            <span className="project-card__duration">{project.duration}</span>
          )}

          {/* Tools & External Link */}
          <div className="project-card__footer">
            <div className="project-card__tools">
              {project.tools.map((tool) => (
                <span key={tool} className="project-card__tool-tag">{tool}</span>
              ))}
            </div>
            
            <button
              className="project-card__external-link"
              onClick={handleExternalClick}
              aria-label={`Open ${project.title} external link`}
              title="Open external link"
            >
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={project.modalVideoUrl}
        title={project.title}
      />
    </>
  );
};