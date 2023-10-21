import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { red } = colors.alerts;

export default function ErrorIcon({
  fill = red,
  width = '46',
  height = '46',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 46 46`;
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
        d="M23 0.46875C10.6914 0.46875 0.71875 10.5312 0.71875 22.75C0.71875 35.0586 10.6914 45.0312 23 45.0312C35.2188 45.0312 45.2812 35.0586 45.2812 22.75C45.2812 10.5312 35.2188 0.46875 23 0.46875ZM23 40.7188C13.0273 40.7188 5.03125 32.7227 5.03125 22.75C5.03125 12.8672 13.0273 4.78125 23 4.78125C32.8828 4.78125 40.9688 12.8672 40.9688 22.75C40.9688 32.7227 32.8828 40.7188 23 40.7188ZM26.7734 31.375C26.7734 29.3086 25.0664 27.6016 23 27.6016C20.8438 27.6016 19.2266 29.3086 19.2266 31.375C19.2266 33.5312 20.8438 35.1484 23 35.1484C25.0664 35.1484 26.7734 33.5312 26.7734 31.375ZM19.4062 12.418L20.0352 24.6367C20.0352 25.1758 20.5742 25.625 21.1133 25.625H24.7969C25.3359 25.625 25.875 25.1758 25.875 24.6367L26.5039 12.418C26.5039 11.7891 26.0547 11.25 25.4258 11.25H20.4844C19.8555 11.25 19.4062 11.7891 19.4062 12.418Z"
        fill={fill}
      />
    </svg>
  );
}
