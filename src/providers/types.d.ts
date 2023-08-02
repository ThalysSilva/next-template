import { ComponentType } from 'react';

export type ProviderProps = {
  children: ReactNode;
};

export type ProviderComponent = ComponentType<ProviderProps>;

export type ComposeProviders = (
  ...providers: ProviderComponent[]
) => (props: ProviderProps) => ReactNode;
