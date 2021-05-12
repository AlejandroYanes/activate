import { UserInfo } from 'models/user';

export function storeAuthToken(token: string) {
  window.sessionStorage.setItem('token', token);
}

export function getAuthToken() {
  return window.sessionStorage.getItem('token');
}

export function storeUserInfo(userInfo: UserInfo) {
  window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
}

export function getUserInfo(): UserInfo {
  return JSON.parse(window.sessionStorage.getItem('userInfo'));
}
