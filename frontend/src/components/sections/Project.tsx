import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';
import { ProjectCard } from '../cards/ProjectCard';
import { projects } from '../../data/project';

export const Projects = () => {
  return (
    <div className="section-wrap" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-eyebrow reveal">Portfolio</div>
          <h2 className="section-title reveal delay-1">Selected Work</h2>
        </div>
        <Button href="#contact" variant="ghost" className="reveal delay-2">
          See All Projects →
        </Button>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ScrollReveal 
            key={project.id} 
            delay={index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : 'delay-1'}
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};