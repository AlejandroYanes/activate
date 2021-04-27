import axios from 'axios';
import { generateQueryString, QueryParams, getAuthToken } from 'helpers';
import { ApiContentType } from './types';

const { REACT_APP_API_URL } = process.env;

interface Options {
  params?: QueryParams;
  authenticated?: boolean;
  headers?: { [key: string]: string };
}

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  paramsSerializer: generateQueryString
});

axiosInstance.interceptors.response.use(
  undefined,
  (error) => {
    const { response: { data } } = error;
    return Promise.reject(data);
  },
);

export function get(endpoint: string, options: Options = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.get(endpoint, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${getAuthToken()}`
          : ''
      ),
      ...headers,
    },
  });
}

export function post(endpoint: string, data: any, options: Options = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.post(endpoint, data, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${getAuthToken()}`
          : ''
      ),
      ...headers,
    },
  });
}

export function put(endpoint: string, data: any, options: Options = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.put(endpoint, data, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${getAuthToken()}`
          : ''
      ),
      ...headers,
    },
  });
}

export function del(endpoint: string, options: Options = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.delete(endpoint, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${getAuthToken()}`
          : ''
      ),
      ...headers,
    },
  });
}
