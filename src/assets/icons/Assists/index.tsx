import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function Assists({
  fill = '#FCAF17',
  width = '11',
  height = '15',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 11 15`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M8.125 7.53125V8.29688C8.125 8.48828 7.96094 8.625 7.79688 8.625H3.20312C3.01172 8.625 2.875 8.48828 2.875 8.29688V7.53125C2.875 7.36719 3.01172 7.20312 3.20312 7.20312H7.79688C7.96094 7.20312 8.125 7.36719 8.125 7.53125ZM7.79688 9.5C7.96094 9.5 8.125 9.66406 8.125 9.82812V10.5938C8.125 10.7852 7.96094 10.9219 7.79688 10.9219H3.20312C3.01172 10.9219 2.875 10.7852 2.875 10.5938V9.82812C2.875 9.66406 3.01172 9.5 3.20312 9.5H7.79688ZM10.75 4.35938V13.4375C10.75 14.1758 10.1484 14.75 9.4375 14.75H1.5625C0.824219 14.75 0.25 14.1758 0.25 13.4375V2.0625C0.25 1.35156 0.824219 0.75 1.5625 0.75H7.14062C7.46875 0.75 7.82422 0.914062 8.07031 1.16016L10.3398 3.42969C10.5859 3.67578 10.75 4.03125 10.75 4.35938ZM7.25 2.17188V4.25H9.32812L7.25 2.17188ZM9.4375 13.4375V5.5625H6.59375C6.21094 5.5625 5.9375 5.28906 5.9375 4.90625V2.0625H1.5625V13.4375H9.4375Z" fill={fill}/>
    </svg>

  );
}