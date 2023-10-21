import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;


export default function MakeSaleIcon({
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
        d="M9.84375 7.625C10.75 7.90625 11.375 8.8125 11.375 9.78125C11.375 11 10.4062 12 9.25 12V12.5C9.25 12.7812 9 13 8.75 13H8.25C7.96875 13 7.75 12.7812 7.75 12.5V12C7.21875 12 6.71875 11.8125 6.28125 11.5312C6.03125 11.3438 5.96875 10.9688 6.21875 10.75L6.59375 10.4062C6.75 10.25 7 10.2188 7.21875 10.3438C7.40625 10.4688 7.59375 10.5 7.8125 10.5H9.21875C9.59375 10.5 9.875 10.1875 9.875 9.78125C9.875 9.4375 9.6875 9.15625 9.40625 9.0625L7.15625 8.375C6.25 8.125 5.625 7.21875 5.625 6.25C5.625 5.03125 6.5625 4.03125 7.75 4V3.5C7.75 3.25 7.96875 3 8.25 3H8.75C9.03125 3 9.25 3.25 9.25 3.5V4.03125C9.75 4.03125 10.25 4.1875 10.6875 4.5C10.9688 4.6875 11 5.0625 10.75 5.28125L10.375 5.625C10.2188 5.78125 9.96875 5.8125 9.78125 5.6875C9.59375 5.5625 9.375 5.5 9.15625 5.5H7.75C7.40625 5.5 7.09375 5.84375 7.09375 6.25C7.09375 6.5625 7.3125 6.875 7.59375 6.96875L9.84375 7.625ZM8.5 0.25C12.7812 0.25 16.25 3.71875 16.25 8C16.25 12.2812 12.7812 15.75 8.5 15.75C4.21875 15.75 0.75 12.2812 0.75 8C0.75 3.71875 4.21875 0.25 8.5 0.25ZM8.5 14.25C11.9375 14.25 14.75 11.4688 14.75 8C14.75 4.5625 11.9375 1.75 8.5 1.75C5.03125 1.75 2.25 4.5625 2.25 8C2.25 11.4688 5.03125 14.25 8.5 14.25Z"
        fill={fill}
      />
    </svg>
  );
}