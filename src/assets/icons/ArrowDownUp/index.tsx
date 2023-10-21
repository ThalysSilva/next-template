import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function ArrowDownUpIcon({
  fill = '#FCAF17',
  width = '11',
  height = '12',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 11 12`;
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
        d="M5.46875 8.5625H4.25V0.84375C4.25 0.640625 4.04688 0.4375 3.84375 0.4375H3.03125C2.80273 0.4375 2.625 0.640625 2.625 0.84375V8.5625H1.40625C1.02539 8.5625 0.847656 9.01953 1.10156 9.27344L3.13281 11.7109C3.20898 11.7871 3.31055 11.8125 3.4375 11.8125C3.53906 11.8125 3.64062 11.7871 3.7168 11.7109L5.74805 9.27344C6.00195 9.01953 5.82422 8.5625 5.46875 8.5625ZM10.623 3.00195L8.5918 0.564453C8.51562 0.488281 8.41406 0.462891 8.28711 0.462891C8.18555 0.462891 8.08398 0.488281 8.00781 0.564453L5.97656 3.00195C5.72266 3.25586 5.90039 3.6875 6.28125 3.6875H7.5V11.4062C7.5 11.6348 7.67773 11.8125 7.90625 11.8125H8.71875C8.92188 11.8125 9.125 11.6348 9.125 11.4062V3.6875H10.3438C10.6992 3.6875 10.877 3.25586 10.623 3.00195Z"
        fill={fill}
      />
    </svg>
  );
}
