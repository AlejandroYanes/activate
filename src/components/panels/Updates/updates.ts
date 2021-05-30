import faker from 'faker';
import { UpdateType } from 'models/update';
import { events } from 'components/pages/Discover/events';

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
        avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
      },
      event: {
        id: faker.random.uuid(),
        name: events[faker.random.number({ min: 0, max: 1 })].title,
        going: faker.random.boolean(),
      },
    };
  }

  return {
    user: {
      avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  };
}

export const updates = new Array(7).fill('1').map((_v, index) => ({
  type: index,
  id: faker.random.uuid(),
  date: faker.date.recent(),
  read: faker.random.boolean(),
  ...generateUpdate(index),
}));
