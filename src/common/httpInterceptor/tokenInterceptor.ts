import { api, HTTPREQUEST, POST } from '@common/httpClient';
import axios, { AxiosError } from 'axios';
// import { STATUS_CODE } from '@type/fetch';
import { localStore } from '@common/localStore';
// import { ACCESS_TOKEN, REFRESH_TOKEN } from '@common/constant';

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  data: string | object;
}

interface Response {
  config: any;
  data: ErrorResponse;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export const tokenInterceptor = () => {
  api.interceptors.response.use(
    (response: any) => response,
    async (err: AxiosError<Response>) => {
      // const { response } = err;
      // if (response?.status === STATUS_CODE.ACCESS_TOKEN_EXPIRED) {
      //   const authorization = localStore.getItem(ACCESS_TOKEN);
      //   const refreshToken = localStore.getItem(REFRESH_TOKEN);
      //   if (!!authorization && !!refreshToken) {
      //     const res = await getNewToken(authorization, refreshToken);
      //     const newAccessToken = res.data.accessToken;
      //     localStore.setItem(ACCESS_TOKEN, newAccessToken);
      //     const requestUrl = response.config.url;
      //     const requestConfig = response.config;
      //     if (!requestUrl) return;
      //     return await HTTPREQUEST(requestUrl, requestConfig);
      //   }
      // } else {
      //   return Promise.reject(err);
      // }
      return Promise.reject(err);
    }
  );

  //   const getNewToken = async (accessToken: string, refreshToken: string) => {
  //     try {
  //       return await POST('/auth/token/refresh', {
  //         accessToken: accessToken,
  //         refreshToken: refreshToken
  //       });
  //     } catch (err: any) {
  //       if (err.status === STATUS_CODE.REFRESH_TOKEN_EXPIRED) {
  //         localStore.removeItem(ACCESS_TOKEN);
  //         localStore.removeItem(REFRESH_TOKEN);
  //       }
  //       return Promise.reject(err);
  //     }
  //   };
};
