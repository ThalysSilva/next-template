import { withAuthInstance } from '@/utils/functions/auth';
import { mountUrl } from '@/utils/functions/url';
import Axios, { AxiosRequestConfig } from 'axios';
import { Params, RoutesName } from '../types';
import { apiRoutes } from '../router';
import { baseUrl } from '@/config/service';

type RequestAxiosProps<PayloadType> = {
  selectedApi?: keyof typeof baseUrl;
  config?: AxiosRequestConfig;
  routeName: RoutesName;
  payload?: PayloadType;
  withAuth?: boolean;
  params?: Params;
  query?: Params;
};

export function useMiddleware() {
  async function requestAxios<ReturnDataType, PayloadType>({
    selectedApi = 'default',
    config = {},
    routeName,
    payload,
    params,
    query,
  }: RequestAxiosProps<PayloadType>) {
    const { method, uri, listenHeaders } = apiRoutes[routeName] as {
      listenHeaders?: string[];
      method: string;
      uri: string;
    };
    const request = Axios.create({
      ...config,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(config?.headers ?? {}),
      },
    });

    const urlWithParams = mountUrl(uri, baseUrl[selectedApi], params, query);

    if (!!listenHeaders && listenHeaders.includes('Authorization')) withAuthInstance(request);

    switch (method) {
      case 'GET':
        return request.get<ReturnDataType>(urlWithParams);
      case 'POST':
        return request.post<ReturnDataType>(urlWithParams, payload);
      case 'PUT':
        return request.put<ReturnDataType>(urlWithParams, payload);
      case 'DELETE':
        return request.delete<ReturnDataType>(urlWithParams);
      default:
        return request.get<ReturnDataType>(urlWithParams);
    }
  }

  return { requestAxios };
}
