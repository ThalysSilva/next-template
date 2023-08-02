import { DefaultResponse, Params, RoutesName } from '../types';
import useAxiosUtils from '@/utils/axios/hooks/useAxiosUtils';
import { useMiddleware } from '../middleware/useMiddleware';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { QueryOptions } from '@/@types/reactQuery';
import { baseUrl } from '@/constants/service';
import { useAuthContext } from '@/contexts/Auth';

export type CustomQueryProps<T> = {
  selectedApi?: keyof typeof baseUrl;
  onError?: (error: any) => void;
  onSuccess?: (data: DefaultResponse<T>) => void;
  queryOptions?: QueryOptions;
  notHandleError?: boolean;
  queriesKeys?: QueryKey;
  routeName: RoutesName;
  enabled?: boolean;
  params?: Params;
};

export function useCustomQuery<ReturnData>({
  queriesKeys = undefined,
  selectedApi = 'default',
  enabled = true,
  notHandleError,
  queryOptions,
  routeName,
  params,
  ...statusFunctions
}: CustomQueryProps<ReturnData>) {
  const { requestAxios } = useMiddleware();
  const { handleAxiosError } = useAxiosUtils();
  const { tryRefreshLogin } = useAuthContext();

  function onError(error: any) {
    const messageAuthorization = 'jwt must be provided';
    const { message } = error?.response?.data || {};

    if (message === messageAuthorization) {
      tryRefreshLogin({});
    }

    if (!notHandleError) handleAxiosError(error);
    if (statusFunctions.onError) onError(statusFunctions.onError);
  }

  function onSuccess(data: DefaultResponse<ReturnData>) {
    if (statusFunctions.onSuccess) statusFunctions.onSuccess(data);
  }
  function handleQuery() {
    return requestAxios<DefaultResponse<ReturnData>, null>({
      selectedApi,
      routeName,
      params,
    }).then((res) => res.data);
  }
  const query = useQuery(queriesKeys as QueryKey, handleQuery, {
    onSuccess,
    onError,
    enabled,
  });

  return query;
}
