'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { useButton } from './hooks/useButton';
import { Spinner } from '@chakra-ui/react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
  className?: string;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
};

export function Button({
  className = '',
  dataTestId,
  isDisabled,
  isOutlined,
  isLoading,
  children,
  onClick,
  type,
  ...rest
}: ButtonProps) {
  const { getAnimation } = useButton();

  const styleButton = isOutlined
    ? 'flex items-center justify-center gap-2 px-3 h-10 border  bg-transparent text-white border-borderColor-secondary rounded-md text-lg font-normal '
    : 'flex items-center justify-center gap-2 px-3 h-10 bg-brand-secondary  text-brand-primary rounded-md text-lg font-semibold ';

  return (
    <button
      {...rest}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      data-testid={dataTestId}
      type={type}
      className={twMerge(styleButton + getAnimation(isDisabled), className)}
    >
      {isLoading ? (
        <>
          <span className="font-normal text-lg text-inherit leading-6">{`Carregando`}</span>
          <Spinner />
        </>
      ) : (
        children
      )}
    </button>
  );
}
