import { api } from '@common/httpClient';
import { AxiosHeaders, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { localStore } from '@common/localStore';

export const jwtRequestInterceptor = () => {
  api.interceptors.request.use(
    //@ts-ignore
    (config: InternalAxiosRequestConfig) => {
      // TODO: api endpoint 정해지면 수정
      const isApi = config.url?.includes('api/v1') || true;
      const isRefresh = config.url?.includes('auth/token/refresh');

      if (isRefresh) return config;
      if (isApi) {
        const accessToken = localStore.getItem('ACCESS_TOKEN');

        if (accessToken) {
          // config.headers = {
          //   ...config.headers,
          //   Authorization: `Bearer ${accessToken}`
          // };
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else {
          // TODO: 이걸 안넣으면 Bearer undefined로 들어가는 문제가 있었음 (로그인 안했을 때) -> 어디선가 헤더 주입해주는 곳이 있는지 확인 필요
          // config.headers = {
          //   ...config.headers,
          //   Authorization: ''
          // };
          config.headers['Authorization'] = '';
        }
      }

      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
};
