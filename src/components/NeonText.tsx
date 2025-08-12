import React from 'react';

interface NeonTextProps {
  text: string;
  color?: 'pink' | 'cyan' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
}

const NeonText: React.FC<NeonTextProps> = ({ 
  text, 
  color = 'pink', 
  size = 'xl',
  className = '' 
}) => {
  const colorMap = {
    pink: 'text-pink-500 shadow-pink',
    cyan: 'text-cyan-400 shadow-cyan',
    purple: 'text-purple-500 shadow-purple'
  };

  const sizeMap = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  };

  return (
    <span 
      className={`font-bold ${sizeMap[size]} ${colorMap[color]} neon-text ${className}`}
      style={{
        textShadow: color === 'pink' 
          ? '0 0 5px #ff2d95, 0 0 10px #ff2d95, 0 0 20px #ff2d95'
          : color === 'cyan'
          ? '0 0 5px #0ef, 0 0 10px #0ef, 0 0 20px #0ef'
          : '0 0 5px #bf00ff, 0 0 10px #bf00ff, 0 0 20px #bf00ff'
      }}
    >
      {text}
    </span>
  );
};

export default NeonText;
