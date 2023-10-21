import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function Checked({
  fill = '#006869',
  width = '14',
  height = '14',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 14 14`;
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
        d="M12.5 14H1.5C0.65625 14 0 13.3438 0 12.5V1.5C0 0.6875 0.65625 0 1.5 0H12.5C13.3125 0 14 0.6875 14 1.5V12.5C14 13.3438 13.3125 14 12.5 14ZM6.09375 10.9375L11.8438 5.1875C12.0312 5 12.0312 4.6875 11.8438 4.5L11.125 3.78125C10.9375 3.59375 10.625 3.59375 10.4375 3.78125L5.75 8.46875L3.53125 6.28125C3.34375 6.09375 3.03125 6.09375 2.84375 6.28125L2.125 7C1.9375 7.1875 1.9375 7.5 2.125 7.6875L5.375 10.9375C5.5625 11.1562 5.90625 11.1562 6.09375 10.9375Z"
        fill={fill}
      />
    </svg>
  );
}
