/* eslint-disable max-len */
import usersApi from 'api/users';
import follow from '../follow';

jest.mock('api/users');

const setFollowing = jest.fn();

describe('Publisher Card - follow action', () => {
  beforeEach(() => {
    setFollowing.mockClear();
    // @ts-ignore
    usersApi.follow.mockClear();
  });

  it('should set following to true and call the API', async () => {
    // @ts-ignore
    usersApi.follow.mockResolvedValue({});
    const publisher = { id: 'id', name: 'name' };
    await follow(publisher as any, setFollowing)();

    expect(setFollowing).toHaveBeenCalledWith(true);
    expect(usersApi.follow).toHaveBeenCalledWith('id');
  });

  it('should set following to true and set it back to false when the API call fails', async () => {
    // @ts-ignore
    usersApi.follow.mockRejectedValue({});
    const publisher = { id: 'id', name: 'name' };
    await follow(publisher as any, setFollowing)();

    expect(setFollowing).toHaveBeenNthCalledWith(1, true);
    expect(setFollowing).toHaveBeenNthCalledWith(2, false);
    expect(usersApi.follow).toHaveBeenCalledWith('id');
  });
});
