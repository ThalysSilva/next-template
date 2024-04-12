import { selectedTokenName } from '../../config/service';
import { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

export function withAuthInstance(request: AxiosInstance) {
  const { [selectedTokenName['base'] + 'access_token']: token } = parseCookies();
  request.interceptors.request.use(async (requestConfig) => {
    const newRequestConfigHeaders = {
      ...requestConfig.headers,
      Authorization: `Bearer ${token ?? ''}`,
    };

    const newRequestConfig = {
      ...requestConfig,
      headers: { ...newRequestConfigHeaders },
    } as typeof requestConfig;

    return newRequestConfig;
  });
}
