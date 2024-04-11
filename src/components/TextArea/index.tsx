'use client';

import React from 'react';

import { RegisterOptions } from 'react-hook-form';
import { ErrorHookForm, ErrorsHookForm } from '@/@types/hookForm';
import { iterateObject } from '@/utils/functions/object';
import { Controller } from 'react-hook-form';
import { ConnectForm } from '../ConnectForm';
import { When } from '../When';
import { TextareaProps as TextAreaChakraProps } from '@chakra-ui/react';
import { useTextArea } from './hooks/useTextarea';
import { BaseTextArea, BaseTextAreaProps } from './components/BaseTextArea';

export type TextAreaProps = Omit<BaseTextAreaProps, 'ref'> &
  TextAreaChakraProps & {
    customRef?: React.LegacyRef<HTMLTextAreaElement>;
    preventEnterSubmit?: boolean;
    withoutControl?: boolean;
    rules?: RegisterOptions;
    hideError?: boolean;
    error?: string;
    label?: string;
    labelClassName?: string;
    textColor?: string;
  };

export function TextArea({
  preventEnterSubmit = true,
  onKeyDown: onKeyDownProp,
  withoutControl = false,
  onChange: onChangeProp,
  variant = 'outline',
  error: errorProp,
  defaultValue,
  customRef,
  hideError,
  rules,
  label,
  labelClassName,
  textColor,
  ...rest
}: TextAreaProps) {
  const { textAreaRef, onKeyDown } = useTextArea({ customRef, preventEnterSubmit, onKeyDownProp });
  return (
    <>
      <When value={!withoutControl}>
        <ConnectForm>
          {({ control, formState }) => {
            const id = rest.id || rest.name || 'textArea';
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
                render={({ field: { ref, onChange, ...fields } }) => {
                  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
                    onChange(e);
                    onChangeProp?.(e);
                  }
                  function handleRef(e: HTMLTextAreaElement) {
                    ref(e);
                    textAreaRef.current = e;
                  }
                  return (
                    <BaseTextArea
                      labelClassName={labelClassName}
                      onChange={handleChange}
                      anotherFields={fields}
                      onKeyDown={onKeyDown}
                      hideError={hideError}
                      textColor={textColor}
                      variant={variant}
                      ref={handleRef}
                      error={error}
                      label={label}
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
        <BaseTextArea
          defaultValue={defaultValue}
          onChange={onChangeProp}
          onKeyDown={onKeyDown}
          hideError={hideError}
          error={errorProp}
          variant={variant}
          ref={textAreaRef}
          label={label}
          {...rest}
        />
      </When>
    </>
  );
}
