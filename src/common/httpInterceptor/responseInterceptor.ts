import { api } from '@common/httpClient';
import { HttpError } from '@common/error';

export function responseInterceptor() {
  //TODO: 정확한 타입으로 수정
  api.interceptors.response.use((response: any) => {
    if ((!!response && response.status < 200) || response.status > 299) {
      return HttpError.fromRequest(response);
    }
    return response;
  });
}
