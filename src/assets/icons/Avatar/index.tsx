import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function AvatarIcon({ hoverAnimate, width = '21', height = '24' }: CustomIconProps) {
  const viewBox = `0 0 21 24`;
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
        d="M14.6719 14.25C13.3125 14.25 12.7031 15 10.5 15C8.25 15 7.64062 14.25 6.28125 14.25C2.8125 14.25 0 17.1094 0 20.5781V21.75C0 23.0156 0.984375 24 2.25 24H18.75C19.9688 24 21 23.0156 21 21.75V20.5781C21 17.1094 18.1406 14.25 14.6719 14.25ZM18.75 21.75H2.25V20.5781C2.25 18.3281 4.03125 16.5 6.28125 16.5C6.98438 16.5 8.0625 17.25 10.5 17.25C12.8906 17.25 13.9688 16.5 14.6719 16.5C16.9219 16.5 18.75 18.3281 18.75 20.5781V21.75ZM10.5 13.5C14.2031 13.5 17.25 10.5 17.25 6.75C17.25 3.04688 14.2031 0 10.5 0C6.75 0 3.75 3.04688 3.75 6.75C3.75 10.5 6.75 13.5 10.5 13.5ZM10.5 2.25C12.9375 2.25 15 4.3125 15 6.75C15 9.23438 12.9375 11.25 10.5 11.25C8.01562 11.25 6 9.23438 6 6.75C6 4.3125 8.01562 2.25 10.5 2.25Z"
        fill="#FCAF17"
      />
    </svg>
  );
}
