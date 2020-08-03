import faker from 'faker';
import { images } from 'components/pages/Feed/images';

export const notifications = new Array(5).fill('1').map(() => ({
  id: faker.random.uuid(),
  title: faker.lorem.words(5),
  message: faker.lorem.lines(3),
  date: faker.date.past(),
  image: images[faker.finance.amount(0, 4, 0)],
}));
