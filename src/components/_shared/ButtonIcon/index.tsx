'use client';

import React from 'react';
import { useButton } from '../Button/hooks/useButton';

type Props = {
  children: React.ReactNode;
  bgTransparent?: boolean;
  onClick: () => void;
};

export function ButtonIcon({ children, onClick, bgTransparent }: Props) {
  const { getAnimation } = useButton();
  return (
    <button
      className={`w-12 h-12 flex justify-center items-center  rounded-[4px] ${
        bgTransparent ? 'bg-transparent' : 'bg-primary-400'
      } ${getAnimation()}`}
      onClick={onClick}
      type={'button'}
    >
      {children}
    </button>
  );
}
