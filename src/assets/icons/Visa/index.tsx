import { CustomIconProps } from '@/utils/types';
import React from 'react';

export default function VisaIcon({
  width = '31',
  height = '10',
  hoverAnimate,
}: CustomIconProps) {
  const viewBox = `0 0 31 10`;
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={viewBox}
      height={height}
      width={width}
      fill={'none'}
    >
      <path d="M13.4392 9.83332H10.9098L12.4906 0.172623H15.0204L13.4392 9.83332ZM8.7818 0.172623L6.3703 6.81732L6.08495 5.38646L6.08521 5.38698L5.23408 1.04246C5.23408 1.04246 5.13116 0.172623 4.03418 0.172623H0.0475122L0.000732422 0.336201C0.000732422 0.336201 1.21986 0.588417 2.64664 1.44042L4.84425 9.83358H7.47976L11.5041 0.172623H8.7818ZM28.6774 9.83332H31.0001L28.975 0.172365H26.9417C26.0027 0.172365 25.774 0.892317 25.774 0.892317L22.0015 9.83332H24.6383L25.1656 8.39832H28.3812L28.6774 9.83332ZM25.8941 6.416L27.2231 2.80073L27.9708 6.416H25.8941ZM22.1992 2.4958L22.5602 0.421221C22.5602 0.421221 21.4464 0 20.2852 0C19.0299 0 16.049 0.54552 16.049 3.19818C16.049 5.69398 19.5476 5.72499 19.5476 7.03595C19.5476 8.3469 16.4095 8.112 15.3738 7.28532L14.9978 9.45448C14.9978 9.45448 16.1272 10 17.8529 10C19.5791 10 22.1831 9.1113 22.1831 6.69251C22.1831 4.18069 18.6531 3.94682 18.6531 2.85474C18.6533 1.76241 21.1168 1.90273 22.1992 2.4958Z" fill="#2566AF"/>
      <path d="M6.08221 5.3725L5.2314 1.05884C5.2314 1.05884 5.12852 0.19519 4.03194 0.19519H0.0467623L0 0.357607C0 0.357607 1.91543 0.749663 3.75267 2.21859C5.50937 3.62261 6.08221 5.3725 6.08221 5.3725Z" fill="#E6A540"/>
    </svg>

  );
}
