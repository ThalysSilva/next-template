'use client';

import React, { ReactNode } from 'react';

import { When } from '../When';
import { doNothing } from '@/utils/functions/general';

type Props = {
  position?: 'center' | 'top' | 'bottom';
  closeOnBackDrop?: boolean;
  closeModal: () => void;
  children: ReactNode;
  className?: string;
  zIndex?: number;
  show: boolean;
};

export function Modal({
  position = 'center',
  closeOnBackDrop,
  zIndex = 999,
  closeModal,
  children,
  show,
}: Props) {
  return (
    <When value={show}>
      <div
        style={{ zIndex }}
        className={`animate-fadeInAnimation justify-center items-center flex fixed top-0 left-0 w-screen h-screen`}
      >
        <div
          className="w-full h-full bg-black opacity-70"
          onClick={closeOnBackDrop ? closeModal : doNothing}
        />
        <div
          style={{
            top: position === 'top' ? '0' : undefined,
            bottom: position === 'bottom' ? '0' : undefined,
          }}
          className={`absolute border-0 shadow-lg flex flex-col w-auto max-w-screen max-h-screen overscroll-contain`}
        >
          {children}
        </div>
      </div>
    </When>
  );
}
