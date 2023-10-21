import { ReactNode } from 'react';
import { UseFormProps } from 'react-hook-form/dist/types';
import { ZodSchema } from 'zod';

export type MultiStepsUtils<T = string> = {
  forceGoToStep: (step?: T) => Promise<void> | void;
};

export type StepFormObject<T = string> = {
  onSubmit?: (data: any, onSubmitUtils: MultiStepsUtils<T>) => void;
  refineDataToSubmit?: (data: any) => promise<object | void>;
  render: ReactNode | ((data: any, renderUtils: MultiStepsUtils<T>) => ReactNode);
  useFormProps?: Omit<UseFormProps, 'resolver'>;
  refineInitialData?: (data: any) => any;
  onRender?: (data: any) => void;
  customBackButton?: (data: any, backButtonUtils: MultiStepsUtils<T>) => void;
  zodSchema?: ZodSchema<any>;
  disableNextStep?: boolean;
  loadDataFromKey?: string;
  resetOnSubmit?: boolean;
  _depreciated_nextStepKey?: T | null;
};

export type MultiStepsFormObject<T extends string> = Record<T, StepFormObject<T>>;
