import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;


export default function FrequentlyQuestionsIcon({
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
        d="M8.5 0C12.9062 0 16.5 3.59375 16.5 8C16.5 12.4375 12.9062 16 8.5 16C4.0625 16 0.5 12.4375 0.5 8C0.5 3.59375 4.0625 0 8.5 0ZM8.5 14.5C12.0625 14.5 15 11.5938 15 8C15 4.4375 12.0625 1.5 8.5 1.5C4.90625 1.5 2 4.4375 2 8C2 11.5938 4.90625 14.5 8.5 14.5ZM8.5 10.5C9.03125 10.5 9.5 10.9375 9.5 11.5C9.5 12.0625 9.03125 12.5 8.5 12.5C7.90625 12.5 7.5 12.0625 7.5 11.5C7.5 10.9375 7.9375 10.5 8.5 10.5ZM9.53125 4C10.7812 4 11.75 4.96875 11.7188 6.1875C11.7188 6.9375 11.3125 7.65625 10.6562 8.0625L9.25 8.9375V9C9.25 9.40625 8.90625 9.75 8.5 9.75C8.09375 9.75 7.75 9.40625 7.75 9V8.5C7.75 8.25 7.875 8 8.125 7.84375L9.90625 6.78125C10.125 6.65625 10.25 6.4375 10.25 6.1875C10.25 5.8125 9.90625 5.5 9.5 5.5H7.90625C7.53125 5.5 7.25 5.8125 7.25 6.1875C7.25 6.59375 6.90625 6.9375 6.5 6.9375C6.09375 6.9375 5.75 6.59375 5.75 6.1875C5.75 4.96875 6.71875 4 7.9375 4H9.53125Z"
        fill={fill}
      />
    </svg>
  );
}
