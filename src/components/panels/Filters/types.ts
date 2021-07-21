import { SelectOption } from 'components/base-components/Inputs/Select';
import { Icons } from 'components/base-components/SvgIcon';

export enum Sorter {
  DEFAULT = 'Auto',
  FRIENDS = 'Friends',
  HOT = 'Trending',
  DATE = 'By Date',
  LOCATION = 'Near Me',
}

export enum EventLocation {
  OnLine = 'OnLine',
  All = 'All',
  OnSite = 'OnSite',
}

export interface Filters {
  location: EventLocation,
  address: string,
  category: SelectOption[],
  date: Date[],
}

export const initialFilters: Filters = {
  location: EventLocation.All,
  address: '',
  category: [],
  date: [],
};

export const sorterIconMap: { [sorter: string]: Icons } = {
  [Sorter.DEFAULT]: 'FILTER',
  [Sorter.HOT]: 'FIRE',
  [Sorter.DATE]: 'CALENDAR',
  [Sorter.FRIENDS]: 'USERS',
  [Sorter.LOCATION]: 'MAP_PIN',
};
