import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function ArrowTop({
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
      <path d="M0.21875 7.75C0.0625 7.625 0.0625 7.375 0.21875 7.21875L6.75 0.6875C6.90625 0.53125 7.125 0.53125 7.28125 0.6875L13.8125 7.21875C13.9688 7.375 13.9688 7.625 13.8125 7.75L13.2188 8.375C13.0625 8.53125 12.8125 8.53125 12.6875 8.375L7 2.71875L1.34375 8.375C1.21875 8.53125 0.96875 8.53125 0.8125 8.375L0.21875 7.75Z" fill={fill}/>
    </svg>

  );
}
