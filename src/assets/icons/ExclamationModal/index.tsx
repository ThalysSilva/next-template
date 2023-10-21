import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function ExclamationModal({
  fill = '#FCAF17',
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
        d="M23.127 0.468803C35.346 0.468803 45.408 10.5312 45.408 22.75C45.408 35.059 35.346 45.031 23.127 45.031C10.819 45.031 0.845993 35.059 0.845993 22.75C0.845993 10.5312 10.819 0.468803 23.127 0.468803ZM23.127 40.719C33.01 40.719 41.096 32.723 41.096 22.75C41.096 12.8672 33.01 4.7812 23.127 4.7812C13.155 4.7812 5.158 12.8672 5.158 22.75C5.158 32.723 13.155 40.719 23.127 40.719ZM26.901 31.375C26.901 33.531 25.194 35.148 23.127 35.148C20.971 35.148 19.354 33.531 19.354 31.375C19.354 29.309 20.971 27.602 23.127 27.602C25.194 27.602 26.901 29.309 26.901 31.375ZM19.533 12.418C19.533 11.7891 19.983 11.25 20.612 11.25H25.553C26.182 11.25 26.631 11.7891 26.631 12.418L26.002 24.6367C26.002 25.1758 25.463 25.625 24.924 25.625H21.24C20.701 25.625 20.162 25.1758 20.162 24.6367L19.533 12.418Z"
        fill={fill}
      />
    </svg>
  );
}
