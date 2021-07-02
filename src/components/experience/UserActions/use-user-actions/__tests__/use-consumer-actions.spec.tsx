import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import usersApi from 'api/users';
import useConsumerActions from '../use-consumer-actions';

jest.mock('api/users');

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('User Actions - useConsumerActions', () => {
  it('should return all possible actions', () => {
    // @ts-ignore
    usersApi.sendFriendRequest.mockResolvedValue({});
    // @ts-ignore
    usersApi.acceptFriendRequest.mockResolvedValue({});
    // @ts-ignore
    usersApi.declineFriendRequest.mockResolvedValue({});
    // @ts-ignore
    usersApi.muteFriend.mockResolvedValue({});
    // @ts-ignore
    usersApi.unmuteFriend.mockResolvedValue({});
    // @ts-ignore
    usersApi.blockFriend.mockResolvedValue({});
    // @ts-ignore
    usersApi.unfriend.mockResolvedValue({});

    const { result } = renderHook(
      () => useConsumerActions('query-key', 'user-id'),
      { wrapper },
    );

    const [
      addFriend,
      acceptFriend,
      declineFriend,
      mute,
      unmute,
      block,
      unfriend,
    ] = result.current;

    addFriend();
    expect(usersApi.sendFriendRequest).toHaveBeenCalled();

    acceptFriend();
    expect(usersApi.acceptFriendRequest).toHaveBeenCalled();

    declineFriend();
    expect(usersApi.declineFriendRequest).toHaveBeenCalled();

    mute();
    expect(usersApi.muteFriend).toHaveBeenCalled();

    unmute();
    expect(usersApi.unmuteFriend).toHaveBeenCalled();

    block();
    expect(usersApi.blockFriend).toHaveBeenCalled();

    unfriend();
    expect(usersApi.unfriend).toHaveBeenCalled();
  });
});
