import { useQueryClient, useMutation } from '@tanstack/react-query';
import { DefaultResponse, Params, RoutesName } from '../types';
import useAxiosUtils from '@/utils/axios/hooks/useAxiosUtils';
import { useMiddleware } from '../middleware/useMiddleware';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { MutateOptions } from '@/@types/reactQuery';

export type CustomMutationProps<T = any> = {
  multiInvalidateQueriesKeys?: unknown[][];
  axiosConfig?: AxiosRequestConfig<any>;
  invalidateQueriesKeys?: unknown[];
  onError?: (error: any) => void;
  setQueriesKeys?: unknown[];
  onSuccess?: (data?: DefaultResponse<T>) => void;
  routeName: RoutesName;
  notHandleError?: boolean;
  mutateOptions?: MutateOptions<DefaultResponse<T>, any, any, any>;
  onErrorOptions?: {
    customMessageError?: string;
  };
};

export function useCustomMutate<ReturnData, Payload = any>({
  multiInvalidateQueriesKeys,
  invalidateQueriesKeys,
  onErrorOptions = {},
  axiosConfig = {},
  notHandleError,
  setQueriesKeys,
  mutateOptions,
  routeName,
  ...statusFunctions
}: CustomMutationProps<ReturnData>) {
  const { requestAxios } = useMiddleware();
  const queryClient = useQueryClient();
  const { handleAxiosError } = useAxiosUtils();

  function onError(error: AxiosError<any>) {
    if (!notHandleError) {
      handleAxiosError(error);
    }

    statusFunctions.onError?.(error);
  }

  function onSuccess(data: DefaultResponse<ReturnData>) {
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

  function handleMutate({ payload, params }: { payload?: Payload; params?: Params }) {
    return requestAxios<DefaultResponse<ReturnData>, typeof payload>({
      config: axiosConfig,
      routeName,
      payload,
      params,
    }).then((res) => res.data);
  }

  return useMutation({
    mutationFn: handleMutate,
    ...mutateOptions,
    onSuccess,
    onError,
  });
}
