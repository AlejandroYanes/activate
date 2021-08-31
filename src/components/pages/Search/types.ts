export interface SearchParam {
  type: string;
  term: SearchType;
}

export enum SearchType {
  EVENTS = 'events',
  PUBLISHERS = 'pubs',
  USERS = 'users',
}

export interface ResultPageProps {
  search: string;
}
