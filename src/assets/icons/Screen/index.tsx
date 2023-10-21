import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;

export default function ScreenIcon({
  fill = secondary,
  width = '19',
  height = '16',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 19 16`;
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
        d="M17 0H2C1.15625 0 0.5 0.6875 0.5 1.5V11.5C0.5 12.3438 1.15625 13 2 13H8L7.5 14.5H5.25C4.8125 14.5 4.5 14.8438 4.5 15.25C4.5 15.6875 4.8125 16 5.25 16H13.75C14.1562 16 14.5 15.6875 14.5 15.25C14.5 14.8438 14.1562 14.5 13.75 14.5H11.5L11 13H17C17.8125 13 18.5 12.3438 18.5 11.5V1.5C18.5 0.6875 17.8125 0 17 0ZM16.5 11H2.5V2H16.5V11Z"
        fill={fill}
      />
    </svg>
  );
}
