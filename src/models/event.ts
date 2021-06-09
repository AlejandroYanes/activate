import { UserModel } from './user';
import { CommentModel } from './comment';

export interface EventModel {
  id: string;
  name: string;
  date: Date;
  address: string;
  description: string;
  image: string;
  category: string;
  author: UserModel;
  comments: CommentModel[];
  going?: boolean;
  owned?: boolean;
}
