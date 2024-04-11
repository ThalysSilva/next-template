import ArrowLeftIcon from '@/assets/icons/ArrowLeft';
import { useButton } from '@/components/Button/hooks/useButton';
import colors from '@/styles/Theme/colors';
import React from 'react';

type Props = {
  onClick: () => void;
  direction?: 'left' | 'right';
};

export function ButtonArrow({ direction, onClick }: Props) {
  const { primary } = colors.brand;
  const { getAnimation } = useButton();
  return (
    <button
      onClick={onClick}
      className={`flex h-10 w-10 justify-center items-center rounded-md bg-borderColor-light ${
        direction === 'right' ? 'rotate-180' : ''
      } ${getAnimation()}`}
    >
      <ArrowLeftIcon fill={primary} />
    </button>
  );
}
