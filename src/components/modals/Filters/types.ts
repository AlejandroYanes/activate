import { SelectOption } from 'activate-components';

export enum EventLocation {
  OnLine = 'OnLine',
  All = 'All',
  OnSite = 'OnSite',
}

export interface Filters {
  location: EventLocation;
  address: string;
  category: SelectOption[];
  date: Date[];
}

export const initialFilters: Filters = {
  location: EventLocation.All,
  address: '',
  category: [],
  date: [],
};
