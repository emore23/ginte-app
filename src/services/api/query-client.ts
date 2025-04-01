import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: (failureCount, error: unknown) => {
        if (typeof error === 'object' && error !== null && 'response' in error) {
          const apiError = error as { response?: { status?: number } };
          if (apiError.response?.status === 404) return false;
        }
        return failureCount <= 1;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

queryClient.getQueryCache().config.onError = (error) => {
  console.error('Global query error:', error);
};

queryClient.getMutationCache().config.onError = (error) => {
  console.error('Global mutation error:', error);
};
