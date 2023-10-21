import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function SendEmailIcon({ fill = '#FCAF17', width = '28', height = '25', hoverAnimate }: CustomIconProps) {
  const viewBox = `0 0 28 25`;
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
        d="M8.9375 5.82812L13.5781 1.1875C13.8125 0.953125 14.1406 0.953125 14.375 1.1875L19.0156 5.82812C19.3906 6.20312 19.1094 6.76562 18.6406 6.76562H15.5V13.9375C15.5 14.2656 15.2188 14.5 14.9375 14.5H13.0625C12.7344 14.5 12.5 14.2656 12.5 13.9375V6.76562H9.35938C8.84375 6.76562 8.5625 6.20312 8.9375 5.82812ZM27.5 17.6406V22.75C27.5 24.0156 26.4688 25 25.25 25H2.75C1.48438 25 0.5 24.0156 0.5 22.75V17.6406C0.5 17.0781 0.6875 16.5625 1.0625 16.1406L5.79688 10.7969C6.21875 10.2812 6.82812 10 7.48438 10H9.96875C10.1094 10 10.25 10.1406 10.25 10.2812V11.9688C10.25 12.1562 10.1094 12.25 9.96875 12.25H7.48438L4.8125 15.25H9.73438L11.2344 18.25H16.7188L18.2188 15.25H23.1406L20.4688 12.25H18.0312C17.8438 12.25 17.75 12.1562 17.75 11.9688V10.2812C17.75 10.1406 17.8438 10 18.0312 10H20.4688C21.125 10 21.7344 10.2812 22.1562 10.7969L26.8906 16.1406C27.2656 16.5625 27.5 17.0781 27.5 17.6406ZM25.25 17.5H19.625L18.125 20.5H9.875L8.375 17.5H2.75V22.75H25.25V17.5Z"
        fill={fill}
      />
    </svg>
  );
}
