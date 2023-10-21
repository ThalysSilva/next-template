'use client';

import React, { ChangeEvent } from 'react';

import { CustomRadioProps, InputRadio } from '../CustomInputs/InputRadio';
import { RegisterOptions } from 'react-hook-form';
import { useRadioGroup } from './hook/useRadioGroup';
import { ConnectForm } from '../ConnectForm';
import { ErrorLabel } from '../ErrorLabel';
import { Tooltip } from '@chakra-ui/react';
import InfoIcon from '@/assets/icons/Info';
import { Option } from '@/utils/types';
import { Text5 } from '../Texts';
import { When } from '../When';
import { twMerge } from 'tailwind-merge';

type Props = {
  customRef?: React.LegacyRef<HTMLInputElement>;
  onChange?: (e: ChangeEvent) => void;
  customRadioProps?: CustomRadioProps;
  classNameContainer?: string;
  hideMessageError?: boolean;
  classNameContent?: string;
  rules?: RegisterOptions;
  tooltipText?: string;
  options: Option[];
  label?: string;
  error?: string;
  name?: string;
  id?: string;
  labelClassName?: string;
  isDisabled?: boolean;
};

export function RadioGroup({
  hideMessageError = false,
  classNameContainer = '',
  onChange: onChangeProp,
  classNameContent = '',
  customRadioProps = {},
  error: errorProp,
  tooltipText,
  isDisabled,
  customRef,
  options,
  label,
  rules,
  name,
  id,
  labelClassName,
}: Props) {
  const { radioGroupRef } = useRadioGroup({ customRef });
  const currentId = id || name || 'radioGroup';
  return (
    <ConnectForm>
      {({ register, formState: { errors }, watch, setValue, trigger }) => {
        const { ref, onChange: onChangeHook, ...methods } = register(currentId, rules);
        const errorHook = (errors[currentId]?.message ?? '') as string;

        function onChange(e: ChangeEvent) {
          onChangeProp?.(e);
          onChangeHook(e);
        }

        const selectedValue = watch(currentId);

        return (
          <div className={`flex  flex-col ${classNameContainer}`}>
            <div className='flex gap-3 justify-center w-fit items-center'>
              <When value={label}>
                <Text5 className="mb-1 text-text-semiLight">{label}</Text5>
              </When>
              <When value={tooltipText}>
                <Tooltip
                  hasArrow
                  shadow={'dark-lg'}
                  maxWidth={'260px'}
                  p={5}
                  borderRadius={'lg'}
                  label={tooltipText}
                  bg={'white'}
                  color={'text.semiLight'}
                >
                  <span>
                    <InfoIcon />
                  </span>
                </Tooltip>
              </When>
            </div>

            <div className={twMerge(`flex flex-row ${classNameContent}`)}>
              <input
                {...methods}
                ref={(e) => {
                  ref(e);
                  radioGroupRef.current = e;
                }}
                onChange={onChange}
                type="hidden"
              />
              {options.map(({ label, value: optionValue }, idx) => {
                return (
                  <InputRadio
                    {...customRadioProps}
                    value={optionValue}
                    isDisabled={isDisabled}
                    onClick={() => {
                      setValue(currentId, optionValue);
                      trigger(currentId);
                    }}
                    checked={selectedValue === optionValue}
                    name={`${currentId}-options`}
                    key={idx}
                  >
                    <Text5 className={labelClassName}>{label}</Text5>
                  </InputRadio>
                );
              })}
            </div>
            <div className="flex">
              <ErrorLabel messageError={hideMessageError ? '' : errorProp || errorHook || ''} />
            </div>
          </div>
        );
      }}
    </ConnectForm>
  );
}
