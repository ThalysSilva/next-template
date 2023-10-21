'use client';

import React from 'react';

import { RegisterOptions } from 'react-hook-form';
import { ErrorHookForm, ErrorsHookForm } from '@/@types/hookForm';
import { iterateObject } from '@/utils/functions/object';
import { Controller } from 'react-hook-form';
import { ConnectForm } from '../ConnectForm';
import { useSlider } from './hook/useSlider';
import { When } from '../When';
import { SliderProps as SliderChakraProps } from '@chakra-ui/react';
import { Slider, BaseSliderProps } from './components/BaseSlider';

export type SliderProps = Omit<BaseSliderProps, 'ref'> &
  SliderChakraProps & {
    customRef?: React.LegacyRef<HTMLInputElement>;
    preventEnterSubmit?: boolean;
    rules?: RegisterOptions;
    withoutControl?: boolean;
  };

export function SliderForm({
  preventEnterSubmit = true,
  onKeyDown: onKeyDownProp,
  withoutControl = false,
  onChange: onChangeProp,
  variant = 'outline',
  error: errorProp,
  defaultValue,
  min,
  max,
  step,
  customRef,
  hideError,
  rules,
  label,
  name,
  id,
  ...rest
}: SliderProps) {
  const currentId = id || name || 'Switch';
  const { switchRef } = useSlider({ customRef });
  return (
    <>
      <When value={!withoutControl}>
        <ConnectForm>
          {({ control, formState }) => {
            const id = currentId;
            const idParts = id.split('.');
            const errors = formState?.errors ?? {};
            const hasControlError = iterateObject<ErrorHookForm>(idParts, errors as ErrorsHookForm);
            const error = hasControlError?.message || errorProp;

            return (
              <Controller
                defaultValue={defaultValue || ''}
                control={control}
                rules={rules}
                name={id}
                render={({ field: { ref, onChange, value, ...fields } }) => {
                  function handleChange(event: number) {
                    onChange(event);
                    onChangeProp?.(event);
                  }
                  function handleRef(e: HTMLInputElement) {
                    ref(e);
                    switchRef.current = e;
                  }

                  return (
                    <Slider
                      defaultValue={defaultValue}
                      min={min}
                      max={max}
                      step={step}                    
                      onChange={handleChange}
                      anotherFields={fields}
                      hideError={hideError}
                      variant={variant}
                      ref={handleRef}
                      error={error}
                      {...rest}
                    />
                  );
                }}
              />
            );
          }}
        </ConnectForm>
      </When>
      <When value={withoutControl}>
        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          onChange={onChangeProp}
          hideError={hideError}
          error={errorProp}
          variant={variant}
          ref={switchRef}
          label={label}
          {...rest}
        />
      </When>
    </>
  );
}