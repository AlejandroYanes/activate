import { AxiosResponse } from 'axios';
import { QueryParams } from 'helpers/query-params';

export enum ApiContentType {
  JSON = 'application/json',
  MULTIPART = 'multipart/form-data',
}

export enum ErrorType {
  ERROR = 'error',
  VALIDATION = 'validation',
}

export interface ApiErrorResponse {
  errorType: ErrorType,
  errorMessage?: string;
  validationErrors?: { [field: string]: string[] };
}

export interface ListResponseModel<T = any> {
  results: T[];
  count: number;
}

export interface ApiModel<T = any> {
  get?: (param: string | number) => Promise<AxiosResponse<T>>;
  list?: (params?: QueryParams) => Promise<AxiosResponse<ListResponseModel<T>>>;
  create?: (payload) => Promise<AxiosResponse>;
  update?: (payload) => Promise<AxiosResponse>;
  delete?: (param: string | number) => Promise<AxiosResponse>;
}
