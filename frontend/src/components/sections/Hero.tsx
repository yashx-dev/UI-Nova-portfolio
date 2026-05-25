import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedBackground } from '../animations/AnimationBackground';
import { stats } from '../../data/data';
import { StatCard } from '../cards/StatCard';

export const Hero = () => {
  return (
    <section id="hero">
      <AnimatedBackground />

      <ScrollReveal delay="delay-1">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Projects
        </div>
      </ScrollReveal>

      <h1 className="hero-title">
        <span className="line-glow">AMAN</span>
        <span className="line-accent">RAWAT</span>
      </h1>

      <ScrollReveal delay="delay-2">
        <p className="hero-subtitle">
          Video Editor & Motion Designer crafting cinematic visuals, Apple UI–style edits, 
          and SaaS animations that move people.
        </p>
      </ScrollReveal>

      <ScrollReveal delay="delay-3">
        <div className="hero-ctas">
          <Button href="#projects" variant="primary">View My Work</Button>
          <Button href="#contact" variant="ghost">Let's Talk →</Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay="delay-4">
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              showDivider={index < stats.length - 1}
            />
          ))}
        </div>
      </ScrollReveal>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};