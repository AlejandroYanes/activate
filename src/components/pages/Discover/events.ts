import faker from 'faker';
import virtualTourImg from 'assets/images/virtual-tour.jpeg';
import pqMontanoImg from 'assets/images/pq_montano.jpg';
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
  attendees: faker.random.number(),
  image: virtualTourImg,
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
  `,
};

const defaultEvent2 = {
  id: faker.random.uuid(),
  date: new Date(2020, 3, 7),
  title: 'Presentacion del album: En la mesa del bar',
  address: 'Arcos de Belen, calle Acosta e/ Compostela y Picota',
  author: {
    name: faker.company.companyName(),
    userName: `${faker.internet.userName()}`,
    following: true,
  },
  attendees: faker.random.number(),
  image: pqMontanoImg,
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
  attendees: faker.random.number(),
  description: undefined,
}));

export const events = [defaultEvent, defaultEvent2].concat(fakeEvents);
