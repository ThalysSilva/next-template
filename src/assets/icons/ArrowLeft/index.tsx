import React from 'react';
import colors from '../../../styles/Theme/colors';

const { secondary } = colors.brand;

export default function ArrowLeftIcon({
  fill = secondary,
  width = '12',
  height = '22',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 12 22`;
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
        d="M10.8281 21.2188L11.7656 20.3281C11.9531 20.0938 11.9531 19.7188 11.7656 19.5312L3.28125 11L11.7656 2.51562C11.9531 2.32812 11.9531 1.95312 11.7656 1.71875L10.8281 0.828125C10.5938 0.59375 10.2656 0.59375 10.0312 0.828125L0.1875 10.625C0 10.8594 0 11.1875 0.1875 11.4219L10.0312 21.2188C10.2656 21.4531 10.5938 21.4531 10.8281 21.2188Z"
        fill={fill}
      />
    </svg>
  );
}
