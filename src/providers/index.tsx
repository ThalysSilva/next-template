'use client';
import React from 'react';
import {
  ChakraCacheProviderWrapper,
  ChakraProviderWrapper,
  QueryClientProviderWrapper,
} from './wrappers';
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
  ChakraCacheProviderWrapper,
  ChakraProviderWrapper,
);
