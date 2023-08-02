import { apiRoutes } from './router';

export type RoutesName = keyof typeof apiRoutes;

export type HttpMethods = 'POST' | 'GET' | ' UPDATE' | 'DELETE' | 'PATCH';

export type DefaultResponse<T> = {
  success: boolean;
  message?: any;
  data: T;
  [key: string]: any;
};

export type ApiRouterObject = {
  [key: string]: {
    headers?: Record<string, string>
    listenHeaders?: string[];
    method: HttpMethods;
    uri: string;
  };
};

export type Params = Record<string, string | string[] | number | number[]>;
