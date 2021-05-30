import { UserModel } from './user';

export interface EventModel {
  id: string;
  name: string;
  date: Date;
  address: string;
  description: string;
  image: string;
  category: string;
  author: UserModel;
  going?: boolean;
  owned?: boolean;
}
