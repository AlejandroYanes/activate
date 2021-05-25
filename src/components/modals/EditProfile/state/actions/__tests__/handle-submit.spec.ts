/* eslint-disable max-len */
import { ApiErrorType } from 'api/base';
import { ProfileDto, VerificationLevel } from 'models/user';
import authApi from 'api/auth';
import { NotificationType, showNotification } from 'notifications';
import { validateEntity } from 'helpers';
import { ProfilePayload } from 'components/pages/Starter/state';
import handleSubmit from '../handle-submit';
import { ProfileFormActions } from '../../reducer';
import { profileRules } from '../../rules';
import { AvatarOptions } from '../../types';

jest.mock('api/auth');
jest.mock('notifications', () => ({
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  }
}));
const dispatchMock = jest.fn();
const updateUserInfoMock = jest.fn();
const closeModalMock = jest.fn();

describe('Edit Profile modal - handle submit action', () => {
  beforeEach(() => {
    dispatchMock.mockClear();
    updateUserInfoMock.mockClear();
    closeModalMock.mockClear();
    // @ts-ignore
    authApi.updateProfile.mockClear();
    // @ts-ignore
    authApi.updateAvatar.mockClear();
  });

  it('should validate the profile and dispatch set_errors action', async () => {
    const profile: any = {
      email: 'email',
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await handleSubmit(
      dispatchMock,
      profile,
      undefined,
      updateUserInfoMock,
      closeModalMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ProfileFormActions.SET_ERRORS,
      payload: validateEntity(profile, profileRules).errors,
    });
  });

  it('should call the updateProfile API action with the profile and update user info', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({ data: { sub: 'user-id' } });
    const profile: ProfileDto = {
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: 'user1',
    };

    await handleSubmit(
      dispatchMock,
      profile,
      undefined,
      updateUserInfoMock,
      closeModalMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your profile has been updated.',
    });
    expect(updateUserInfoMock).toHaveBeenCalledWith({ sub: 'user-id' });
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('should call the updateProfile and updateAvatar API actions and update the user info', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({});
    // @ts-ignore
    authApi.updateAvatar.mockResolvedValue({ data: { sub: 'user-id-with-avatar' } });
    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: AvatarOptions.PHOTO,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(
      dispatchMock,
      profile,
      imageFile,
      updateUserInfoMock,
      closeModalMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(authApi.updateAvatar).toHaveBeenCalledWith(imageFile);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      message: 'Your profile has been updated.',
    });
    expect(updateUserInfoMock).toHaveBeenCalledWith({ sub: 'user-id-with-avatar' });
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('should call the updateProfile and updateAvatar API actions and show a notification of error', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({});
    // @ts-ignore
    authApi.updateAvatar.mockRejectedValue({
      errorType: ApiErrorType.ERROR,
    });
    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: AvatarOptions.PHOTO,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(
      dispatchMock,
      profile,
      imageFile,
      updateUserInfoMock,
      closeModalMock,
    )();

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(authApi.updateProfile).toHaveBeenCalledWith(profile);
    expect(authApi.updateAvatar).toHaveBeenCalledWith(imageFile);
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There has is been an issue with your profile',
    });
    expect(updateUserInfoMock).not.toHaveBeenCalled();
    expect(closeModalMock).not.toHaveBeenCalled();
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
    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: AvatarOptions.PHOTO,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(
      dispatchMock,
      profile,
      imageFile,
      updateUserInfoMock,
      closeModalMock,
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
    expect(closeModalMock).not.toHaveBeenCalled();
  });
});
