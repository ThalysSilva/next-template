import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;

export default function ShareIcon({
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
        d="M15.9648 5.97266C16.4844 6.46484 16.4844 7.3125 15.9648 7.80469L11.1523 12.6172C10.332 13.4648 8.9375 12.8633 8.9375 11.6875V9.55469C4.91797 9.80078 4.58984 10.9219 5.24609 13.0547C5.62891 14.2578 4.28906 15.2148 3.27734 14.5312C1.66406 13.4648 0.625 11.7969 0.625 9.80078C0.625 5.125 5.16406 4.38672 8.9375 4.27734V2.08984C8.9375 0.914062 10.332 0.3125 11.1523 1.16016L15.9648 5.97266ZM10.25 11.6875L15.0625 6.875L10.25 2.0625V5.58984C6.3125 5.58984 1.9375 5.89062 1.9375 9.80078C1.9375 11.6328 3.03125 12.7812 4.01562 13.4375C2.64844 9.11719 5.73828 8.24219 10.25 8.21484V11.6875Z"
        fill={fill}
      />
    </svg>
  );
}
