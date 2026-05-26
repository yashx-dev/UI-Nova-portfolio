import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillCard } from '../cards/SkillCard';
import { skills } from '../../data/skill';

export const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [barWidths, setBarWidths] = useState<string[]>(
    skills.map(() => '0%')
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    skills.forEach((skill, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setBarWidths((prev) => {
                  const updated = [...prev];
                  updated[index] = `${skill.level}%`;

                  return updated;
                });
              }, 300);

              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      const currentRef = skillRefs.current[index];

      if (currentRef) {
        observer.observe(currentRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div
      className="section-wrap"
      id="skills"
      style={{ textAlign: 'center' }}
    >
      <SectionHeader
        eyebrow="Expertise"
        title="What I do Best"
        noLine
        centered
        delay="delay-1"
      />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <ScrollReveal
            key={skill.id}
            delay={`delay-${(index % 3) + 1}` as 'delay-1' | 'delay-2' | 'delay-3'}
          >
            <div
              ref={(el) => {
                skillRefs.current[index] = el;
              }}
            >
              <SkillCard
                skill={skill}
                barWidth={barWidths[index]}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};