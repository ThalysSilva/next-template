import { useState } from 'react';
import { Option } from '@/utils/types';

type Props<OptionValue extends string, OptionType extends Option<OptionValue>> = {
  onChange?: (newArrayValue: string[]) => void;
  exclusiveCheckValue?: OptionType['value'];
  defaultValues?: OptionValue[];
  values?: OptionValue[];
};

export function useCheckboxGroup<
  OptionValue extends string,
  OptionType extends Option<OptionValue>,
>({ exclusiveCheckValue, defaultValues = [], onChange, values }: Props<OptionValue, OptionType>) {
  const [defaultSelectedValues, setDefaultSelectedValues] = useState(defaultValues);

  const actualValues = values ? values : defaultSelectedValues;

  function changeValues(newValues: OptionValue[]) {
    onChange?.(newValues);
    setDefaultSelectedValues(newValues);
  }

  function handleCheckboxChange(currentValue: OptionValue) {
    const isExclusiveCheckValue = currentValue === exclusiveCheckValue;

    if (exclusiveCheckValue) {
      if (isExclusiveCheckValue) {
        if (actualValues.includes(exclusiveCheckValue)) {
          return changeValues([]);
        }

        return changeValues([currentValue]);
      } else {
        if (actualValues.includes(exclusiveCheckValue)) {
          return changeValues([currentValue]);
        }
        if (!actualValues.includes(exclusiveCheckValue)) {
          if (!actualValues.includes(currentValue)) {
            return changeValues([...actualValues, currentValue]);
          }
          return changeValues(actualValues.filter((value: string) => value !== currentValue));
        }
      }
    }

    if (!defaultSelectedValues.includes(currentValue)) {
      return changeValues([...defaultSelectedValues, currentValue]);
    }
    return changeValues(defaultSelectedValues.filter((value: string) => value !== currentValue));
  }

  return {
    handleCheckboxChange,
    selectedValues: values ? values : defaultSelectedValues,
  };
}
