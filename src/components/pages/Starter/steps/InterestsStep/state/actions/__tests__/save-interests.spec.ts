/* eslint-disable max-len */
import authApi from 'api/auth';
import interestsApi from 'api/interests';
import { ApiErrorType } from 'api/base';
import { NotificationType, showNotification } from 'notifications';
import { Actions } from '../../reducer';
import saveInterests from '../save-interests';

jest.mock('api/auth');
jest.mock('api/interests');
jest.mock('notifications', () => ({
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  }
}));

const dispatch = jest.fn();
const updateUserInfo = jest.fn();
const push = jest.fn();

const interests = ['cat-1', 'cat-3', 'cat-5'];

describe('Starter page - Interests step - saveInterests action', () => {
  beforeEach(() => {
    dispatch.mockClear();
    updateUserInfo.mockClear();
    push.mockClear();
    // @ts-ignore
    authApi.updateProfile.mockClear();
    // @ts-ignore
    interestsApi.update.mockClear();
    // @ts-ignore
    showNotification.mockClear();
  });

  it('should call the api to set the user interests and update the profile', async () => {
    // @ts-ignore
    interestsApi.update.mockResolvedValue({});
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({ data: { id: 'user-id' } });

    await saveInterests(dispatch, interests, updateUserInfo, push)();

    expect(dispatch).toBeCalledTimes(1);
    expect(interestsApi.update).toHaveBeenCalledWith(interests);
    expect(authApi.updateProfile).toHaveBeenCalled();
    expect(updateUserInfo).toHaveBeenCalledWith({ id: 'user-id' });
    expect(push).toHaveBeenCalledWith('/app');
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your profile has been all set, enjoy the app',
    });
  });

  it('should call the api to set the user interests and show an error notification', async () => {
    // @ts-ignore
    interestsApi.update.mockRejectedValue({ errorType: 'error' });
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({ id: 'user-id' });

    await saveInterests(dispatch, interests, updateUserInfo, push)();

    expect(dispatch).toBeCalledTimes(2);
    expect(interestsApi.update).toHaveBeenCalledWith(interests);
    expect(authApi.updateProfile).not.toHaveBeenCalled();
    expect(updateUserInfo).not.toHaveBeenCalled();
    expect(push).not.toHaveBeenCalledWith();
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There has been an issue setting your interests',
    });
  });

  it('should call the api to set the user interests and dispatch an action to set the error', async () => {
    // @ts-ignore
    interestsApi.update.mockRejectedValue({ errorType: ApiErrorType.VALIDATION });
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({ id: 'user-id' });

    await saveInterests(dispatch, interests, updateUserInfo, push)();

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: Actions.SET_ERROR,
      payload: 'You need to select some interests',
    });
    expect(interestsApi.update).toHaveBeenCalledWith(interests);
    expect(authApi.updateProfile).not.toHaveBeenCalled();
    expect(updateUserInfo).not.toHaveBeenCalled();
    expect(push).not.toHaveBeenCalledWith();
    expect(showNotification).not.toHaveBeenCalled();
  });
});
