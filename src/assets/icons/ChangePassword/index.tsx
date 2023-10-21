import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;


export default function ChangePasswordIcon({
  fill = secondary,
  width = '17',
  height = '17',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 17 17`;
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
        d="M10.5 2C8 2 6 4.03125 6 6.5C6 6.53125 6 6.53125 6 6.53125C6 6.96875 6.0625 7.40625 6.1875 7.8125L2 12V15H5V13.5H6.5V12H7.5L8.8125 10.6875C9.3125 10.9062 9.90625 11 10.5 11C12.9688 11 15 9 15 6.5C15 4.03125 12.9688 2 10.5 2ZM10.5 0.5C13.8125 0.5 16.5 3.1875 16.5 6.5C16.5 9.84375 13.8125 12.5 10.5 12.5C10.0625 12.5 9.65625 12.4688 9.25 12.375L8 13.625V14.25C8 14.6875 7.65625 15 7.25 15H6.5V15.75C6.5 16.1875 6.15625 16.5 5.75 16.5H1.25C0.8125 16.5 0.5 16.1875 0.5 15.75V11.7188C0.5 11.5 0.5625 11.3125 0.71875 11.1875L4.53125 7.34375C4.5 7.0625 4.5 6.78125 4.5 6.5C4.5 3.1875 7.15625 0.5 10.5 0.5ZM10.5 5C10.5 4.1875 11.1562 3.5 12 3.5C12.8125 3.5 13.5 4.1875 13.5 5C13.5 5.84375 12.8125 6.5 12 6.5C11.1562 6.5 10.5 5.84375 10.5 5Z"
        fill={fill}
      />
    </svg>
  );
}
