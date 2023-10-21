'use client';

import React from 'react';

import { Select as SelectChakra, SelectProps as SelectChakraProps } from '@chakra-ui/react';
import { ConnectForm } from '../ConnectForm';
import { Controller } from 'react-hook-form';
import { ErrorLabel } from '../ErrorLabel';
import { Option } from '@/utils/types';
import { Text5 } from '../Texts';
import { When } from '../When';
import { twMerge } from 'tailwind-merge';

type Props = SelectChakraProps & {
  options: Option[];
  error?: string;
  label?: string;
  containerClassName?: string;
};

export function Select({
  options,
  error: errorProps,
  label,
  variant,
  containerClassName,
  ...rest
}: Props) {
  return (
    <ConnectForm>
      {({ control, formState }) => {
        const id = rest.id || rest.name || '';
        const error = (errorProps ?? formState.errors[id]?.message ?? '') as string;
        return (
          <Controller
            name={rest.id || rest.name || 'select'}
            control={control}
            render={({ field }) => (
              <div className={twMerge('flex flex-col w-full min-w-fit', containerClassName)}>
                <When value={label}>
                  <Text5 className="mb-1 text-text-semiLight">{label}</Text5>
                </When>
                <SelectChakra
                  color={'text.semiLight'}
                  
                  opacity={rest.opacity ?? 0.9}
                  _placeholder={{ color: '#B0B3C0' }}
                  focusBorderColor={'borderColor.light'}
                  borderColor={'borderColor.light'}
                  borderRadius={'lg'}
                  pointerEvents={rest.isReadOnly ? 'none' : 'auto'}
                  bg={'transparent'}
                  variant={variant}
                  {...field}
                  {...rest}
                >
                  {options.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </SelectChakra>
                <ErrorLabel messageError={error} />
              </div>
            )}
          />
        );
      }}
    </ConnectForm>
  );
}
