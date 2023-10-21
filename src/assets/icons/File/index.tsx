import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.borderColor;

export default function FileIcon({
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
        d="M9.5 7.75C9.5 7.5625 9.3125 7.375 9.125 7.375H3.875C3.65625 7.375 3.5 7.5625 3.5 7.75V8.625C3.5 8.84375 3.65625 9 3.875 9H9.125C9.3125 9 9.5 8.84375 9.5 8.625V7.75ZM9.125 10H3.875C3.65625 10 3.5 10.1875 3.5 10.375V11.25C3.5 11.4688 3.65625 11.625 3.875 11.625H9.125C9.3125 11.625 9.5 11.4688 9.5 11.25V10.375C9.5 10.1875 9.3125 10 9.125 10ZM12.5 4.125C12.5 3.75 12.3125 3.34375 12.0312 3.0625L9.4375 0.46875C9.15625 0.1875 8.75 0 8.375 0H2C1.15625 0 0.5 0.6875 0.5 1.5V14.5C0.5 15.3438 1.15625 16 2 16H11C11.8125 16 12.5 15.3438 12.5 14.5V4.125ZM8.5 1.625L10.875 4H8.5V1.625ZM11 14.5H2V1.5H7V4.75C7 5.1875 7.3125 5.5 7.75 5.5H11V14.5Z"
        fill={fill}
      />
    </svg>
  );
}
