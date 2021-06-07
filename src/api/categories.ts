import { AxiosResponse } from 'axios';
import { CategoryModel } from 'models/category';
import { get, ListResponseModel } from './base';

const endpoint = 'categories';

const categoriesApi = {
  list: (): Promise<AxiosResponse<ListResponseModel<CategoryModel>>> => {
    return get(endpoint);
  },
  getTree: (): Promise<AxiosResponse<ListResponseModel<CategoryModel>>> => {
    return get(`${endpoint}/tree`);
  },
};

export default categoriesApi;
