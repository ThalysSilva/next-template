import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.brand;

export default function CreditCardIcon({
  fill = secondary,
  width = '19',
  height = '14',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 19 14`;
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
        d="M16.9688 0H2C1.15625 0 0.5 0.6875 0.5 1.5V12.5C0.5 13.3438 1.15625 14 2 14H16.9688C17.8125 14 18.5 13.3438 18.5 12.5V1.5C18.5 0.6875 17.8125 0 16.9688 0ZM2.1875 1.5H16.7812C16.9062 1.5 16.9688 1.59375 16.9688 1.6875V3H2V1.6875C2 1.59375 2.0625 1.5 2.1875 1.5ZM16.7812 12.5H2.1875C2.0625 12.5 2 12.4375 2 12.3125V7H16.9688V12.3125C16.9688 12.4375 16.9062 12.5 16.7812 12.5ZM6.5 9.375C6.5 9.1875 6.3125 9 6.125 9H3.875C3.65625 9 3.5 9.1875 3.5 9.375V10.625C3.5 10.8438 3.65625 11 3.875 11H6.125C6.3125 11 6.5 10.8438 6.5 10.625V9.375ZM12.5 9.375C12.5 9.1875 12.3125 9 12.125 9H7.875C7.65625 9 7.5 9.1875 7.5 9.375V10.625C7.5 10.8438 7.65625 11 7.875 11H12.125C12.3125 11 12.5 10.8438 12.5 10.625V9.375Z"
        fill={fill}
      />
    </svg>
  );
}
