import { useButton } from '@/components/Button/hooks/useButton';
import colors from '@/styles/Theme/colors';
import React from 'react';

type Props = {
  isSelected?: boolean;
  label: string | number;
  onClick: () => void;
};

export function ButtonPage({ isSelected = false, label, onClick }: Props) {
  const { primary } = colors.brand;
  const { getAnimation } = useButton();
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? primary : 'transparent',
        color: isSelected ? '#fff' : '#000',
      }}
      className={'flex h-6 w-6 justify-center items-center rounded-[4px] ' + getAnimation()}
    >
      {label.toString()}
    </button>
  );
}
