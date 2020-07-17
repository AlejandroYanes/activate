import faker from 'faker';

export const notifications = Array(5).fill('1').map(() => ({
  message: faker.lorem.lines(5),
  type: faker.random.number(3),
}));
