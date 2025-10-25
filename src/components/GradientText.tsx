import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1'],
  animationSpeed = 5,
  showBorder = false
}: GradientTextProps) {
  // Generate CSS variables for gradient colors
  const gradientVars = colors.reduce((acc, color, index) => ({
    ...acc,
    [`--gradient-${index}`]: color
  }), {});

  const gradientStyle = {
    ...gradientVars,
    '--gradient-colors': colors.join(', '),
    '--animation-duration': `${animationSpeed}s`,
  } as React.CSSProperties;

  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        ...gradientStyle,
        backgroundImage: 'linear-gradient(to right, var(--gradient-colors))',
        backgroundSize: '300% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animation: 'gradient var(--animation-duration) ease infinite',
      }}
    >
      {children}
    </span>
  );
}
