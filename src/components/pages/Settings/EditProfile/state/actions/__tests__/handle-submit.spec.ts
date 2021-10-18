/* eslint-disable max-len */
import {
  NotificationType,
  showNotification,
  validateEntity,
} from 'activate-components';
import { ApiErrorType } from 'api/base';
import { ProfileDto, VerificationLevel } from 'models/user';
import authApi from 'api/auth';
import { ProfileFormActions, AvatarOptions } from '../../';
import handleSubmit from '../handle-submit';

jest.mock('api/auth');
jest.mock('activate-components', () => ({
  validateEntity: jest.fn(),
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  },
  RuleType: {
    Required: 'Required',
    MinLength: 'MinLength',
    MaxLength: 'MaxLength',
    Min: 'Min',
    Max: 'Max',
    Email: 'Email',
    WebSite: 'WebSite',
    MatchRegExp: 'MatchRegExp',
  },
  commonRules: {},
}));
const dispatchMock = jest.fn();
const updateUserInfoMock = jest.fn();

describe('Edit Profile Section - handle submit action', () => {
  beforeEach(() => {
    dispatchMock.mockClear();
    updateUserInfoMock.mockClear();
    // @ts-ignore
    authApi.updateProfile.mockClear();
    // @ts-ignore
    authApi.updateAvatar.mockClear();
    // @ts-ignore
    validateEntity.mockClear();
    // @ts-ignore
    validateEntity.mockReturnValue({
      hasErrors: false,
      errors: null,
    });
  });

  it('should validate the profile and dispatch set_errors action', async () => {
    // @ts-ignore
    validateEntity.mockReturnValueOnce({
      hasErrors: true,
      errors: { field: 'error' },
    });
    const profile: any = {
      email: 'email',
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await handleSubmit(
      dispatchMock,
      profile,
      undefined,
      updateUserInfoMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ProfileFormActions.SET_ERRORS,
      payload: { field: 'error' },
    });
  });

  it('should call the updateProfile API action with the profile and update user info', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({ data: { sub: 'user-id' } });
    const profile: ProfileDto = {
      name: 'user',
      lastName: 'last name',
      userName: 'username',
      email: 'a@a.com',
      avatar: 'user1',
    };

    await handleSubmit(
      dispatchMock,
      profile,
      undefined,
      updateUserInfoMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your profile has been updated.',
    });
    expect(updateUserInfoMock).toHaveBeenCalledWith({ sub: 'user-id' });
  });

  it('should call the updateProfile and updateAvatar API actions and update the user info', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({});
    // @ts-ignore
    authApi.updateAvatar.mockResolvedValue({ data: { sub: 'user-id-with-avatar' } });
    const profile: ProfileDto = {
      email: 'a@a.com',
      name: 'user',
      lastName: 'last name',
      userName: 'username',
      avatar: AvatarOptions.PHOTO,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(
      dispatchMock,
      profile,
      imageFile,
      updateUserInfoMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(authApi.updateAvatar).toHaveBeenCalledWith(imageFile);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your profile has been updated.',
    });
    expect(updateUserInfoMock).toHaveBeenCalledWith({ sub: 'user-id-with-avatar' });
  });

  it('should call the updateProfile and updateAvatar API actions and show a notification of error', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({});
    // @ts-ignore
    authApi.updateAvatar.mockRejectedValue({
      errorType: ApiErrorType.ERROR,
    });
    const profile: ProfileDto = {
      email: 'a@a.com',
      name: 'user',
      lastName: 'last name',
      userName: 'username',
      avatar: AvatarOptions.PHOTO,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(
      dispatchMock,
      profile,
      imageFile,
      updateUserInfoMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(authApi.updateAvatar).toHaveBeenCalledWith(imageFile);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There has is been an issue with your profile',
    });
    expect(updateUserInfoMock).not.toHaveBeenCalled();
  });

  it('should call the updateProfile API action and dispatch an action to set validation errors', async () => {
    // @ts-ignore
    authApi.updateProfile.mockRejectedValue({
      errorType: ApiErrorType.VALIDATION,
      validationErrors: {
        name: 'error msg',
        lastName: 'error msg',
      },
    });
    const profile: ProfileDto = {
      email: 'a@a.com',
      name: 'user',
      lastName: 'last name',
      userName: 'username',
      avatar: AvatarOptions.PHOTO,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(
      dispatchMock,
      profile,
      imageFile,
      updateUserInfoMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: ProfileFormActions.SET_ERRORS,
      payload: {
        name: 'error msg',
        lastName: 'error msg',
      },
    });
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(authApi.updateAvatar).not.toHaveBeenCalled();
    expect(showNotification).not.toHaveBeenCalled();
    expect(updateUserInfoMock).not.toHaveBeenCalled();
  });
});
