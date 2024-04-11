import React, { forwardRef, useEffect, useState } from 'react';

import { TextareaProps as TextAreaChakraProps, Textarea as TextAreaChakra } from '@chakra-ui/react';
import { twMerge } from 'tailwind-merge';
import { When } from '@/components/When';
import { Text5 } from '@/components/Texts';

export type BaseTextAreaProps = TextAreaChakraProps & {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  containerClassName?: string;
  textAreaClassName?: string;
  hideError?: boolean;
  anotherFields?: any;
  error?: string;
  label?: string;
  labelClassName?: string;
  textColor?: string;
};

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>((props, ref) => {
  const [charLen, setCharLen] = useState(0);
  useEffect(() => {
    if (typeof props.defaultValue === 'string') {
      setCharLen(props.defaultValue.length);
    }
  }, [props.defaultValue]);

  const {
    containerClassName = '',
    textAreaClassName = '',
    variant = 'outline',
    anotherFields,
    onKeyDown,
    hideError,
    error,
    label,
    labelClassName,
    textColor,
    onChange,
    ...rest
  } = props;

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharLen(e.target.value.length);
    onChange?.(e);
  }

  return (
    <div className={twMerge(`flex flex-col w-full min-w-fit ` + containerClassName)}>
      <When value={label}>
        <Text5 className={'mb-1 ' + labelClassName}>{label}</Text5>
      </When>
      <TextAreaChakra
        focusBorderColor={variant === 'flushed' ? 'brand.secondary' : 'borderColor.primary'}
        onKeyDown={onKeyDown}
        className={twMerge(`max-h-[200px] ${textAreaClassName}`)}
        style={{ color: textColor ?? '' }}
        onChange={handleOnChange}
        variant={variant}
        ref={ref}
        {...anotherFields}
        {...rest}
      />

      <div className="flex w-full flex-row justify-between">
        <div className="flex w-[90%] flex-row">
          <When value={!hideError && error}>
            <div
              data-testid={'messageValidation'}
              className={'flex flex-row gap-2 items-center pl-4 h-max mt-2'}
            >
              <label className={'text-alerts-red font-light text-xs leading-4'}>{error}</label>
            </div>
          </When>
        </div>
        <When value={rest.maxLength}>
          <div className={'flex flex-row gap-2 items-center pr-4 h-max mt-2'}>
            <label className={'text-[#646981] font-light text-xs leading-4'}>
              {charLen}/{rest.maxLength}
            </label>
          </div>
        </When>
      </div>
    </div>
  );
});
