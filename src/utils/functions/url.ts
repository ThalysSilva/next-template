import { Params } from '@/services/types';
import { stringify } from 'qs';

export function replaceParams(url: string, params: Params) {
  const urlWithParams = Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replaceAll(`:${key}`, value.toString());
  }, url);
  return urlWithParams;
}

export function mountUrl(url: string, baseUrl: string, params?: Params, query?: Params) {
  const urlApi = baseUrl;
  const urlWithParams = params ? replaceParams(url, params) : url;
  const queryString = query ? '?' + stringify(query) : '';

  const completedUrl = urlApi + urlWithParams + queryString;

  return completedUrl;
}
