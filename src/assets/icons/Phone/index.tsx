import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function PhoneIcon({
  width = '22',
  height = '19',
  hoverAnimate,
  fill = '#36A1AC',
}: CustomIconProps) {
  const viewBox = `0 0 22 19`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={fill}
    >
      <path
        d="M14.9375 0.25H7.0625C6.11328 0.25 5.375 1.02344 5.375 1.9375V16.5625C5.375 17.5117 6.11328 18.25 7.0625 18.25H14.9375C15.8516 18.25 16.625 17.5117 16.625 16.5625V1.9375C16.625 1.02344 15.8516 0.25 14.9375 0.25ZM11 17.125C10.3672 17.125 9.875 16.6328 9.875 16C9.875 15.4023 10.3672 14.875 11 14.875C11.5977 14.875 12.125 15.4023 12.125 16C12.125 16.6328 11.5977 17.125 11 17.125ZM14.9375 13.3281C14.9375 13.5742 14.7266 13.75 14.5156 13.75H7.48438C7.23828 13.75 7.0625 13.5742 7.0625 13.3281V2.35938C7.0625 2.14844 7.23828 1.9375 7.48438 1.9375H14.5156C14.7266 1.9375 14.9375 2.14844 14.9375 2.35938V13.3281Z"
        fill={fill}
      />
    </svg>
  );
}
