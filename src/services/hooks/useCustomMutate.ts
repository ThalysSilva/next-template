import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useMiddleware } from '../middleware/useMiddleware';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { Params, RoutesName } from '../types';
import useAxiosUtils from '../../utils/axios/hooks/useAxiosUtils';
import { MutateOptions } from '../../@types/reactQuery';

export type CustomMutationProps<T = any> = {
  mutateOptions?: MutateOptions<T, any, any, any>;
  multiInvalidateQueriesKeys?: unknown[][];
  onError?: (error: AxiosError<T>) => void;
  axiosConfig?: AxiosRequestConfig<any>;
  invalidateQueriesKeys?: unknown[];
  onSuccess?: (data?: T) => void;
  showSnackbarOnError?: boolean;
  setQueriesKeys?: unknown[];
  routeName: RoutesName;
};

export function useCustomMutate<ReturnData, Payload = any>({
  multiInvalidateQueriesKeys,
  invalidateQueriesKeys,
  showSnackbarOnError = true,
  axiosConfig = {},
  setQueriesKeys,
  mutateOptions,
  routeName,
  ...statusFunctions
}: CustomMutationProps<ReturnData>) {
  const { handleAxiosError } = useAxiosUtils();
  const { requestAxios } = useMiddleware();
  const queryClient = useQueryClient();

  function onError(error: AxiosError<ReturnData, null>) {
    if (showSnackbarOnError) handleAxiosError(error);

    statusFunctions.onError?.(error);
  }

  function onSuccess(data: ReturnData) {
    queryClient.invalidateQueries({
      queryKey: invalidateQueriesKeys,
      refetchType: 'all',
    });
    multiInvalidateQueriesKeys?.forEach((key) => {
      queryClient.invalidateQueries({ queryKey: key, refetchType: 'all' });
    });
    if (setQueriesKeys) queryClient.setQueryData(setQueriesKeys, data);
    statusFunctions.onSuccess?.(data);
  }

  async function handleMutate({ payload, params }: { payload?: Payload; params?: Params }) {
    const { data } = await requestAxios<ReturnData, typeof payload>({
      config: axiosConfig,
      routeName,
      payload,
      params,
    });
    return data;
  }

  return useMutation({
    mutationFn: handleMutate,
    ...mutateOptions,
    onSuccess,
    onError,
  });
}
