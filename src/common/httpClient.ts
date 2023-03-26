import Axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import { jwtRequestInterceptor } from '@common/httpInterceptor/jwtRequestInterceptor';
import { responseInterceptor } from '@common/httpInterceptor';
import { tokenInterceptor } from '@common/httpInterceptor/tokenInterceptor';
import * as process from 'process';

/**
 *  * Basic
 *  * Security scheme type:  HTTP
 *  * HTTP Authorization Scheme  basic
 */

export const axiosHeaders = {
  // "Api-key":
  withCredentials: true
};
export const axiosSetting = {
  baseUrl: process.env.BASE_URL,
  scheme: process.env.NEXT_PUBLIC_SCHEME,
  host: process.env.NEXT_PUBLIC_HOST,
  server() {
    return `${this.scheme}://${this.host}/api/v1`;
  }
};

console.log('하이요ㅎㅎ헤헤', axiosSetting.host);
console.log('api server() -> ', axiosSetting.server());

export const api = Axios.create({ baseURL: axiosSetting.server(), headers: axiosHeaders });
triggerInterceptors();

export const HTTPREQUEST = async <T = any>(url: string, config: AxiosRequestConfig = {}) => {
  try {
    const response = await api(url, { ...config });
    return response.data;
  } catch (err: any) {
    return handleError(err);
  }
};

export const GET = async <T = any>(url: string, { params = {}, headers = {} } = {}) => {
  try {
    const response = await api.get(url, { params, headers });
    return response.data;
  } catch (err: any) {
    return handleError(err);
  }
};
export const POST = async <T = any>(url: string, data: object = {}, config: AxiosRequestConfig = {}) => {
  try {
    const response = await api.post<T>(url, data, config);
    return response.data;
  } catch (err: any) {
    return handleError(err);
  }
};

export const PUT = async <T = any>(url: string, data: object = {}, { params = {}, headers = {} } = {}) => {
  try {
    const response = await api.put<T>(url, data, { params, headers });
    return response.data;
  } catch (err: any) {
    return handleError(err);
  }
};

export const DELETE = async (url: string, data: object = {}) => {
  try {
    const response = await api.delete(url, { data });
    return response.data;
  } catch (err: any) {
    return handleError(err);
  }
};

const handleError = (err: AxiosError | any) => {
  if (err.response) {
    throw err.response;
  }

  throw err;
};

(function () {
  console.log('하이여');
  console.log('pm2 무중단 배포오 와카루데쇼카');
})();

function triggerInterceptors() {
  // request interceptors
  jwtRequestInterceptor();

  // response interceptors
  responseInterceptor();
  tokenInterceptor();
}
