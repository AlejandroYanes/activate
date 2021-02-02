import faker from 'faker';

export const comments = new Array(4)
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    author: {
      img: `user${faker.finance.amount(1, 11, 0)}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
    date: faker.date.recent(),
    content: faker.lorem.lines(6),
    response: faker.random.boolean() ? faker.lorem.lines(6) : undefined,
  }));
