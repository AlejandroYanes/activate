import faker from 'faker';

export const publishers = new Array(6).fill(1).map(() => ({
  id: faker.random.uuid(),
  image: `user${faker.finance.amount(1, 12, 0)}`,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  description: faker.lorem.lines(8),
  followers: parseInt(faker.finance.amount(1, 100000, 0), 10),
  events: parseInt(faker.finance.amount(1, 1000, 0), 10),
}));
