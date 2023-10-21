import React from 'react';

import { CustomIconProps } from '@/utils/types';
import colors from '@/styles/Theme/colors';

const { secondary } = colors.borderColor;

export default function ContactIcon({
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
        d="M10.5 11H10.3438C9.96875 11 9.59375 11.0938 9.21875 11.2188C8.6875 11.4062 8.09375 11.5 7.5 11.5C6.875 11.5 6.28125 11.4062 5.75 11.2188C5.375 11.0938 5 11.0312 4.625 11.0312H4.5C2.28125 11.0312 0.5 12.8125 0.5 15C0.5 15.5625 0.9375 16 1.5 16H13.5C14.0312 16 14.5 15.5625 14.5 15C14.5 12.8125 12.6875 11 10.5 11ZM2.03125 14.5C2.28125 13.375 3.28125 12.5312 4.5 12.5H4.625C4.78125 12.5 5 12.5625 5.25 12.6562C5.96875 12.875 6.71875 13 7.46875 13C8.25 13 9 12.875 9.71875 12.6562C9.96875 12.5625 10.1875 12.5 10.3438 12.5H10.5C11.6875 12.5312 12.6875 13.375 12.9375 14.5H2.03125ZM2.21875 7C2.625 7 2.9375 6.6875 2.9375 6.28125V6C2.9375 3.5 4.96875 1.46875 7.5 1.46875C10 1.46875 12.0312 3.5 12.0312 6V6.40625C12.0312 7.59375 11.0625 8.5625 9.875 8.5625H9.15625C9.03125 8 8.53125 7.59375 7.96875 7.59375H7C6.3125 7.59375 5.78125 8.125 5.78125 8.8125C5.78125 9.46875 6.3125 10.0312 7 10.0312C7 10.0312 7 10.0312 7 10H9.875C11.875 10 13.4688 8.40625 13.5 6.40625V6C13.5 2.71875 10.7812 0 7.5 0C4.1875 0 1.5 2.71875 1.5 6V6.28125C1.5 6.6875 1.8125 7 2.21875 7ZM7.5 4C8.59375 4.03125 9.46875 4.90625 9.5 6C9.46875 6.375 9.375 6.71875 9.21875 7C9.4375 7.15625 9.625 7.34375 9.78125 7.5625H9.875C10.2812 7.5625 10.625 7.34375 10.8125 7.03125C10.9062 6.71875 11 6.375 11 6C11 4.09375 9.40625 2.5 7.5 2.5C5.5625 2.5 4 4.09375 4 6C4 6.90625 4.3125 7.6875 4.875 8.3125C5 7.78125 5.3125 7.3125 5.75 7C5.59375 6.71875 5.5 6.375 5.5 6C5.5 4.90625 6.375 4.03125 7.5 4Z"
        fill={fill}
      />
    </svg>
  );
}