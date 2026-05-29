import { 
  FiEdit3, FiLayers, FiMonitor, FiBox, 
  FiFilm, FiHexagon, FiVolume2 
} from 'react-icons/fi';
import type { Skill } from '../../data/types';

interface SkillCardProps {
  skill: Skill;
  barWidth: string;
}

// Map icon names to components
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiEdit3,
  FiLayers,
  FiMonitor,
  FiBox,
  FiFilm,
  FiHexagon,
  FiVolume2,
};

export const SkillCard = ({ skill, barWidth }: SkillCardProps) => {
  const IconComponent = iconMap[skill.icon];

  return (
    <div className="skill-card">
      <div className="skill-icon">
        {IconComponent ? (
          <IconComponent size={24} />
        ) : (
          <span className="skill-icon__fallback">{skill.icon}</span>
        )}
      </div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-desc">{skill.description}</div>
      <div className="skill-bar-wrap">
        <div className="skill-bar" style={{ width: barWidth }} />
      </div>
    </div>
  );
};