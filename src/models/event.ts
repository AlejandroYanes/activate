export interface EventModel {
  id: string;
  name: string;
  date: Date;
  image: string;
  address: string;
  description: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  relativesFollowers: {
    id: string;
    avatar: string;
  }[];
  followersCount: number;
  going: boolean;
}
