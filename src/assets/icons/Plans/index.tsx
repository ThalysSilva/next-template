import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;

export default function PlansIcon({
  fill = secondary,
  width = '13',
  height = '16',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 13 16`;
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
        d="M9.5 7.75V8.625C9.5 8.84375 9.3125 9 9.125 9H3.875C3.65625 9 3.5 8.84375 3.5 8.625V7.75C3.5 7.5625 3.65625 7.375 3.875 7.375H9.125C9.3125 7.375 9.5 7.5625 9.5 7.75ZM9.125 10C9.3125 10 9.5 10.1875 9.5 10.375V11.25C9.5 11.4688 9.3125 11.625 9.125 11.625H3.875C3.65625 11.625 3.5 11.4688 3.5 11.25V10.375C3.5 10.1875 3.65625 10 3.875 10H9.125ZM12.5 4.125V14.5C12.5 15.3438 11.8125 16 11 16H2C1.15625 16 0.5 15.3438 0.5 14.5V1.5C0.5 0.6875 1.15625 0 2 0H8.375C8.75 0 9.15625 0.1875 9.4375 0.46875L12.0312 3.0625C12.3125 3.34375 12.5 3.75 12.5 4.125ZM8.5 1.625V4H10.875L8.5 1.625ZM11 14.5V5.5H7.75C7.3125 5.5 7 5.1875 7 4.75V1.5H2V14.5H11Z"
        fill={fill}
      />
    </svg>
  );
}
