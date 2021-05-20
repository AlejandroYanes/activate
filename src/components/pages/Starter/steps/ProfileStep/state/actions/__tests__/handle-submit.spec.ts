/* eslint-disable max-len */
import { ApiErrorType } from 'api/base';
import { VerificationLevel } from 'models/user';
import { validateEntity } from 'helpers';
import { ProfilePayload } from 'components/pages/Starter/state';
import handleSubmit from '../handle-submit';
import { ProfileStepActions } from '../../reducer';
import { profileRules } from '../../rules';
import { AvatarOptions } from '../../types';

const dispatchMock = jest.fn();
const onNextMock = jest.fn();

describe('Starter page - Profile step - handle submit action', () => {
  beforeEach(() => {
    dispatchMock.mockClear();
    onNextMock.mockClear();
  });

  it('should validate the profile and dispatch set_errors action', async () => {
    const profile: any = {
      email: 'email',
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await handleSubmit(dispatchMock, profile, undefined, onNextMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ProfileStepActions.SET_ERRORS,
      payload: validateEntity(profile, profileRules).errors,
    });
  });

  it('should call the onNext function with the profile', async () => {
    onNextMock.mockResolvedValue({});
    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: 'user1',
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };

    await handleSubmit(dispatchMock, profile, undefined, onNextMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(0);
    expect(onNextMock).toHaveBeenCalledWith({ ...profile, image: undefined });
  });

  it('should call the onNext function with the profile and dispatch an set_errors action', async () => {
    onNextMock.mockResolvedValue({
      errorType: ApiErrorType.VALIDATION,
      validationErrors: {
        lastName: 'error',
        userName: 'error',
      },
    });
    const profile: ProfilePayload = {
      email: 'email',
      name: 'user',
      lastName: 'last name',
      userName: 'user.name',
      avatar: AvatarOptions.PHOTO,
      verificationLevel: VerificationLevel.CODE_VERIFIED,
    };
    const imageFile = new File([], 'test');

    await handleSubmit(dispatchMock, profile, imageFile, onNextMock)();

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: ProfileStepActions.SET_ERRORS,
      payload: {
        lastName: 'error',
        userName: 'error',
      },
    });
    expect(onNextMock).toHaveBeenCalledWith({ ...profile, image: imageFile });
  });
});
