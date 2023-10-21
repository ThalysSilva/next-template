import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;

export default function ActivityHistoryIcon({
  fill = secondary,
  width = '17',
  height = '16',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 17 16`;
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
        d="M16.25 8C16.25 12.2812 12.75 15.75 8.5 15.75C6.5 15.7812 4.65625 15 3.28125 13.7812C3.125 13.625 3.125 13.375 3.28125 13.2188L3.8125 12.6875C3.9375 12.5625 4.1875 12.5625 4.3125 12.6875C5.4375 13.6562 6.875 14.25 8.5 14.25C11.9375 14.25 14.75 11.4688 14.75 8C14.75 4.5625 11.9375 1.75 8.5 1.75C6.75 1.75 5.1875 2.46875 4.0625 3.625L5.59375 5.125C5.8125 5.34375 5.65625 5.75 5.3125 5.75H1.3125C1.09375 5.75 0.9375 5.59375 0.9375 5.375V1.4375C0.9375 1.09375 1.34375 0.9375 1.5625 1.15625L2.96875 2.5625C4.375 1.15625 6.34375 0.25 8.5 0.25C12.75 0.25 16.2188 3.71875 16.25 8ZM11 10.8125C10.9062 11 10.6562 11.0312 10.5 10.9062L7.75 8.90625V3.625C7.75 3.4375 7.90625 3.25 8.125 3.25H8.875C9.0625 3.25 9.25 3.4375 9.25 3.625V8.125L11.375 9.6875C11.5312 9.8125 11.5625 10.0312 11.4688 10.2188L11 10.8125Z"
        fill={fill}
      />
    </svg>
  );
}
