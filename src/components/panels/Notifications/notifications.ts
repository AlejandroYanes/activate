import faker from 'faker';
import { images } from 'components/pages/Discover/images';

export const notifications = new Array(4).fill('1').map(() => ({
  id: faker.random.uuid(),
  title: faker.lorem.words(5),
  message: faker.lorem.lines(3),
  date: faker.date.past(),
  image: images[faker.random.number({ min: 0, max: 3 })],
}));
