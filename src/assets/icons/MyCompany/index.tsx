import { CustomIconProps } from '@/utils/types';
import React from 'react';


export default function MyCompanyIcon({
  fill = '#FCAF17',
  width = '21',
  height = '16',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 21 16`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M20.3438 5.53125C20.7188 6.1875 20.25 7 19.5 7H18.5V15.5C18.5 15.7812 18.25 16 18 16H17.5C17.2188 16 17 15.7812 17 15.5V7H12.5V14.9062C12.5 15.5312 12.0312 16 11.5 16H3.5C2.9375 16 2.5 15.5312 2.5 14.9062V7H1.5C0.71875 7 0.25 6.1875 0.625 5.53125L3.46875 0.53125C3.65625 0.21875 4 0 4.34375 0H16.625C17 0 17.3125 0.21875 17.5 0.53125L20.3438 5.53125ZM11 14.5V11.5312H4V14.5H11ZM11 10.0312V7H4V10.0312H11ZM2.34375 5.5H18.625L16.3438 1.5H4.625L2.34375 5.5Z" fill={fill}/>
    </svg>
  );
}
