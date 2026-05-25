import type { Skill } from '../../data/types';

interface SkillCardProps {
  skill: Skill;
  barWidth: string;
}

export const SkillCard = ({ skill, barWidth }: SkillCardProps) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-desc">{skill.description}</div>
      <div className="skill-bar-wrap">
        <div className="skill-bar" style={{ width: barWidth }} />
      </div>
    </div>
  );
};