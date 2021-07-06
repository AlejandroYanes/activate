import { AxiosPromise } from 'axios';
import { EventModel } from 'models/event';
import { get, PagedResponse } from './base';

const eventsApi = {
  listMyUpcoming: (date: Date): AxiosPromise<PagedResponse<EventModel>> => {
    return get('upcoming_events', {
      params: {
        filters: {
          date: date.toISOString(),
        },
      },
    });
  },
  listMyUpcomingDates: (): AxiosPromise<PagedResponse<Date>> => {
    return get('upcoming_events/dates');
  },
  follow: (event: string): AxiosPromise => {
    return get(`event/${event}/follow`);
  },
  unfollow: (event: string): AxiosPromise => {
    return get(`events/${event}/unfollow`);
  }
};

export default eventsApi;
