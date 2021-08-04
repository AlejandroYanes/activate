/* eslint-disable max-len */
import eventsApi from 'api/events';
import { NotificationType, showNotification } from 'notifications';
import { EventState } from '../../';
import handleBookmark from '../handle-bookmark';

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

describe('Event card - handle-bookmark action', () => {
  beforeEach(() => {
    setState.mockClear();
    // @ts-ignore
    showNotification.mockClear();
    // @ts-ignore
    eventsApi.follow.mockClear();
  });

  it('should show the unfollow modal is the event is booked', () => {
    const event: any = { id: 'event-id' };
    const state: EventState = { isBooked: true, showUnfollowModal: false };

    handleBookmark(event, state, setState)();

    expect(setState).toHaveBeenCalledWith({
      isBooked: true,
      showUnfollowModal: true,
    });
    expect(eventsApi.follow).not.toHaveBeenCalled();
  });

  it('should call the API to follow the event and show a success notification', async () => {
    // @ts-ignore
    eventsApi.follow.mockResolvedValue();
    const event: any = { id: 'event-id', name: 'event-name' };
    const state: EventState = { isBooked: false, showUnfollowModal: false };

    await handleBookmark(event, state, setState)();

    expect(eventsApi.follow).toHaveBeenCalledWith(event.id);
    expect(setState).toHaveBeenCalledWith({
      isBooked: true,
      showUnfollowModal: false,
    });
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.SUCCESS,
      title: 'You are following the event:',
      message: event.name,
    })
  });

  it('should call the API to follow the event and show an error notification', async () => {
    // @ts-ignore
    eventsApi.follow.mockRejectedValue();
    const event: any = { id: 'event-id', name: 'event-name' };
    const state: EventState = { isBooked: false, showUnfollowModal: false };

    await handleBookmark(event, state, setState)();

    expect(eventsApi.follow).toHaveBeenCalledWith(event.id);
    expect(setState).not.toHaveBeenCalled();
    expect(showNotification).toHaveBeenCalledWith({
      type: NotificationType.ERROR,
      message: 'We couldn\'t complete the request, please try again later.',
    })
  });
});
