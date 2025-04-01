import type {
  UseQueryOptions,
  QueryKey,
  QueryFunction,
  UseQueryResult,
} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AppError } from '@/types/error';

type CustomQueryOptions<TData, TQueryKey extends QueryKey> = {
  queryKey: TQueryKey;
  queryFn: QueryFunction<TData, TQueryKey>;
  errorTranslationKey?: string;
} & Omit<UseQueryOptions<TData, AppError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;

export function useCustomQuery<TData = unknown, TQueryKey extends QueryKey = QueryKey>(
  options: CustomQueryOptions<TData, TQueryKey>,
): UseQueryResult<TData, AppError> {
  const { ...queryOptions } = options;

  return useQuery({
    ...queryOptions,
    meta: {
      ...queryOptions.meta,
      useErrorBoundary: true,
    },
  });
}
