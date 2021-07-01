import { AxiosResponse } from 'axios';
import { UpdateModel } from '../models/update';
import { get } from './base';

const updatesApi = {
  listMyUpdates: (): Promise<AxiosResponse<UpdateModel[]>> => {
    return get('activities');
  },
};

export default updatesApi;
