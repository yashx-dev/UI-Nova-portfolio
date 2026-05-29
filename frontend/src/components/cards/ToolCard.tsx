import { SiFigma } from 'react-icons/si';
import type { Tool } from '../../data/types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const getLogoClass = () => {
    switch(tool.name) {
      case 'Adobe After Effects': return 'ae';
      case 'Adobe Premiere Pro': return 'pr';
      case 'Figma': return 'fig';
      case 'Adobe Photoshop': return 'ps';
      default: return '';
    }
  };

  const renderLogo = () => {
    if (tool.name === 'Figma') {
      return (
        <div className={`tool-logo ${getLogoClass()}`}>
          <SiFigma size={32} color="#ffffff" />
        </div>
      );
    }
    
    return (
      <div className={`tool-logo ${getLogoClass()}`}>{tool.logo}</div>
    );
  };

  return (
    <div className="tool-card">
      {renderLogo()}
      <div className="tool-name">{tool.name}</div>
      <div className="tool-sub">{tool.category}</div>
    </div>
  );
};