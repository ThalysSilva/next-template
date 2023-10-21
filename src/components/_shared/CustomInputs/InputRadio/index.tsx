'use client';

import React from 'react';

import { doNothing } from '@/utils/functions/general';
import { twMerge } from 'tailwind-merge';

export type CustomRadioProps = {
  sizePx?: number;
  gapPx?: number;
};

type Props = CustomRadioProps & {
  containerClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  checked: boolean;
  name: string;
  value?: any;
  backgroundColor?: string;
  isDisabled?: boolean;
};

export function InputRadio({
  containerClassName,
  sizePx = 20,
  gapPx = 12,
  children,
  checked,
  onClick,
  value,
  name,
  backgroundColor = '',
  isDisabled,
}: Props) {
  const gapNormalized = gapPx.toString() + 'px';
  const sizeNormalized = sizePx.toString() + 'px';
  const SIZE_OF_SELECTED = (sizePx - sizePx / 2).toString() + 'px';
  return (
    <div
      className={twMerge(
        `flex items-center relative mb-3 select-none text-text-semiLight ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }}`,
        containerClassName,
      )}
      style={{ gap: gapNormalized }}
      onClick={() => {
        if (isDisabled) return;
        onClick?.();
      }}
    >
      <span
        className={`flex justify-center items-center relative transition-all ease-in-out duration-200 rounded-full border border-solid 
        ${checked ? 'border-brand-primary' : 'border-brand-primaryLight'} 
        `}
        style={{ width: sizeNormalized, height: sizeNormalized, backgroundColor }}
      >
        <span
          style={{ width: SIZE_OF_SELECTED, height: SIZE_OF_SELECTED }}
          className={`relative transform transition-transform ease-in-out duration-200 rounded-full 
          ${checked ? 'bg-brand-primary' : 'bg-brand-primaryLight'}
          ${checked ? 'scale-100' : 'scale-0'} `}
        />
      </span>
      {children}
      <input
        className="hidden opacity-0 cursor-pointer"
        onChange={doNothing}
        checked={checked}
        type={'checkbox'}
        value={value}
        name={name}
      />
    </div>
  );
}
