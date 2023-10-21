import colors from '@/styles/Theme/colors';
import { CustomIconProps } from '@/utils/types';
import React from 'react';

const { secondary } = colors.borderColor;

export default function SalesPanelIcon({
  fill = secondary,
  width = '21',
  height = '15',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 21 15`;
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
        d="M5.07031 8.35938L4.64062 7.92969C4.40625 7.69531 4.40625 7.26562 4.64062 7.03125L7.53125 4.14062C7.76562 3.90625 8.19531 3.90625 8.42969 4.14062L11.75 7.46094L15.1484 4.02344L14.0156 2.85156C13.3906 2.26562 13.8203 1.25 14.6797 1.25H18.625C18.9375 1.25 19.25 1.5625 19.25 1.875V5.82031C19.25 6.67969 18.2344 7.10938 17.6484 6.48438L16.4766 5.35156L12.1797 9.64844C11.9453 9.88281 11.5156 9.88281 11.2812 9.64844L8 6.32812L5.96875 8.35938C5.73438 8.59375 5.30469 8.59375 5.07031 8.35938ZM19.875 13.125C20.1875 13.125 20.5 13.4375 20.5 13.75V14.375C20.5 14.7266 20.1875 15 19.875 15H1.75C1.04688 15 0.5 14.4531 0.5 13.75V0.625C0.5 0.3125 0.773438 0 1.125 0H1.75C2.0625 0 2.375 0.3125 2.375 0.625V13.125H19.875Z"
        fill={fill}
      />
    </svg>
  );
}
