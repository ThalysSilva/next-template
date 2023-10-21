'use client';

import { useCustomQuery } from '@/services/hooks/useCustomQuery';
import { useFormSteps } from './useFormSteps';
import { GetCepData } from '@/services/types/returnData';

type Props = {
  cepId: string;
  enabled?: boolean;
};

export function useCepInfoQueryServices({ cepId, enabled = true }: Props) {
  const {
    hookFormContext: { watch },
  } = useFormSteps();
  const cep = watch(cepId)?.replace(/[^\d]+/g, '');

  const isValidCep = !!cep && cep.length === 8;
  const { data: cepData, isLoading: isLoadingCep } = useCustomQuery<GetCepData>({
    routeName: 'getCep',
    selectedApi: 'cep',
    enabled: enabled && isValidCep,
    params: { cep },
    queriesKeys: ['current-cep', cep],
  });
  return { cepData, isLoadingCep };
}
