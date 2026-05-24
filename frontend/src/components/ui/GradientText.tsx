interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return <span className={`text-grad ${className}`}>{children}</span>;
};