/* eslint-disable max-len */
import usersApi from 'api/users';
import acceptFriendRequest from '../accept-friend-request';

jest.mock('api/users');

const setState = jest.fn();

describe('UserCard - acceptFriendRequest action', () => {
  beforeEach(() => {
    setState.mockClear();
    // @ts-ignore
    usersApi.acceptFriendRequest.mockClear();
  });

  it('should set "isMyFriend" state to true and accept the FR', async () => {
    // @ts-ignore
    usersApi.acceptFriendRequest.mockResolvedValue({});
    const user = { id: 'id', name: 'user' };
    await acceptFriendRequest(user as any, setState)();

    expect(setState).toHaveBeenCalledWith({
      isPending: false,
      isPendingForMe: false,
      isMyFriend: true,
    });
    expect(setState).toBeCalledTimes(1);
    expect(usersApi.acceptFriendRequest).toHaveBeenCalledWith('id');
  });

  it('should et "isMyFriend" state to true and set it back to false when the req fails', async () => {
    // @ts-ignore
    usersApi.acceptFriendRequest.mockRejectedValue({});
    const user = { id: 'id', name: 'user' };
    await acceptFriendRequest(user as any, setState)();

    expect(setState).toHaveBeenNthCalledWith(1, {
      isPending: false,
      isPendingForMe: false,
      isMyFriend: true,
    });
    expect(setState).toHaveBeenNthCalledWith(2, {
      isPending: false,
      isPendingForMe: true,
      isMyFriend: false,
    });
    expect(setState).toBeCalledTimes(2);
    expect(usersApi.acceptFriendRequest).toHaveBeenCalledWith('id');
  });
});
