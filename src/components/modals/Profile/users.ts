import faker from 'faker';
import { UserModel } from 'models/user';

export const users: UserModel[] = new Array(faker.random.number({ min: 6, max: 16 }))
  .fill(1)
  .map(() => ({
    id: faker.random.uuid(),
    avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    active: faker.random.boolean(),
  }));
