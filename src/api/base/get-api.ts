import { ApiModel } from './types';
import { del, get, post, put } from './actions';

export function getApi<T = any>(
  endpoint: string,
): ApiModel<T> {
  return {
    get(id) {
      return get(`${endpoint}/${id}`, { authenticated: true });
    },
    list(params?) {
      return get(endpoint, { params, authenticated: true });
    },
    create(entity) {
      return post(endpoint, entity, { authenticated: true });
    },
    update(entity) {
      return put(`${endpoint}${entity.id}`, entity, { authenticated: true });
    },
    delete(param) {
      return del(`${endpoint}${param}`, { authenticated: true });
    }
  };
}
