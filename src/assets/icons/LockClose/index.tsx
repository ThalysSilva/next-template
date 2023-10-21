import React from 'react';
import { CustomIconProps } from '@/utils/types';
import colors from '@/styles/Theme/colors';

const { primary } = colors.brand;

export default function LockCloseIcon({
  fill = primary,
  width = '12',
  height = '13',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 12 13`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path
        d="M2.625 5V3.875C2.625 2.02344 4.125 0.5 6 0.5C7.85156 0.5 9.375 2.02344 9.375 3.875V5H9.75C10.5703 5 11.25 5.67969 11.25 6.5V11C11.25 11.8438 10.5703 12.5 9.75 12.5H2.25C1.40625 12.5 0.75 11.8438 0.75 11V6.5C0.75 5.67969 1.40625 5 2.25 5H2.625ZM4.125 5H7.875V3.875C7.875 2.84375 7.03125 2 6 2C4.94531 2 4.125 2.84375 4.125 3.875V5Z"
        fill={fill}
      />
    </svg>
  );
}
