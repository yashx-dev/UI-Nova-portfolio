import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';
import { ProjectCard } from '../cards/ProjectCard';
import { projects } from '../../data/project';

export const Projects = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="section-wrap" id="projects">
      <div className="projects-header">
        <div>
          <ScrollReveal delay="delay-1">
            <div className="section-eyebrow">Portfolio</div>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <h2 className="section-title">Selected Work</h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay="delay-2">
          <Button onClick={scrollToContact} variant="ghost">
            See All Projects →
          </Button>
        </ScrollReveal>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ScrollReveal 
            key={project.id} 
            delay={index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : index === 2 ? 'delay-3' : 'delay-4'}
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};