'use client';

import React from 'react';

import { useMultiStepsForm } from './hooks/useMultiStepsForm';
import { MultiStepsFormObject } from './types';
import { CustomForm } from '../CustomForm';
import { twMerge } from 'tailwind-merge';

type Props<T extends string> = {
  onNextStep?: (data: any, stepValue: any, currentStepKey: string) => void;
  multiStepsFormObject: MultiStepsFormObject<T>;
  onFinalSubmit?: (data: any) => void | Promise<{ isSuccess: boolean } | void>;
  initialBackButton?: () => void;
  secureHashStore?: string;
  stepsOrder?: T[];
  persistData?: boolean;
  initialStep: T;
  formName?: string;
  initialData?: any;
  classNameForm?: string;
};

export function MultiStepsForm<T extends string>({
  multiStepsFormObject,
  initialBackButton,
  classNameForm,
  secureHashStore,
  onFinalSubmit,
  persistData,
  initialStep,
  initialData,
  stepsOrder,
  onNextStep,
  formName,
}: Props<T>) {
  const { currentStep, handleSubmit, currentStepKey, Render, formValues } = useMultiStepsForm<T>({
    multiStepsFormObject,
    initialBackButton,
    secureHashStore,
    onFinalSubmit,
    persistData,
    initialStep,
    initialData,
    stepsOrder,
    onNextStep,
    formName,
  });

  const { zodSchema, resetOnSubmit, useFormProps, loadDataFromKey } = currentStep ?? {};

  return (
    <CustomForm
      resetOnSubmit={resetOnSubmit}
      useFormProps={{
        values: loadDataFromKey ? formValues[loadDataFromKey] : formValues,
        ...useFormProps,
      }}
      onSubmit={handleSubmit}
      zodSchema={zodSchema}
      key={currentStepKey}
      classNameForm={twMerge('flex-1 items-center', classNameForm)}
    >
      {Render}
    </CustomForm>
  );
}
