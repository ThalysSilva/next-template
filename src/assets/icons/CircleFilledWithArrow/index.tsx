import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { green } = colors.alerts;

export default function CircleFilledWithArrowIcon({
  fill = green,
  width = '13',
  height = '13',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 13 13`;
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
        d="M0.6875 6.5C0.6875 9.71094 3.28906 12.3125 6.5 12.3125C9.71094 12.3125 12.3125 9.71094 12.3125 6.5C12.3125 3.28906 9.71094 0.6875 6.5 0.6875C3.28906 0.6875 0.6875 3.28906 0.6875 6.5ZM4.03906 7.17969C3.82812 7.41406 3.45312 7.41406 3.24219 7.20312L2.98438 6.94531C2.75 6.71094 2.75 6.35938 2.98438 6.14844L6.10156 3.03125C6.3125 2.82031 6.66406 2.82031 6.89844 3.03125L9.99219 6.14844C10.2266 6.35938 10.2266 6.71094 9.99219 6.94531L9.73438 7.20312C9.52344 7.41406 9.14844 7.41406 8.9375 7.17969L7.25 5.42188V9.6875C7.25 10.0156 6.99219 10.25 6.6875 10.25H6.3125C5.98438 10.25 5.75 10.0156 5.75 9.6875V5.42188L4.03906 7.17969Z"
        fill={fill}
      />
    </svg>
  );
}
