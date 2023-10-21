import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { red } = colors.alerts;

export default function ExclamationMarkWithCircleIcon({
  fill = red,
  width = '24',
  height = '24',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 24 24`;
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
        d="M12 0.375C18.375 0.375 23.625 5.625 23.625 12C23.625 18.4219 18.375 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.625 5.57812 0.375 12 0.375ZM12 21.375C17.1562 21.375 21.375 17.2031 21.375 12C21.375 6.84375 17.1562 2.625 12 2.625C6.79688 2.625 2.625 6.84375 2.625 12C2.625 17.2031 6.79688 21.375 12 21.375ZM13.9688 16.5C13.9688 17.625 13.0781 18.4688 12 18.4688C10.875 18.4688 10.0312 17.625 10.0312 16.5C10.0312 15.4219 10.875 14.5312 12 14.5312C13.0781 14.5312 13.9688 15.4219 13.9688 16.5ZM10.125 6.60938C10.125 6.28125 10.3594 6 10.6875 6H13.2656C13.5938 6 13.8281 6.28125 13.8281 6.60938L13.5 12.9844C13.5 13.2656 13.2188 13.5 12.9375 13.5H11.0156C10.7344 13.5 10.4531 13.2656 10.4531 12.9844L10.125 6.60938Z"
        fill={fill}
      />
    </svg>
  );
}
