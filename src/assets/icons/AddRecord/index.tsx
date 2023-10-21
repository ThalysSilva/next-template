import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function AddRecord({
  fill = '#646981',
  width = '11',
  height = '11',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 11 11`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >

      <path d="M10.3125 4.875C10.5312 4.875 10.75 5.09375 10.75 5.3125V6.1875C10.75 6.43359 10.5312 6.625 10.3125 6.625H6.375V10.5625C6.375 10.8086 6.15625 11 5.9375 11H5.0625C4.81641 11 4.625 10.8086 4.625 10.5625V6.625H0.6875C0.441406 6.625 0.25 6.43359 0.25 6.1875V5.3125C0.25 5.09375 0.441406 4.875 0.6875 4.875H4.625V0.9375C4.625 0.71875 4.81641 0.5 5.0625 0.5H5.9375C6.15625 0.5 6.375 0.71875 6.375 0.9375V4.875H10.3125Z" fill={fill}/>
    </svg>

  );
}
