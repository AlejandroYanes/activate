/* eslint-disable max-len */
import usersApi from 'api/users';
import { showNotification } from 'notifications';
import updateRelation, { Actions, UserType } from '../update-relation';

jest.mock('api/users');
jest.mock('notifications', () => ({
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  }
}));

describe('User Actions - updateRelation', () => {
  it('should call the right api action and invalidate the corresponding query', async () => {
    // @ts-ignore
    usersApi.acceptFriendRequest.mockResolvedValue({});
    // @ts-ignore
    usersApi.follow.mockResolvedValue({});

    const queryClient = {
      invalidateQueries: jest.fn(),
    };

    await updateRelation(
      queryClient,
      'query-key',
      'user-id',
      UserType.CONSUMER,
      Actions.ACCEPT_REQUEST,
    );

    expect(usersApi.acceptFriendRequest).toHaveBeenCalledWith('user-id');
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith('query-key');
    expect(showNotification).not.toHaveBeenCalled();

    await updateRelation(
      queryClient,
      'query-key-2',
      'user-id-2',
      UserType.PUBLISHER,
      Actions.FOLLOW,
    );

    expect(usersApi.follow).toHaveBeenCalledWith('user-id-2');
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith('query-key-2');
    expect(showNotification).not.toHaveBeenCalled();
  });

  it('should call the right api action and show a notification on fail', async () => {
    // @ts-ignore
    usersApi.acceptFriendRequest.mockRejectedValue({});

    const queryClient = {
      invalidateQueries: jest.fn(),
    };

    await updateRelation(
      queryClient,
      'query-key',
      'user-id',
      UserType.CONSUMER,
      Actions.ACCEPT_REQUEST,
    );

    expect(usersApi.acceptFriendRequest).toHaveBeenCalledWith('user-id');
    expect(queryClient.invalidateQueries).not.toHaveBeenCalled();
    expect(showNotification).toHaveBeenCalled();
  });
});
