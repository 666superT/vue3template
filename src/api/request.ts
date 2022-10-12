import axios, { AxiosRequestConfig, Canceler } from "axios";

interface IRequest {
  requestId: string;
  cancel: Canceler;
}

/**
 * 请求列表
 */
let requests: Array<IRequest> = [];

/**
 * 取消请求
 * @param config
 */
const deleteRequestItem = (config: AxiosRequestConfig) => {
  const requestId = config.url + "&" + config.method + "&" + config.params + "&" + config.data;
  requests.forEach((item, i) => {
    if (item.requestId === requestId) {
      requests[i].cancel();
      requests.splice(i, 1);
    }
  });
};

/**
 * 创建请求对象
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config) => {
    deleteRequestItem(config);
    config.cancelToken = new axios.CancelToken((cancel) => {
      const requestId = config.url + "&" + config.method + "&" + config.params + "&" + config.data;
      requests.push({
        requestId: requestId,
        cancel: cancel,
      });
    });
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  async (response) => {
    deleteRequestItem(response.config);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
