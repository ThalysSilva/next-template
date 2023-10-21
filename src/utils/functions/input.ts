import React from 'react';
import { createMask, FactoryArg } from 'imask';
import { UseFormReturn } from 'react-hook-form';
import { iterateObject } from './object';
import { ErrorHookForm, ErrorsHookForm } from '@/@types/hookForm';

export function formatInput(
  event: React.ChangeEvent<HTMLInputElement>,
  maskOptions: FactoryArg,
  hookFormMethods?: UseFormReturn,
) {
  const elementId = event.target.id;
  const masked = createMask(maskOptions).resolve(event.target.value);

  if (hookFormMethods) {
    const {
      formState: { errors },
      setValue,
    } = hookFormMethods;
    const error = iterateObject<ErrorHookForm>(
      elementId.split('.'),
      errors as ErrorsHookForm,
    )?.message;
    const shouldValidate = !!error;

    setValue(elementId, masked, { shouldValidate });
  }

  return { masked, unmasked: event.target.value };
}
