import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;

export default function CrossIcon({
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
        d="M10.7031 8L15.7656 2.98438C16.0469 2.70312 16.0469 2.1875 15.7656 1.90625L14.5938 0.734375C14.3125 0.453125 13.7969 0.453125 13.5156 0.734375L8.5 5.79688L3.4375 0.734375C3.15625 0.453125 2.64062 0.453125 2.35938 0.734375L1.1875 1.90625C0.90625 2.1875 0.90625 2.70312 1.1875 2.98438L6.25 8L1.1875 13.0625C0.90625 13.3438 0.90625 13.8594 1.1875 14.1406L2.35938 15.3125C2.64062 15.5938 3.15625 15.5938 3.4375 15.3125L8.5 10.25L13.5156 15.3125C13.7969 15.5938 14.3125 15.5938 14.5938 15.3125L15.7656 14.1406C16.0469 13.8594 16.0469 13.3438 15.7656 13.0625L10.7031 8Z"
        fill={fill}
      />
    </svg>
  );
}
