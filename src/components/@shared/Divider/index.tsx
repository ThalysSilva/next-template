import colors from '@/styles/Theme/colors';
import { ChangeColor } from '@/utils/functions/changeColor';
import React from 'react';

type Props = {
  rounded?: 'xl' | 'lg' | 'md' | 'full' | 'xs' | 'sm' | 'none';
  color?: string;
  sizePx?: number;
  myPx?: number;
  mxPx?: number;
  opacity?: number;
};
export function Divider({
  color = colors.borderColor.light,
  rounded = 'xl',
  sizePx = 1,
  myPx = 24,
  mxPx = 24,
  opacity = 100,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: ChangeColor(color) ? '#006869' : color ,
        boxSizing: 'border-box',
        margin: `${myPx.toString()}px ${mxPx.toString()}px`,
        height: `${sizePx.toString()}px`,
        width: '100%',
      }}
      className={`flex rounded-${rounded} opacity-${opacity}`}
    />
  );
}
