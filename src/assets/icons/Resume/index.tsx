import React from 'react';
import { CustomIconProps } from '../../../utils/types';
import colors from '@/styles/Theme/colors';

const { secondary } = colors.brand;

export default function ResumeIcon({
  fill = secondary,
  width = '25',
  height = '20',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 25 20`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill="#FCAF17"
    >
      <path 
        d="M4.25 0.25H1.25C0.828125 0.25 0.5 0.625 0.5 1V4C0.5 4.42188 0.828125 4.75 1.25 4.75H4.25C4.625 4.75 5 4.42188 5 4V1C5 0.625 4.625 0.25 4.25 0.25ZM4.25 7.75H1.25C0.828125 7.75 0.5 8.125 0.5 8.5V11.5C0.5 11.9219 0.828125 12.25 1.25 12.25H4.25C4.625 12.25 5 11.9219 5 11.5V8.5C5 8.125 4.625 7.75 4.25 7.75ZM4.25 15.25H1.25C0.828125 15.25 0.5 15.625 0.5 16V19C0.5 19.4219 0.828125 19.75 1.25 19.75H4.25C4.625 19.75 5 19.4219 5 19V16C5 15.625 4.625 15.25 4.25 15.25ZM23.75 8.875H8.75C8.32812 8.875 8 9.25 8 9.625V10.375C8 10.7969 8.32812 11.125 8.75 11.125H23.75C24.125 11.125 24.5 10.7969 24.5 10.375V9.625C24.5 9.25 24.125 8.875 23.75 8.875ZM23.75 16.375H8.75C8.32812 16.375 8 16.75 8 17.125V17.875C8 18.2969 8.32812 18.625 8.75 18.625H23.75C24.125 18.625 24.5 18.2969 24.5 17.875V17.125C24.5 16.75 24.125 16.375 23.75 16.375ZM23.75 1.375H8.75C8.32812 1.375 8 1.75 8 2.125V2.875C8 3.29688 8.32812 3.625 8.75 3.625H23.75C24.125 3.625 24.5 3.29688 24.5 2.875V2.125C24.5 1.75 24.125 1.375 23.75 1.375Z" 
        fill={fill}
      />
    </svg>
  );
}
