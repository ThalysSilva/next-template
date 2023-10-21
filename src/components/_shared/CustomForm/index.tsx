'use client';

import React, { ReactNode } from 'react';

import { SubmitErrorHandler, UseFormReturn } from 'react-hook-form';
import { UseFormProps } from 'react-hook-form';
import { useCustomForm } from './hooks/useForm';
import { FormProvider } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

type Props = {
  children:
    | ReactNode
    | ((props: { currentError?: string; formContext: UseFormReturn }) => ReactNode);
  useFormProps?: Omit<UseFormProps, 'resolver'>;
  onSubmit: (data: any) => void | Promise<void>;
  onError?: SubmitErrorHandler<any>;
  zodSchema?: z.ZodSchema<any>;
  resetOnSubmit?: boolean;
  classNameForm?: string;
};

export function CustomForm({
  onSubmit: onSubmitProp,
  resetOnSubmit = false,
  classNameForm = '',
  useFormProps,
  zodSchema,
  children,
  onError,
}: Props) {
  const { methods } = useCustomForm({ useFormProps, zodSchema });

  async function onSubmit(data: any) {
    await onSubmitProp(data);
    if (resetOnSubmit) methods.reset(undefined, { keepIsSubmitted: false });
  }

  const currentError = Object.values(methods.formState.errors)[0]?.message as string;

  return (
    <FormProvider {...methods}>
      <form
        className={twMerge('flex w-full flex-col ' + classNameForm)}
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        {typeof children === 'function'
          ? children({ formContext: methods, currentError })
          : children}
      </form>
    </FormProvider>
  );
}
