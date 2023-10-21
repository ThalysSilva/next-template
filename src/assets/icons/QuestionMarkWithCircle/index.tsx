import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { primary } = colors.brand;

export default function QuestionMarkWithCircleIcon({
  fill = primary,
  width = '32',
  height = '32',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 32 32`;
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
        d="M16 0C7.125 0 0 7.1875 0 16C0 24.875 7.125 32 16 32C24.8125 32 32 24.875 32 16C32 7.1875 24.8125 0 16 0ZM16 29C8.8125 29 3 23.1875 3 16C3 8.875 8.8125 3 16 3C23.125 3 29 8.875 29 16C29 23.1875 23.125 29 16 29ZM16 21C14.875 21 14 21.875 14 23C14 24.125 14.8125 25 16 25C17.0625 25 18 24.125 18 23C18 21.875 17.0625 21 16 21ZM18.0625 8H14.875C12.4375 8 10.5 9.9375 10.5 12.375C10.5 13.1875 11.1875 13.875 12 13.875C12.8125 13.875 13.5 13.1875 13.5 12.375C13.5 11.625 14.0625 11 14.8125 11H18C18.8125 11 19.5 11.625 19.5 12.375C19.5 12.875 19.25 13.3125 18.8125 13.5625L15.25 15.6875C14.75 16 14.5 16.5 14.5 17V18C14.5 18.8125 15.1875 19.5 16 19.5C16.8125 19.5 17.5 18.8125 17.5 18V17.875L20.3125 16.125C21.625 15.3125 22.4375 13.875 22.4375 12.375C22.5 9.9375 20.5625 8 18.0625 8Z"
        fill={fill}
      />
    </svg>
  );
}
