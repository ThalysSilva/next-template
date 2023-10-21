import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function CameraIcon({ hoverAnimate, width = '16', height = '15', fill='#006869' }: CustomIconProps) {
  const viewBox = `0 0 16 15`;
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
        d="M16 4C16 3.1875 15.3125 2.5 14.5 2.5H11.75L11.3438 1.5C11.125 0.90625 10.5625 0.5 9.9375 0.5H6.03125C5.40625 0.5 4.84375 0.90625 4.625 1.5L4.25 2.5H1.5C0.65625 2.5 0 3.1875 0 4V13C0 13.8438 0.65625 14.5 1.5 14.5H14.5C15.3125 14.5 16 13.8438 16 13V4ZM11.75 8.5C11.75 10.5938 10.0625 12.25 8 12.25C5.90625 12.25 4.25 10.5938 4.25 8.5C4.25 6.4375 5.90625 4.75 8 4.75C10.0625 4.75 11.75 6.4375 11.75 8.5ZM10.75 8.5C10.75 7 9.5 5.75 8 5.75C6.46875 5.75 5.25 7 5.25 8.5C5.25 10.0312 6.46875 11.25 8 11.25C9.5 11.25 10.75 10.0312 10.75 8.5Z"
        fill={fill}
      />
    </svg>
  );
}
