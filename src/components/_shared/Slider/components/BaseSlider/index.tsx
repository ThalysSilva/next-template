import React, { ReactElement, forwardRef } from 'react';

import {
  SliderProps as SliderChakraProps,
  Slider as SliderChakra,
  SliderTrack as SliderTrackChakra,
  SliderThumb as SliderThumbChakra,
  SliderFilledTrack as SliderFilledTrackChakra,
  InputGroup,
} from '@chakra-ui/react';
import { twMerge } from 'tailwind-merge';
import colors from '@/styles/Theme/colors';
import { When } from '@/components/_shared/When';

export type BaseSliderProps = SliderChakraProps & {
  handleRightIconClick?: () => void;
  containerClassName?: string;
  onRightIcon?: ReactElement;
  inputClassName?: string;
  hideError?: boolean;
  anotherFields?: any;
  error?: string;
  label?: string;
};

export const Slider = forwardRef<HTMLInputElement, BaseSliderProps>((props, ref) => {
  const {
    containerClassName = '',
    inputClassName = '',
    variant = 'outline',
    anotherFields,
    onKeyDown,
    hideError,
    error,
    ...rest
  } = props;

  return (
    <div className={twMerge(`flex-col w-full min-w-fit ` + containerClassName)}>
      <InputGroup>
        <SliderChakra
          onKeyDown={onKeyDown}
          className={twMerge(`${inputClassName}`)}
          variant={variant}
          ref={ref}
          {...anotherFields}
          {...rest}
        >
          <SliderTrackChakra bg={'grey'}>
            <SliderFilledTrackChakra bg={colors.brand.secondary} />
          </SliderTrackChakra>
          <SliderThumbChakra boxSize={6} borderColor={colors.aux.S7} />
        </SliderChakra>
      </InputGroup>
      <When value={!hideError && error}>
        <div
          data-testid={'messageValidation'}
          className={'flex flex-row gap-2 items-center pl-4 h-max mt-2'}
        >
          <label className={'text-alerts-red font-light text-xs leading-4'}>{error}</label>
        </div>
      </When>
    </div>
  );
});
