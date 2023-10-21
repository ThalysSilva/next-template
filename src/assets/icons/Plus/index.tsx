import React from 'react';

import { CustomIconProps } from '@/utils/types';
import colors from '@/styles/Theme/colors';

const { light } = colors.text;

export default function PlusIcon({
  fill = light,
  width = '16',
  height = '15',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 16 15`;
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
        d="M14.875 6.25C15.1875 6.25 15.5 6.5625 15.5 6.875V8.125C15.5 8.47656 15.1875 8.75 14.875 8.75H9.25V14.375C9.25 14.7266 8.9375 15 8.625 15H7.375C7.02344 15 6.75 14.7266 6.75 14.375V8.75H1.125C0.773438 8.75 0.5 8.47656 0.5 8.125V6.875C0.5 6.5625 0.773438 6.25 1.125 6.25H6.75V0.625C6.75 0.3125 7.02344 0 7.375 0H8.625C8.9375 0 9.25 0.3125 9.25 0.625V6.25H14.875Z"
        fill={fill}
      />
    </svg>
  );
}
