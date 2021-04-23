import axios from 'axios';
import { generateQueryString, QueryParams } from 'helpers';
import { ApiContentType } from './types';

const { REACT_APP_API_URL } = process.env;

interface GetOptions {
  params?: QueryParams;
  authenticated?: boolean;
  headers?: { [key: string]: string };
}

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  paramsSerializer: generateQueryString
});

export function get(endpoint: string, options: GetOptions = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.get(endpoint, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${window.sessionStorage.getItem('token')}`
          : ''
      ),
      ...headers,
    },
  });
}

export function post(endpoint: string, data: any, options: GetOptions = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.post(endpoint, data, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${window.sessionStorage.getItem('token')}`
          : ''
      ),
      ...headers,
    },
  });
}

export function put(endpoint: string, data: any, options: GetOptions = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.put(endpoint, data, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${window.sessionStorage.getItem('token')}`
          : ''
      ),
      ...headers,
    },
  });
}

export function del(endpoint: string, options: GetOptions = {}) {
  const { headers, params, authenticated } = options;

  return axiosInstance.delete(endpoint, {
    params,
    headers: {
      'Content-Type': ApiContentType.JSON,
      'Authorization': (
        authenticated
          ? `Bearer ${window.sessionStorage.getItem('token')}`
          : ''
      ),
      ...headers,
    },
  });
}
