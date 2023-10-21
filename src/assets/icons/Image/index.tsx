import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function ImageIcon({ hoverAnimate, width = '17', height = '13' }: CustomIconProps) {
  const viewBox = `0 0 17 13`;
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
        d="M15 12.5C15.8125 12.5 16.5 11.8438 16.5 11V2C16.5 1.1875 15.8125 0.5 15 0.5H2C1.15625 0.5 0.5 1.1875 0.5 2V11C0.5 11.8438 1.15625 12.5 2 12.5H15ZM4 2.25C4.9375 2.25 5.75 3.0625 5.75 4C5.75 4.96875 4.9375 5.75 4 5.75C3.03125 5.75 2.25 4.96875 2.25 4C2.25 3.0625 3.03125 2.25 4 2.25ZM2.5 10.5V9L4.71875 6.78125C4.875 6.625 5.09375 6.625 5.25 6.78125L7 8.5L11.2188 4.28125C11.375 4.125 11.5938 4.125 11.75 4.28125L14.5 7V10.5H2.5Z"
        fill="#006869"
      />
    </svg>
  );
}
