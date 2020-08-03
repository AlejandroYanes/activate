import faker from 'faker';
import { images } from './images';

export const events = new Array(5).fill('1').map(() => ({
  image: images[faker.finance.amount(0, 4, 0)],
  id: faker.random.uuid(),
  title: faker.lorem.words(7),
  date: faker.date.recent(7),
  description: faker.lorem.lines(4),
  author: {
    photo: `user${faker.finance.amount(1, 12, 0)}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
  },
  comments: parseInt(faker.finance.amount(0, 1000000, 0), 10),
}));
