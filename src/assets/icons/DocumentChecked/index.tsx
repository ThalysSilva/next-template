import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function DocumentCheckedIcon({
  fill = '#FCAF17',
  width = '13',
  height = '16',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 13 16`;
  return (
    <svg 
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}      
      width={width} 
      height={height} 
      fill="none"
    >
      <path 
        d="M12.0312 3.0625C12.3125 3.34375 12.5 3.71875 12.5 4.125V14.5C12.5 15.3438 11.8125 16 11 16H2C1.15625 16 0.5 15.3438 0.5 14.5V1.5C0.5 0.6875 1.15625 0 2 0H8.375C8.78125 0 9.15625 0.1875 9.4375 0.46875L12.0312 3.0625ZM10.875 4L8.5 1.625V4H10.875ZM2 14.5H11V5.5H7.75C7.3125 5.5 7 5.1875 7 4.75V1.5H2V14.5ZM10.1562 8.5L5.6875 12.9062C5.5625 13.0625 5.3125 13.0625 5.15625 12.9062L2.8125 10.5312C2.6875 10.4062 2.6875 10.1562 2.8125 10L3.53125 9.3125C3.6875 9.15625 3.90625 9.15625 4.0625 9.3125L5.4375 10.6875L8.90625 7.25C9.0625 7.09375 9.3125 7.09375 9.4375 7.25L10.1562 7.96875C10.2812 8.125 10.2812 8.34375 10.1562 8.5Z" 
        fill={fill}/>
    </svg>
  );
}
