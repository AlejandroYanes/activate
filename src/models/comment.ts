import { UserModel } from './user';
import { EventModel } from './event';

export interface CommentModel {
  id: string;
  author: UserModel;
  event: EventModel;
  content: string;
  response?: string;
  dateCreated: Date;
  dateResponded?: Date;
}
