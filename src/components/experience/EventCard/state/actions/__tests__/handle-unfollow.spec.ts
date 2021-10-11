/* eslint-disable max-len */
import eventsApi from 'api/events';
import { NotificationType, showNotification } from 'notifications';
import handleUnfollow from '../handle-unfollow';

jest.mock('api/events');
jest.mock('notifications', () => ({
  showNotification: jest.fn(),
  NotificationType: {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
  }
}));

const setState = jest.fn((...params) => params);

describe('Event card - handle-unfollow action', () => {
  beforeEach(() => {
    setState.mockClear();
    // @ts-ignore
    showNotification.mockClear();
    // @ts-ignore
    eventsApi.unfollow.mockClear();
  });


  it('should call the API to unfollow the event and show a success notification', async () => {
    // @ts-ignore
    eventsApi.unfollow.mockResolvedValue();
    const event: any = { id: 'event-id', name: 'event-name' };

    await handleUnfollow(event, setState)();

    expect(eventsApi.unfollow).toHaveBeenCalledWith(event.id);
    expect(setState).toHaveBeenCalledWith({
      isBooked: false,
      showUnfollowModal: false,
    });
  });

  it('should call the API to unfollow the event and show an error notification', async () => {
    // @ts-ignore
    eventsApi.unfollow.mockRejectedValue();
    const event: any = { id: 'event-id', name: 'event-name' };

    await handleUnfollow(event, setState)();

    expect(eventsApi.unfollow).toHaveBeenCalledWith(event.id);
    expect(setState).not.toHaveBeenCalled();
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'We couldn\'t complete the request, please try again later.',
    })
  });
});
