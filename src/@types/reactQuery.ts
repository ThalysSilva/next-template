import { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export type QueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn' | 'initialData' | 'onSuccess' | 'onError' | 'enabled'
> & {
  initialData?: () => undefined;
};

export type MutateOptions<TData, TError, TVariables, TContext> = Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationFn' | 'onSuccess' | 'onError'
>;
