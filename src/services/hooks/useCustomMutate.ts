import { useQueryClient, useMutation, QueryKey } from '@tanstack/react-query';
import { DefaultResponse, Params, RoutesName } from '../types';
import useAxiosUtils from '@/utils/axios/hooks/useAxiosUtils';
import { useMiddleware } from '../middleware/useMiddleware';
import { ButtonProps } from '@/utils/types';
import { AxiosError, AxiosRequestConfig } from 'axios';

export type CustomMutationProps<T = any> = {
  axiosConfig?: AxiosRequestConfig<any>;
  invalidateQueriesKeys?: QueryKey;
  onError?: (error: any) => void;
  setQueriesKeys?: string[];
  onSuccess?: (data?: DefaultResponse<T>) => void;
  routeName: RoutesName;
  notHandleError?: boolean;
  onErrorOptions?: {
    customMessageError?: string;
    actionButtons?: {
      primary?: ButtonProps;
      secondary?: ButtonProps;
    };
  };
};

export function useCustomMutate<ReturnData, Payload = any>({
  invalidateQueriesKeys,
  onErrorOptions = {},
  axiosConfig = {},
  notHandleError,
  setQueriesKeys,
  routeName,
  ...statusFunctions
}: CustomMutationProps<ReturnData>) {
  const { requestAxios } = useMiddleware();
  const queryClient = useQueryClient();
  const { handleAxiosError } = useAxiosUtils();

  function onError(error: AxiosError<any>) {
    if (!notHandleError) {
      handleAxiosError(error, {
        customMessage: onErrorOptions.customMessageError,
        actionButtons: onErrorOptions.actionButtons,
      });
    }

    statusFunctions.onError?.(error);
  }

  function onSuccess(data: DefaultResponse<ReturnData>) {
    queryClient.invalidateQueries(invalidateQueriesKeys);
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

  return useMutation(handleMutate, {
    onSuccess: (data) => onSuccess(data),
    onError,
  });
}
