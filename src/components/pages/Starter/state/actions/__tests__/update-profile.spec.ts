/* eslint-disable max-len */
import authApi from 'api/auth';
import { ApiErrorType } from 'api/base';
import { VerificationLevel } from 'models/user';
import { NotificationType, showNotification } from 'notifications';
import { ProfilePayload, StarterActions } from '../../reducer';
import updateProfile from '../update-profile';

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
const setUserInfoMock = jest.fn();

describe('Starter page - update profile action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.updateProfile.mockClear();
    // @ts-ignore
    authApi.updateAvatar.mockClear();
    dispatchMock.mockClear();
    setUserInfoMock.mockClear();
  });

  it('should call the API to update the profile and dispatch a go_next_step action', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({
      data: { sub: 'user-id', token: 'token' },
    });

    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: 'user1',
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await updateProfile(dispatchMock, setUserInfoMock)(profile);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: StarterActions.START_API_CALL,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: StarterActions.GO_NEXT_STEP,
    });
    expect(authApi.updateProfile).toHaveBeenCalledWith({
      ...profile,
      verificationLevel: VerificationLevel.USER_INFO_ADDED,
    });
    expect(authApi.updateAvatar).not.toHaveBeenCalled();
    expect(setUserInfoMock).toHaveBeenCalledWith({
      sub: 'user-id',
      token: 'token',
    });
  });

  it('should call the API to update the profile, then update the avatar and dispatch a go_next_step action', async () => {
    // @ts-ignore
    authApi.updateProfile.mockResolvedValue({
      data: { sub: 'user-id', token: 'token' },
    });
    // @ts-ignore
    authApi.updateAvatar.mockResolvedValue({
      data: { sub: 'user-with-avatar', token: 'token' },
    });

    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: 'PHOTO',
      image: 'fake image' as any,
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await updateProfile(dispatchMock, setUserInfoMock)(profile);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: StarterActions.START_API_CALL,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: StarterActions.GO_NEXT_STEP,
    });
    expect(authApi.updateProfile).toHaveBeenCalled();
    expect(authApi.updateAvatar).toHaveBeenCalledWith('fake image');
    expect(setUserInfoMock).toHaveBeenCalledWith({
      sub: 'user-with-avatar',
      token: 'token',
    });
  });

  it('should call the API and show a notification if failed', async () => {
    // @ts-ignore
    authApi.updateProfile.mockRejectedValue({
      errorType: ApiErrorType.ERROR,
      errorMessage: 'error message',
    });

    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: 'user1',
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await updateProfile(dispatchMock, setUserInfoMock)(profile);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, {
      type: StarterActions.START_API_CALL,
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: StarterActions.FINISH_API_CALL,
    });
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'There has is been an issue with your profile',
    });
    expect(setUserInfoMock).not.toHaveBeenCalled();
  });
});
