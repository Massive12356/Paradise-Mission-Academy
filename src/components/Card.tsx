import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';

  return (
    <div 
      className={`bg-white rounded-xl shadow-md p-6 ${hoverClass} ${className}`}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      {children}
    </div>
  );
}
