import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function ArrowDown({
  fill = '#18252F',
  width = '14',
  height = '9',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 14 9`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M13.7812 1.25C13.9375 1.375 13.9375 1.625 13.7812 1.78125L7.25 8.3125C7.09375 8.46875 6.875 8.46875 6.71875 8.3125L0.1875 1.78125C0.03125 1.625 0.03125 1.375 0.1875 1.25L0.78125 0.625C0.9375 0.46875 1.1875 0.46875 1.3125 0.625L7 6.28125L12.6562 0.625C12.7812 0.46875 13.0312 0.46875 13.1875 0.625L13.7812 1.25Z" fill={fill}/>
    </svg>
  );
}
