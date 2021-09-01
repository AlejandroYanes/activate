/* eslint-disable max-len */
import usersApi from 'api/users';
import sendFriendRequest from '../send-friend-request';

jest.mock('api/users');

const setState = jest.fn();

describe('UserCard - sendFriendRequest action', () => {
  beforeEach(() => {
    setState.mockClear();
    // @ts-ignore
    usersApi.sendFriendRequest.mockClear();
  });

  it('should set "isPending" state to true and send the FR', async () => {
    // @ts-ignore
    usersApi.sendFriendRequest.mockResolvedValue({});
    const user = { id: 'id', name: 'user' };
    await sendFriendRequest(user as any, setState)();

    expect(setState).toHaveBeenCalledWith({
      isPending: true,
      isPendingForMe: false,
      isMyFriend: false,
    });
    expect(setState).toBeCalledTimes(1);
    expect(usersApi.sendFriendRequest).toHaveBeenCalledWith('id');
  });

  it('should set "isPending" state to true and set it back to false when the req fails', async () => {
    // @ts-ignore
    usersApi.sendFriendRequest.mockRejectedValue({});
    const user = { id: 'id', name: 'user' };
    await sendFriendRequest(user as any, setState)();

    expect(setState).toHaveBeenNthCalledWith(1, {
      isPending: true,
      isPendingForMe: false,
      isMyFriend: false,
    });
    expect(setState).toHaveBeenNthCalledWith(2, {
      isPending: false,
      isPendingForMe: false,
      isMyFriend: false,
    });
    expect(setState).toBeCalledTimes(2);
    expect(usersApi.sendFriendRequest).toHaveBeenCalledWith('id');
  });
});
