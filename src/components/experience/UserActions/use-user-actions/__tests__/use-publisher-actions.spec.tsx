import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import usersApi from 'api/users';
import usePublisherActions from '../use-publisher-actions';

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
    usersApi.follow.mockResolvedValue({});
    // @ts-ignore
    usersApi.mutePublisher.mockResolvedValue({});
    // @ts-ignore
    usersApi.unmutePublisher.mockResolvedValue({});
    // @ts-ignore
    usersApi.blockPublisher.mockResolvedValue({});
    // @ts-ignore
    usersApi.unfollow.mockResolvedValue({});

    const { result } = renderHook(
      () => usePublisherActions('query-key', 'user-id'),
      { wrapper },
    );

    const [
      follow,
      mute,
      unmute,
      block,
      unfollow,
    ] = result.current;

    follow();
    expect(usersApi.follow).toHaveBeenCalled();

    mute();
    expect(usersApi.mutePublisher).toHaveBeenCalled();

    unmute();
    expect(usersApi.unmutePublisher).toHaveBeenCalled();

    block();
    expect(usersApi.blockPublisher).toHaveBeenCalled();

    unfollow();
    expect(usersApi.unfollow).toHaveBeenCalled();
  });
});
