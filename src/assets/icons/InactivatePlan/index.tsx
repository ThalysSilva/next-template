import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function InactivatePlan({
  fill = '#FFFFFF',
  width = '16',
  height = '13',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 16 13`;
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
        d="M2.45312 1.67188L2.99219 0.828125C3.10938 0.617188 3.32031 0.523438 3.55469 0.523438H11.9219C12.1562 0.523438 12.3672 0.617188 12.4844 0.828125L13.8203 2.9375C14.5234 4.03906 13.9141 5.5625 12.6016 5.75C12.5078 5.75 12.4141 5.75 12.3203 5.75C11.7109 5.75 11.1719 5.49219 10.7969 5.07031C10.4219 5.49219 9.88281 5.75 9.27344 5.75C8.66406 5.75 8.10156 5.49219 7.72656 5.07031C7.60938 5.23438 7.46875 5.35156 7.30469 5.44531L11.5 8.72656V6.38281C11.7578 6.47656 12.0391 6.5 12.3203 6.5C12.4609 6.5 12.5781 6.5 12.6953 6.47656C12.7891 6.47656 12.9062 6.45312 13 6.42969V9.92188L15.0156 11.5156C15.2734 11.7031 15.3203 12.0547 15.1094 12.2891C14.9219 12.5469 14.5703 12.5938 14.3359 12.3828L0.460938 1.50781C0.203125 1.32031 0.15625 0.96875 0.367188 0.734375C0.554688 0.476562 0.90625 0.429688 1.14062 0.640625L2.45312 1.67188ZM2.875 5.75C1.84375 5.60938 1.23438 4.625 1.375 3.66406L3.88281 5.63281C3.64844 5.70312 3.41406 5.75 3.15625 5.75C3.0625 5.75 2.96875 5.75 2.875 5.75ZM4 9.5H8.80469L12.2969 12.2656C12.0625 12.4297 11.7812 12.5 11.5 12.5H4C3.15625 12.5 2.5 11.8438 2.5 11V6.42969C2.57031 6.45312 2.66406 6.47656 2.75781 6.47656H2.78125C2.89844 6.5 3.01562 6.5 3.15625 6.5C3.4375 6.5 3.71875 6.47656 4 6.38281V9.5Z"
        fill={fill}
      />
    </svg>
  );
}
