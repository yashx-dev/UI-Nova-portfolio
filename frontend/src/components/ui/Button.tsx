import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '' 
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
};