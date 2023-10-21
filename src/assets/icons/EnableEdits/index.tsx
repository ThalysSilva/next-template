import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function EnableEdits({
  fill = '#006869',
  width = '11',
  height = '13',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 11 13`;
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
        d="M1.875 5V3.875C1.875 2.02344 3.375 0.5 5.25 0.5C7.10156 0.5 8.625 2.02344 8.625 3.875V5H9C9.82031 5 10.5 5.67969 10.5 6.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V6.5C0 5.67969 0.65625 5 1.5 5H1.875ZM3.375 5H7.125V3.875C7.125 2.84375 6.28125 2 5.25 2C4.19531 2 3.375 2.84375 3.375 3.875V5Z"
        fill={fill}
      />
    </svg>
  );
}
