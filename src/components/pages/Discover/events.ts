import faker from 'faker';
import { images } from './images';

export const events = new Array(4).fill('1').map((_item, index) => ({
  image: images[index],
  id: faker.random.uuid(),
  title: faker.lorem.words(7),
  author: faker.company.companyName(),
  address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
  date: faker.date.recent(7),
  tickets: '250 tickets available. Buy on site.',
}));
