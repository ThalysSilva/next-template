import React from 'react';

import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '@tanstack/react-query';
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
