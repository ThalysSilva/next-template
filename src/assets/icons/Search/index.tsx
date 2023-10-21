import React from 'react';

import { CustomIconProps } from '@/utils/types';
import colors from '@/styles/Theme/colors';

const { primary } = colors.brand;

export default function SearchIcon({
  fill = primary,
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
        d="M15.7812 13.8438C16.0625 14.1562 16.0625 14.625 15.75 14.9062L14.875 15.7812C14.5938 16.0938 14.125 16.0938 13.8125 15.7812L10.7188 12.6875C10.5625 12.5312 10.5 12.3438 10.5 12.1562V11.625C9.375 12.5 8 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.90625 0 6.5 0C10.0625 0 13 2.9375 13 6.5C13 8.03125 12.4688 9.40625 11.625 10.5H12.125C12.3125 10.5 12.5 10.5938 12.6562 10.7188L15.7812 13.8438ZM6.5 10.5C8.6875 10.5 10.5 8.71875 10.5 6.5C10.5 4.3125 8.6875 2.5 6.5 2.5C4.28125 2.5 2.5 4.3125 2.5 6.5C2.5 8.71875 4.28125 10.5 6.5 10.5Z"
        fill={fill}
      />
    </svg>
  );
}
