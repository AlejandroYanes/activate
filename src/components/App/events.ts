import faker from 'faker';

export const events = new Array(5).fill('1').map(() => ({
  id: faker.random.uuid(),
  title: faker.lorem.words(7),
  date: faker.date.recent(7),
  description: faker.lorem.lines(4),
  author: {
    photo: `user${faker.finance.amount(1, 12, 0)}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
  },
  stats: {
    likes: faker.random.number(),
    shares: faker.random.number(),
  },
}));
