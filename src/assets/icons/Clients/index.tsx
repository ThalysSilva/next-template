import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function Plans({
  fill = '#FCAF17',
  width = '17',
  height = '15',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 17 15`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >

      <path d="M2.8125 8.46875C2.71875 8.5 2.59375 8.5 2.5 8.5C1.6875 8.5 0.875 7.84375 0.59375 6.90625C0.25 5.8125 0.75 4.78125 1.65625 4.5625C1.75 4.53125 1.875 4.5 1.96875 4.5C2.78125 4.5 3.59375 5.15625 3.875 6.125C4.21875 7.21875 3.71875 8.25 2.8125 8.46875ZM1.78125 6.5625C1.9375 7.03125 2.28125 7.25 2.5 7.25C2.5625 7.25 2.59375 7.25 2.65625 7.15625C2.71875 7.03125 2.78125 6.78125 2.6875 6.46875C2.53125 6 2.1875 5.75 1.96875 5.75L1.9375 5.78125C1.90625 5.78125 1.875 5.78125 1.8125 5.875C1.75 6 1.6875 6.25 1.78125 6.5625ZM10.4375 5.46875C9.46875 5.21875 9 3.90625 9.34375 2.5625C9.6875 1.34375 10.5625 0.5 11.4375 0.5C11.5625 0.5 11.6875 0.53125 11.7812 0.5625C12.75 0.8125 13.2188 2.125 12.875 3.46875C12.5312 4.6875 11.6562 5.5 10.7812 5.5C10.6562 5.5 10.5625 5.5 10.4375 5.46875ZM10.5625 2.875C10.4062 3.4375 10.5 3.90625 10.625 4.125C10.6875 4.21875 10.7188 4.25 10.75 4.25C10.9688 4.25 11.4688 3.875 11.6562 3.15625C11.8125 2.59375 11.7188 2.125 11.5938 1.90625C11.5312 1.8125 11.5 1.78125 11.4688 1.78125L11.4375 1.75C11.25 1.75 10.75 2.15625 10.5625 2.875ZM15.3125 4.5625C16.2188 4.78125 16.7188 5.8125 16.375 6.90625C16.0938 7.84375 15.2812 8.5 14.4688 8.5C14.375 8.5 14.25 8.5 14.1562 8.46875C13.25 8.25 12.75 7.21875 13.0938 6.125C13.375 5.15625 14.1875 4.5 15 4.5C15.0938 4.5 15.2188 4.53125 15.3125 4.5625ZM15.1875 6.5625C15.2812 6.25 15.2188 6 15.1562 5.875C15.0938 5.78125 15.0625 5.78125 15.0312 5.78125L15 5.75C14.7812 5.75 14.4375 6 14.2812 6.46875C14.1875 6.78125 14.25 7.03125 14.3125 7.15625C14.375 7.25 14.4062 7.25 14.4375 7.25C14.6875 7.25 15.0312 7 15.1875 6.5625ZM6.1875 5.5C5.3125 5.5 4.4375 4.6875 4.09375 3.46875C3.75 2.125 4.21875 0.8125 5.1875 0.5625C5.3125 0.53125 5.40625 0.5 5.53125 0.5C6.40625 0.5 7.28125 1.34375 7.625 2.5625C7.96875 3.90625 7.5 5.21875 6.53125 5.46875C6.40625 5.5 6.3125 5.5 6.1875 5.5ZM5.375 1.90625C5.25 2.125 5.15625 2.59375 5.3125 3.15625C5.5 3.875 6 4.25 6.1875 4.25C6.25 4.25 6.28125 4.21875 6.34375 4.125C6.46875 3.90625 6.5625 3.4375 6.40625 2.875C6.21875 2.15625 5.71875 1.75 5.53125 1.75L5.5 1.78125C5.46875 1.78125 5.4375 1.8125 5.375 1.90625ZM8.5 6.5C10.9688 6.5 14.5 10.3438 14.5 12.7812C14.5 13.875 13.6562 14.5 12.25 14.5C10.7188 14.5 9.71875 13.7188 8.5 13.7188C7.25 13.7188 6.25 14.5 4.71875 14.5C3.3125 14.5 2.5 13.875 2.5 12.7812C2.5 10.3438 6 6.5 8.5 6.5ZM12.9688 12.875C12.9688 12.875 13 12.8438 13 12.7812C13 11.0938 10.0938 8 8.5 8C6.875 8 4 11.0938 4 12.7812C4 12.8438 4 12.875 4 12.875C4.03125 12.9062 4.21875 13 4.71875 13C5.28125 13 5.78125 12.8438 6.34375 12.6562C6.96875 12.4688 7.65625 12.2188 8.5 12.2188C9.3125 12.2188 10.0312 12.4688 10.625 12.6562C11.1875 12.8438 11.6875 13 12.25 13C12.75 13 12.9375 12.9062 12.9688 12.875Z" fill={fill}/>
    </svg>

  );
}
