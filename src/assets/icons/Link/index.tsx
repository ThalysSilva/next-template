import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function LinkIcon({
  width = '20',
  height = '20',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 20 20`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M11.9258 7.69922C11.5605 7.33398 11.1621 7.06836 10.7305 6.83594C10.5645 6.76953 10.3984 6.80273 10.2656 6.93555L10.1328 7.06836C9.83398 7.33398 9.66797 7.69922 9.63477 8.06445C9.60156 8.23047 9.70117 8.39648 9.83398 8.49609C10.1328 8.62891 10.3984 8.79492 10.5977 9.02734C11.6934 10.123 11.6934 11.8828 10.5977 12.9785L8.10742 15.4688C7.01172 16.5645 5.25195 16.5645 4.15625 15.4688C3.06055 14.373 3.06055 12.6133 4.15625 11.5176L5.68359 9.99023C5.7832 9.89062 5.81641 9.75781 5.7832 9.625C5.68359 9.22656 5.65039 8.79492 5.61719 8.36328C5.61719 8.03125 5.18555 7.86523 4.95312 8.09766C4.55469 8.49609 3.92383 9.12695 2.86133 10.1895C1.03516 12.0156 1.03516 14.9707 2.86133 16.7637C4.6543 18.5898 7.60938 18.5898 9.43555 16.7637C12.1582 14.041 12.0254 14.1738 12.2246 13.9082C13.7188 12.1152 13.6191 9.39258 11.9258 7.69922ZM17.1055 2.51953C15.3125 0.693359 12.3574 0.693359 10.5312 2.51953C7.80859 5.24219 7.94141 5.10938 7.74219 5.375C6.24805 7.16797 6.34766 9.89062 8.04102 11.584C8.40625 11.9492 8.80469 12.2148 9.23633 12.4473C9.40234 12.5137 9.56836 12.4805 9.70117 12.3477L9.83398 12.2148C10.1328 11.9492 10.2988 11.584 10.332 11.2188C10.3652 11.0527 10.2656 10.8867 10.1328 10.7871C9.83398 10.6543 9.56836 10.4883 9.36914 10.2559C8.27344 9.16016 8.27344 7.40039 9.36914 6.30469L11.8594 3.81445C12.9551 2.71875 14.7148 2.71875 15.8105 3.81445C16.9062 4.91016 16.9062 6.66992 15.8105 7.76562L14.2832 9.29297C14.1836 9.39258 14.1504 9.52539 14.1836 9.6582C14.2832 10.0566 14.3164 10.4883 14.3496 10.9199C14.3496 11.252 14.7812 11.418 15.0137 11.1855C15.4121 10.7871 16.043 10.1562 17.1055 9.09375C18.9316 7.26758 18.9316 4.3125 17.1055 2.51953Z" fill="#36A1AC"/>
    </svg>
  );
}
