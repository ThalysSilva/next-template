import React from 'react';

import colors from '@/styles/Theme/colors';

type Props = {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  rotate?: boolean;
  color?: string;
};

const defaultColor = colors.brand.primary; 

export function CleanArrow({ direction = 'bottom', rotate, color = defaultColor }: Props) {
  const rotations = {
    bottom: ['rotate-0', 'rotate-180'],
    right: ['rotate-270', 'rotate-90'],
    left: ['rotate-90', 'rotate-270'],
    top: ['rotate-180', 'rotate-0'],
  };
  
  const [initialDirection, finalDirection] = rotations[direction];
  return (
    <span
      className={`border-r-4 border-r-transparent border-l-4 border-l-transparent border-t-[6px]  transform transition-all ease-linear duration-200 rounded-t-full ${
        rotate ? finalDirection : initialDirection
      }`}
      style={{ borderTopColor: color }}
    />
  );
}
