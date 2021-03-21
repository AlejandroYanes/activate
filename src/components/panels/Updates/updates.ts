import faker from 'faker';
import { UpdateType } from './types';

const eventUpdates = [
  UpdateType.INVITATION,
  UpdateType.EVENT_UPDATED,
  UpdateType.NEW_COMMENT,
  UpdateType.COMMENT_RESPONDED,
];

function generateUpdate(type: UpdateType) {
  if (eventUpdates.some(t => t === type)) {
    return {
      user: {
        avatarUrl: `user${faker.random.number({ min: 1, max: 12 })}`,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
      event: {
        id: faker.random.uuid(),
        name: faker.lorem.words(6),
        going: faker.random.boolean(),
      },
    };
  }

  return {
    user: {
      avatarUrl: `user${faker.random.number({ min: 1, max: 12 })}`,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
  };
}

export const updates = new Array(7).fill('1').map((_v, index) => {

  return {
    id: faker.random.uuid(),
    date: faker.date.past(),
    type: index,
    content: generateUpdate(index),
    read: faker.random.boolean(),
};
});
