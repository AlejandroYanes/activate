import authApi from 'api/auth';
import { SocialAuthCredentials, SocialProvider } from 'models/user';
import authenticate from '../authenticate';
import { SocialSignStateActions } from '../../reducer';

jest.mock('api/auth');

const dispatchMock = jest.fn();

describe('Social Sign page - authenticate action', () => {
  beforeEach(() => {
    // @ts-ignore
    authApi.socialAuth.mockClear();
    // @ts-ignore
    dispatchMock.mockClear();
  });
  const credentials: SocialAuthCredentials = {
    provider: SocialProvider.Google,
    urlParams: 'params',
  };

  it('should call the API to sign-in and set user info on success', async () => {
    // @ts-ignore
    authApi.socialAuth.mockResolvedValue({
      data: {
        sub: 'user-id',
        token: 'token',
      },
    });

    await authenticate(
      dispatchMock,
    )(credentials);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: SocialSignStateActions.START_CALLING_API,
    });
    expect(authApi.socialAuth).toHaveBeenCalled();
  });
});
