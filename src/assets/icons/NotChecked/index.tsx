import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function NotChecked({
  fill = '#006869',
  width = '14',
  height = '14',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 14 14`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M12.5 0C13.3125 0 14 0.6875 14 1.5V12.5C14 13.3438 13.3125 14 12.5 14H1.5C0.65625 14 0 13.3438 0 12.5V1.5C0 0.6875 0.65625 0 1.5 0H12.5ZM13 12.5V1.5C13 1.25 12.75 1 12.5 1H1.5C1.21875 1 1 1.25 1 1.5V12.5C1 12.7812 1.21875 13 1.5 13H12.5C12.75 13 13 12.7812 13 12.5Z" fill={fill}/>
    </svg>

  );
}
