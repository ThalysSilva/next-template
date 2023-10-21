import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function EnableEdits({
  fill = '#006869',
  width = '15',
  height = '13',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 15 13`;
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
        d="M9 5H9.75C10.5703 5 11.25 5.67969 11.25 6.5V11C11.25 11.8438 10.5703 12.5 9.75 12.5H2.25C1.40625 12.5 0.75 11.8438 0.75 11V6.5C0.75 5.67969 1.40625 5 2.25 5H7.5V3.875C7.5 2.02344 9 0.5 10.875 0.5C12.7266 0.5 14.25 2.02344 14.25 3.875V5C14.25 5.42188 13.8984 5.75 13.5 5.75C13.0781 5.75 12.75 5.42188 12.75 5V3.875C12.75 2.84375 11.9062 2 10.875 2C9.82031 2 9 2.84375 9 3.875V5Z"
        fill={fill}
      />
    </svg>
  );
}
