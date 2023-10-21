'use client';

import { doNothing } from '@/utils/functions/general';
import React from 'react';
import CheckedIcon from '@/assets/icons/Checked';
import NotChecked from '@/assets/icons/NotChecked';
export type CustomRadioProps = {
  sizePx?: number;
  gapPx?: number;
};

type Props = CustomRadioProps & {
  children: React.ReactNode;
  onClick: () => void;
  checked: boolean;
  name: string;
  value?: any;
  id?: string;
};

export function InputCheck({
  sizePx = 20,
  gapPx = 12,
  children,
  checked,
  onClick,
  value,
  name,
  id,
}: Props) {
  const gapNormalized = gapPx.toString() + 'px';
  const sizeNormalized = sizePx.toString() + 'px';
  return (
    <div
      className={`flex items-center relative mb-3 cursor-pointer select-none`}
      style={{ gap: gapNormalized }}
      onClick={onClick}
    >
      <div
        className={`flex justify-center items-center relative transition-all ease-in-out duration-200 rounded-sm border border-solid `}
        style={{ width: sizeNormalized, height: sizeNormalized }}
      >
        {checked ? (
          <CheckedIcon width={sizeNormalized} height={sizeNormalized} />
        ) : (
          <NotChecked width={sizeNormalized} height={sizeNormalized} />
        )}
      </div>
      {children}
      <input
        className="hidden opacity-0 cursor-pointer"
        onChange={doNothing}
        checked={checked}
        type={'checkbox'}
        value={value}
        name={name}
        id={id}
      />
    </div>
  );
}
