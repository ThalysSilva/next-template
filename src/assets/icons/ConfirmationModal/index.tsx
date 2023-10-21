import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function ConfirmationModal({
  fill = '#3AC658',
  width = '52',
  height = '46',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 52 46`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0012 0.46875C38.2199 0.46875 48.2824 10.5312 48.2824 22.75C48.2824 35.0586 38.2199 45.0312 26.0012 45.0312C13.6926 45.0312 3.7199 35.0586 3.7199 22.75C3.7199 10.5312 13.6926 0.46875 26.0012 0.46875ZM26.0012 4.78125C16.0285 4.78125 8.0324 12.8672 8.0324 22.75C8.0324 32.7227 16.0285 40.7188 26.0012 40.7188C35.884 40.7188 43.9699 32.7227 43.9699 22.75C43.9699 12.8672 35.884 4.78125 26.0012 4.78125ZM38.5793 16.5508C38.9387 16.9102 38.9387 17.6289 38.5793 18.0781L23.0363 33.4414C22.5871 33.8906 21.9582 33.8906 21.509 33.4414L13.3332 25.1758C12.9738 24.8164 12.9738 24.0977 13.3332 23.6484L15.3996 21.6719C15.8488 21.2227 16.4777 21.2227 16.9269 21.6719L22.3176 27.0625L34.9855 14.4844C35.4347 14.0352 36.1535 14.0352 36.5129 14.4844L38.5793 16.5508Z" fill={fill}/>
      </svg>

    </svg>
  );
}
