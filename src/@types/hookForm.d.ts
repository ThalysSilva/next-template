import { GlobalError } from 'react-hook-form/dist/types';

export type ErrorsHookForm = Record<string, GlobalError> & GlobalError;

export type ErrorHookForm = GlobalError;
