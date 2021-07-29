import { AxiosPromise } from 'axios';
import { EventModel } from 'models/event';
import { get, PagedResponse } from './base';

const eventsApi = {
  listMyUpcoming: (date: Date): AxiosPromise<PagedResponse<EventModel>> => {
    return get('events/upcoming', {
      params: {
        filters: {
          date: date.toISOString(),
        },
      },
    });
  },
  listMyUpcomingDates: (): AxiosPromise<PagedResponse<Date>> => {
    return get('events/upcoming/dates');
  },
  discover: (date?: Date): AxiosPromise<EventModel[]> => {
    return get('events/discover', {
      params: {
        filters: {
          date: date?.toISOString(),
        },
      },
    });
  },
  follow: (event: string): AxiosPromise => {
    return get(`events/${event}/follow`);
  },
  unfollow: (event: string): AxiosPromise => {
    return get(`events/${event}/unfollow`);
  }
};

export default eventsApi;
