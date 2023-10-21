import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function Logout({
  fill = '#FCAF17',
  width = '17',
  height = '12',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 17 12`;
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
        d="M3.5 0C1.84375 0 0.5 1.34375 0.5 3V9C0.5 10.6562 1.84375 12 3.5 12H6.125C6.3125 12 6.5 11.8438 6.5 11.625V10.875C6.5 10.6875 6.3125 10.5 6.125 10.5H3.5C2.65625 10.5 2 9.84375 2 9V3C2 2.1875 2.65625 1.5 3.5 1.5H6.125C6.3125 1.5 6.5 1.34375 6.5 1.125V0.375C6.5 0.1875 6.3125 0 6.125 0H3.5ZM10.7188 0.625L10.0938 1.25C9.9375 1.375 9.9375 1.625 10.0938 1.78125L13.625 5.1875H5.875C5.65625 5.1875 5.5 5.375 5.5 5.5625V6.4375C5.5 6.65625 5.65625 6.8125 5.875 6.8125H13.625L10.0938 10.25C9.9375 10.4062 9.9375 10.6562 10.0938 10.7812L10.7188 11.4062C10.8438 11.5625 11.0938 11.5625 11.25 11.4062L16.375 6.28125C16.5312 6.125 16.5312 5.90625 16.375 5.75L11.25 0.625C11.0938 0.46875 10.8438 0.46875 10.7188 0.625Z"
        fill={fill}
      />
    </svg>
  );
}
