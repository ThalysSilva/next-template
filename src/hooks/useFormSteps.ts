'use client';

import { FieldValues, useFormContext } from 'react-hook-form';
import config from '@/config';
import { useRouter } from 'next/router';
import { useSecureUtils } from './useSecureUtils';

export function useFormSteps<T extends FieldValues>() {
  const messageValidations = config.messages.validations;
  const hookFormContext = useFormContext<T>();
  const { push } = useRouter();
  const { destroyEncryptedData, secretKey } = useSecureUtils({ defaultHash: '123' });

  function handleCancel(storeKeysToErase?: string[]) {
    storeKeysToErase?.forEach((key) => {
      destroyEncryptedData(key, secretKey);
      destroyEncryptedData(key);
    });
    push('/');
  }

  const {
    formState: { errors },
  } = hookFormContext;

  const error = Object.values(errors)[0]?.message as string;

  return {
    messageValidations,
    hookFormContext,
    handleCancel,
    error,
  };
}
