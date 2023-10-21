import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function Coverage({
  fill = '#FCAF17',
  width = '18',
  height = '15',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 18 15`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >

      <path d="M17.2578 8.1875C17.5586 8.29688 17.75 8.57031 17.75 8.84375C17.75 12.2617 15.5078 14.1484 14.1133 14.6953C13.9766 14.75 13.7578 14.8047 13.4844 14.6953C11.7344 14.0117 9.875 11.9062 9.875 8.84375C9.875 8.57031 10.0664 8.29688 10.3398 8.1875L13.4844 6.95703C13.7578 6.84766 14.0039 6.90234 14.1133 6.95703L17.2578 8.1875ZM13.8125 13.4102C14.7422 12.9453 16.2461 11.6328 16.4102 9.25391L13.8125 8.24219V13.4102ZM9.98438 13.4375C10.3398 13.957 10.7227 14.3945 11.1602 14.75H1.5625C0.824219 14.75 0.25 14.1758 0.25 13.4375V12.7539C0.25 10.7305 1.89062 9.0625 3.91406 9.0625C4.70703 9.0625 5.0625 9.5 6.34766 9.5C7.46875 9.5 7.85156 9.19922 8.5625 9.08984C8.5625 9.55469 8.61719 9.99219 8.69922 10.4023C8.28906 10.457 7.66016 10.8125 6.375 10.8125C4.95312 10.8125 4.32422 10.375 3.91406 10.375C2.60156 10.375 1.5625 11.4414 1.5625 12.7539V13.4375H9.98438ZM6.375 8.625C4.1875 8.625 2.4375 6.875 2.4375 4.6875C2.4375 2.52734 4.1875 0.75 6.375 0.75C8.53516 0.75 10.3125 2.52734 10.3125 4.6875C10.3125 6.875 8.53516 8.625 6.375 8.625ZM6.375 2.0625C4.92578 2.0625 3.75 3.26562 3.75 4.6875C3.75 6.13672 4.92578 7.3125 6.375 7.3125C7.79688 7.3125 9 6.13672 9 4.6875C9 3.26562 7.79688 2.0625 6.375 2.0625Z" fill={fill}/>
    </svg>


  );
}