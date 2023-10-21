import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function MyCardsIcon({
  fill = '#FCAF17',
  width = '24',
  height = '19',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 24 19`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M21.3359 0.75C22.3906 0.75 23.25 1.60938 23.25 2.625V16.375C23.25 17.4297 22.3906 18.25 21.3359 18.25H2.625C1.57031 18.25 0.75 17.4297 0.75 16.375V2.625C0.75 1.60938 1.57031 0.75 2.625 0.75H21.3359ZM2.85938 2.625C2.70312 2.625 2.625 2.74219 2.625 2.85938V4.5H21.3359V2.85938C21.3359 2.74219 21.2578 2.625 21.1016 2.625H2.85938ZM21.1016 16.375C21.2578 16.375 21.3359 16.2969 21.3359 16.1406V9.5H2.625V16.1406C2.625 16.2969 2.70312 16.375 2.85938 16.375H21.1016ZM8.25 12.4688V14.0312C8.25 14.3047 8.01562 14.5 7.78125 14.5H4.96875C4.69531 14.5 4.5 14.3047 4.5 14.0312V12.4688C4.5 12.2344 4.69531 12 4.96875 12H7.78125C8.01562 12 8.25 12.2344 8.25 12.4688ZM15.75 12.4688V14.0312C15.75 14.3047 15.5156 14.5 15.2812 14.5H9.96875C9.69531 14.5 9.5 14.3047 9.5 14.0312V12.4688C9.5 12.2344 9.69531 12 9.96875 12H15.2812C15.5156 12 15.75 12.2344 15.75 12.4688Z" fill={fill}/>
    </svg>
  );
}
