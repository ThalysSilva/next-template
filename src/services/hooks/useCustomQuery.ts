import { Params, RoutesName } from '../types';
import { useMiddleware } from '../middleware/useMiddleware';
import { QueryOptions } from '@/@types/reactQuery';
import { baseUrl } from '@/config/service';
import { useQuery } from '@tanstack/react-query';

export type CustomQueryProps<T> = {
  selectedApi?: keyof typeof baseUrl;
  queryOptions?: QueryOptions<T, any, T, readonly unknown[]>;
  notHandleError?: boolean;
  queriesKeys: readonly unknown[];
  routeName: RoutesName;
  enabled?: boolean;
  params?: Params;
  query?: Params;
};

export function useCustomQuery<ReturnData>({
  queriesKeys,
  selectedApi = 'default',
  enabled = true,
  queryOptions,
  routeName,
  params,
  query,
}: CustomQueryProps<ReturnData>) {
  const { requestAxios } = useMiddleware();
  function handleQuery() {
    return requestAxios<ReturnData, null>({
      selectedApi,
      routeName,
      params,
      query,
    }).then((res) => res.data);
  }
  const returnQuery = useQuery<ReturnData, any>({
    queryKey: queriesKeys,
    queryFn: handleQuery,
    ...queryOptions,
    enabled,
  });

  return returnQuery;
}
