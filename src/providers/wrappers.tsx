import React from 'react';

import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '@tanstack/react-query';

import { CacheProvider, CacheProviderProps } from '@chakra-ui/next-js';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { ProviderProps } from './types';
import { theme } from '@/styles/Theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function QueryClientProviderWrapper(props: ProviderProps) {
  const { children } = props;
  const queryClientProviderProps: QueryClientProviderProps = {
    client: queryClient,
    children,
  };

  return <QueryClientProvider {...queryClientProviderProps} />;
}

export function ChakraProviderWrapper(props: ProviderProps) {
  const { children } = props;
  const ChakraProviderProps: ChakraProviderProps = {
    theme: theme,
    children,
  };

  return <ChakraProvider {...ChakraProviderProps} />;
}

export function ChakraCacheProviderWrapper(props: ProviderProps) {
  const { children } = props;
  const ChakraProviderProps: CacheProviderProps = {
    children,
  };

  return <CacheProvider {...ChakraProviderProps} />;
}
