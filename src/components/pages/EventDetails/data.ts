import faker from 'faker';

export const comments = new Array(4)
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    author: {
      img: `user${faker.random.number({ min:1, max: 4 })}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
    date: faker.date.past(0, new Date()),
    content: faker.lorem.lines(6),
    response: faker.random.boolean() ? faker.lorem.lines(6) : undefined,
  }));
