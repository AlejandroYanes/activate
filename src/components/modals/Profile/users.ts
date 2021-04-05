import faker from 'faker';

export const users = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    avatarUrl: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    secondary: `@${faker.internet.userName()}`,
    active: faker.random.boolean(),
  }));
