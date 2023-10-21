import React from 'react';

import colors from '@/styles/Theme/colors';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  color?: string;
  size?: number;
};

const { primary } = colors.text;

export function Dot({ className = '', color = primary, size = 4 }: Props) {
  return (
    <span
      style={{
        backgroundColor: color,
        height: size,
        width: size,
      }}
      className={twMerge('rounded-full ' + className)}
    />
  );
}
