'use client';

import React, { ComponentProps, ReactNode } from 'react';

import { InputCheckbox } from '../CustomInputs/InputCheckbox';
import { useCheckboxGroup } from './hook/useCheckboxGroup';
import { ErrorLabel } from '../ErrorLabel';
import { Tooltip } from '@chakra-ui/react';
import InfoIcon from '@/assets/icons/Info';
import { twMerge } from 'tailwind-merge';
import { Option } from '@/utils/types';
import { Text5 } from '../Texts';
import { When } from '../When';

type Props<OptionValue extends string, OptionType extends Option<OptionValue>> = {
  customCheckboxProps?: Omit<
    ComponentProps<typeof InputCheckbox>,
    'customRef' | 'withoutControl' | 'onClick'
  >;
  refineCheckboxContentFn?: ({
    option,
    isActive,
  }: {
    option: OptionType;
    isActive: boolean;
  }) => ReactNode;
  onChange?: (newArrayValue: string[]) => void;
  exclusiveCheckValue?: OptionType['value'];
  defaultValues?: OptionValue[];
  classNameContainer?: string;
  hideMessageError?: boolean;
  classNameContent?: string;
  withoutControl?: boolean;
  values?: OptionValue[];
  options: OptionType[];
  tooltipText?: string;
  label?: string;
  error?: string;
  name?: string;
  id?: string;
};

export function CheckboxGroup<OptionValue extends string, OptionType extends Option<OptionValue>>({
  hideMessageError = false,
  customCheckboxProps = {},
  classNameContainer = '',
  refineCheckboxContentFn,
  classNameContent = '',
  exclusiveCheckValue,
  withoutControl = true,
  defaultValues,
  tooltipText,
  onChange,
  options,
  values,
  label,
  error,
  name,
  id,
}: Props<OptionValue, OptionType>) {
  const currentId = id || name || 'checkboxGroup';
  const { handleCheckboxChange, selectedValues } = useCheckboxGroup<OptionValue, OptionType>({
    exclusiveCheckValue,
    defaultValues,
    onChange,
    values,
  });

  return (
    <div className={`flex  flex-col ${classNameContainer}`}>
      <div className="flex w-fit items-center justify-center gap-3">
        <When value={label}>
          <Text5 className="mb-1 text-text-semiLight">{label}</Text5>
        </When>
        <When value={tooltipText}>
          <Tooltip
            color={'text.semiLight'}
            borderRadius={'lg'}
            label={tooltipText}
            shadow={'dark-lg'}
            maxWidth={'260px'}
            bg={'white'}
            hasArrow
            p={5}
          >
            <span>
              <InfoIcon />
            </span>
          </Tooltip>
        </When>
      </div>

      <div className={twMerge(`flex flex-col ${classNameContent}`)}>
        {options.map((option, idx) => {
          const isChecked = selectedValues.includes(option.value);
          return (
            <InputCheckbox
              {...customCheckboxProps}
              onClick={() => handleCheckboxChange(option.value)}
              withoutControl={withoutControl}
              name={`${currentId}-options`}
              defaultCheck={isChecked}
              value={option.value}
              key={idx}
            >
              <When
                value={refineCheckboxContentFn}
                render={refineCheckboxContentFn?.({ option, isActive: isChecked })}
                elseRender={<Text5>{label}</Text5>}
              />
            </InputCheckbox>
          );
        })}
      </div>
      <div className="flex">
        <ErrorLabel messageError={hideMessageError ? '' : error} />
      </div>
    </div>
  );
}
