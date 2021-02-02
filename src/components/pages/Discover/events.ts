import faker from 'faker';
import eventImg from 'assets/images/virtual-tour.jpeg';
import { images } from './images';

const defaultEvent = {
  id: faker.random.uuid(),
  date: new Date(2020, 1, 19),
  title: 'Free Music Workshop - February 2020',
  address: 'St. Joseph\'s Hospice',
  author: {
    name: faker.company.companyName(),
    userName: `${faker.internet.userName()}`,
    following: true,
  },
  image: eventImg,
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
  `,
};

const fakeEvents = new Array(4).fill('1').map((_item, index) => ({
  id: faker.random.uuid(),
  date: faker.date.recent(7),
  title: faker.lorem.words(7),
  address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
  author: {
    name: faker.company.companyName(),
    userName: `${faker.internet.userName()}`,
    following: faker.random.boolean(),
  },
  image: images[index],
  description: undefined,
}));

export const events = [defaultEvent].concat(fakeEvents);
