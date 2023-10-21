import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function ForgotPasswordIcon({
  hoverAnimate,
  width = '22',
  height = '24',
  fill = '#FCAF17',
}: CustomIconProps) {
  const viewBox = `0 0 22 24`;
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
        d="M19.25 9C20.4688 9 21.5 10.0312 21.5 11.25V21.75C21.5 23.0156 20.4688 24 19.25 24H2.75C1.48438 24 0.5 23.0156 0.5 21.75V11.25C0.5 10.0312 1.48438 9 2.75 9H4.25V6.75C4.25 3.04688 7.25 0 11 0C14.75 0.046875 17.75 3.09375 17.75 6.84375V9H19.25ZM6.5 6.75V9H15.5V6.75C15.5 4.3125 13.4375 2.25 11 2.25C8.51562 2.25 6.5 4.3125 6.5 6.75ZM19.25 21.75V11.25H2.75V21.75H19.25Z"
        fill={fill}
      />
    </svg>
  );
}
