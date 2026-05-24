import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  as: Component = 'span', 
  className = '' 
}) => {
  return (
    <Component className={`text-grad ${className}`}>
      {children}
    </Component>
  );
};