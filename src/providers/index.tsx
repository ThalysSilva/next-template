import React from 'react';
import { ChakraProviderWrapper, QueryClientProviderWrapper } from './wrappers';
import { ProviderComponent, ProviderProps } from './types';

const composeProviders = (...providers: ProviderComponent[]): ProviderComponent => {
  return (props: ProviderProps) => {
    return providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children,
    );
  };
};

export const Providers = composeProviders(
  QueryClientProviderWrapper,
  ChakraProviderWrapper,
);
