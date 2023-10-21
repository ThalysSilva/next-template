import React from 'react';

import { CustomIconProps } from '@/utils/types';
import colors from '@/styles/Theme/colors';

const { secondary } = colors.brand;

export default function CoinIcon({
  fill = secondary,
  width = '16',
  height = '13',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 16 13`;
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
        d="M8 0.5C3.5625 0.5 0 2.53125 0 5V8.5C0 10.7188 3.5625 12.5 8 12.5C12.4062 12.5 16 10.7188 16 8.5V5C16 2.53125 12.4062 0.5 8 0.5ZM2 9.96875C1.34375 9.5 1 9 1 8.5V7.1875C1.28125 7.5 1.625 7.75 2 7.96875V9.96875ZM4.5 11.0625C3.96875 10.9375 3.46875 10.75 3 10.5312V8.53125C3.46875 8.75 3.96875 8.90625 4.5 9.0625V11.0625ZM7.5 11.5C6.8125 11.4688 6.125 11.4062 5.5 11.2812V9.28125C6.125 9.40625 6.8125 9.46875 7.5 9.5V11.5ZM10.5 11.2812C9.84375 11.4062 9.15625 11.4688 8.5 11.5V9.5C9.15625 9.46875 9.84375 9.40625 10.5 9.28125V11.2812ZM13 10.5312C12.5 10.75 12 10.9375 11.5 11.0625V9.0625C12 8.90625 12.5 8.75 13 8.53125V10.5312ZM15 8.5C15 9 14.625 9.5 14 9.96875V7.96875C14.3438 7.75 14.6875 7.5 15 7.1875V8.5ZM8 8.5C3.875 8.5 1 6.65625 1 5C1 3.34375 3.875 1.5 8 1.5C12.125 1.5 15 3.34375 15 5C15 6.65625 12.125 8.5 8 8.5Z"
        fill={fill}
      />
    </svg>
  );
}
