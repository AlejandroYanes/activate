import faker from 'faker';

export const notifications = new Array(5).fill('1').map(() => ({
  code: faker.random.uuid(),
  title: faker.lorem.words(5),
  message: faker.lorem.lines(5),
  type: faker.random.number(3),
}));
