'use client';

import React from 'react';
import { useRouter } from 'next/router';

import ArrowLeftIcon from '@/assets/icons/ArrowLeft';
import { twMerge } from 'tailwind-merge';
import { useButton } from '../Button/hooks/useButton';
import { When } from '../When';

type Props = {
  children: React.ReactNode;
  onRedirect?: () => void;
  withoutArrow?: boolean;
  redirectTo?: string;
  isActive?: boolean;
  id?: string;
  className?: string;
};

export function RedirectButton({
  isActive: isActiveProps,
  withoutArrow,
  redirectTo,
  onRedirect,
  children,
  className,
}: Props) {
  const { getAnimation } = useButton();
  const { push } = useRouter();

  function handleRedirect() {
    onRedirect?.();
    if (redirectTo) push(redirectTo);
  }

  const isActive = isActiveProps;

  return (
    <button
      onClick={handleRedirect}
      className={twMerge(
        `flex w-full justify-between items-center rounded-md px-5 py-4 border ${
          isActive ? 'border-primary-500' : 'border-borderColor-light'
        } ${getAnimation()}`,
        className,
      )}
      style={{ backgroundColor: isActive ? 'rgba(54, 161, 172, 0.1)' : '' }}
    >
      <div className="flex w-fit text-white font-semibold text-start">{children}</div>
      <When value={!withoutArrow}>
        <span className="rotate-180">
          <ArrowLeftIcon />
        </span>
      </When>
    </button>
  );
}
