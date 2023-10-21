import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;


export default function MyDataIcon({
  fill = secondary,
  width = '15',
  height = '16',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 15 16`;
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
        d="M10.2812 9.5C12.5938 9.5 14.5 11.4062 14.5 13.7188V14.5C14.5 15.3438 13.8125 16 13 16H2C1.15625 16 0.5 15.3438 0.5 14.5V13.7188C0.5 11.4062 2.375 9.5 4.6875 9.5C5.59375 9.5 6 10 7.5 10C8.96875 10 9.375 9.5 10.2812 9.5ZM13 14.5V13.7188C13 12.2188 11.7812 11 10.2812 11C9.8125 11 9.09375 11.5 7.5 11.5C5.875 11.5 5.15625 11 4.6875 11C3.1875 11 2 12.2188 2 13.7188V14.5H13ZM7.5 9C5 9 3 7 3 4.5C3 2.03125 5 0 7.5 0C9.96875 0 12 2.03125 12 4.5C12 7 9.96875 9 7.5 9ZM7.5 1.5C5.84375 1.5 4.5 2.875 4.5 4.5C4.5 6.15625 5.84375 7.5 7.5 7.5C9.125 7.5 10.5 6.15625 10.5 4.5C10.5 2.875 9.125 1.5 7.5 1.5Z"
        fill={fill}
      />
    </svg>
  );
}
