import React, { ReactNode, useEffect, useState } from 'react';

import { doNothing } from '@/utils/functions/general';
import { Input, InputProps } from '../../Input';
import CheckIcon from '@/assets/icons/Check';
import colors from '@/styles/Theme/colors';
import { twMerge } from 'tailwind-merge';
import { When } from '../../When';

type Props = Omit<InputProps, 'containerClassName'> & {
  containerClassName?: ((isActive: any) => string) | string;
  colorScheme?: 'primary' | 'secondary';
  backgroundColorOnSelected?: string;
  controlledCheck?: boolean;
  colorIconScheme?: string;
  checkIconHeight?: string;
  withTransition?: boolean;
  checkClassName?: string;
  checkIconWidth?: string;
  defaultCheck?: boolean;
  primaryLight?: boolean;
  boxClassName?: string;
  children?: ReactNode;
  onClick?: () => void;
  id?: string;
};

export function InputCheckbox({
  containerClassName: containerClassNameProp,
  colorIconScheme = '#ffffff',
  backgroundColorOnSelected,
  colorScheme = 'primary',
  defaultCheck = false,
  withTransition = true,
  withoutControl = true,
  checkIconHeight,
  controlledCheck,
  checkClassName,
  checkIconWidth,
  primaryLight,
  boxClassName,
  isDisabled,
  children,
  onClick,
  id,
  ...rest
}: Props) {
  const [checkedState, setCheckedState] = useState(defaultCheck);
  const colorSchemeForCheckIcon = colorScheme === 'primary' ? 'secondary' : 'primary';
  const checked = controlledCheck ?? checkedState;

  const containerClassName: string =
    typeof containerClassNameProp === 'function'
      ? containerClassNameProp(checked)
      : containerClassNameProp ?? '';

  useEffect(() => {
    setCheckedState(defaultCheck);
  }, [defaultCheck]);

  const colorSelected = {
    secondary: 'bg-brand-secondary border-brand-secondary',
    primary: primaryLight
      ? 'bg-brand-primaryLight border-brand-primaryLight'
      : 'bg-brand-primary border-brand-primary',
  };

  function handleClick() {
    if (isDisabled) return;
    if (onClick) onClick();
    setCheckedState((prev) => !prev);
  }
  return (
    <div
      style={{
        backgroundColor: backgroundColorOnSelected && checked ? backgroundColorOnSelected : '',
      }}
      onClick={handleClick}
      className={twMerge(
        `flex items-center gap-2 w-fit 
        ${withTransition ? 'transition duration-200 delay-200' : ''}
        ${isDisabled ? ' opacity-30' : 'cursor-pointer'} `,
        containerClassName,
      )}
    >
      <Input
        id={id}
        type={'hidden'}
        checked={checked}
        onChange={doNothing}
        hideError
        withoutControl={withoutControl}
        {...rest}
      />
      <span
        className={twMerge(
          `flex justify-center border-2 items-center w-5 h-5  rounded-sm min-w-9 
          ${withTransition ? 'transition transform duration-200 delay-200' : ''}
       ${
         checked
           ? colorSelected[colorScheme]
           : primaryLight
           ? 'border-brand-primaryLight'
           : 'border-brand-primary'
       }
      `,
          boxClassName,
        )}
      >
        <div
          className={twMerge(
            ` w-9 h-9 grid place-items-center
            ${withTransition ? 'transition transform duration-200 delay-200' : ''}
            ${checked ? 'scale-100' : 'scale-0'}
            `,
            checkClassName,
          )}
        >
          <CheckIcon
            fill={colorIconScheme ? colorIconScheme : colors.brand[colorSchemeForCheckIcon]}
            height={checkIconHeight || '25'}
            width={checkIconWidth || '15'}
          />
        </div>
      </span>
      <When value={children}>{children}</When>
    </div>
  );
}
