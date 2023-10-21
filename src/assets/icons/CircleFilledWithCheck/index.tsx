import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function CircleFilledWithCheckIcon({
  hoverAnimate,
  height,
  width,
  fill = '#0AA836',
}: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '16'}
      width={width ? width : '16'}
      viewBox={'0 0 16 16'}
      fill={'none'}
    >
      <path
        d="M15.75 8C15.75 12.2813 12.25 15.75 8 15.75C3.71875 15.75 0.249998 12.2812 0.249999 8C0.25 3.75 3.71875 0.25 8 0.250001C12.25 0.250002 15.75 3.75 15.75 8ZM7.09375 12.125L12.8437 6.375C13.0312 6.1875 13.0312 5.84375 12.8437 5.65625L12.125 4.96875C11.9375 4.75 11.625 4.75 11.4375 4.96875L6.75 9.65625L4.53125 7.46875C4.34375 7.25 4.03125 7.25 3.84375 7.46875L3.125 8.15625C2.9375 8.34375 2.9375 8.6875 3.125 8.875L6.375 12.125C6.5625 12.3125 6.90625 12.3125 7.09375 12.125Z"
        fill={fill}
      />
    </svg>
  );
}
