import faker from 'faker';
import virtualTourImg from 'assets/images/virtual-tour.jpeg';
import pqMontanoImg from 'assets/images/pq_montano.jpg';
import { EventModel } from 'models/event';
import { images } from './images';

const defaultEvent: EventModel = {
  id: faker.random.uuid(),
  date: new Date(2021, 1, 19),
  name: 'Free Music Workshop - February 2020',
  address: 'St. Joseph\'s Hospice',
  author: {
    id: faker.random.uuid(),
    avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
    name: faker.company.companyName(),
  },
  followersCount: faker.random.number(),
  relativesFollowers: [],
  going: faker.random.boolean(),
  image: virtualTourImg,
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
  `,
};

const defaultEvent2: EventModel = {
  id: faker.random.uuid(),
  date: new Date(2021, 3, 7),
  name: 'Presentacion del album: En la mesa del bar',
  address: 'Arcos de Belen, calle Acosta e/ Compostela y Picota',
  author: {
    id: faker.random.uuid(),
    avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
    name: faker.company.companyName(),
  },
  followersCount: faker.random.number(),
  relativesFollowers: [],
  going: faker.random.boolean(),
  image: pqMontanoImg,
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
  `,
};

const fakeEvents: EventModel[] = new Array(4).fill('1').map((_item, index) => ({
  id: faker.random.uuid(),
  date: faker.date.recent(7),
  name: faker.lorem.words(7),
  address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
  author: {
    id: faker.random.uuid(),
    avatar: `user${faker.random.number({ min: 1, max: 4 })}`,
    name: faker.company.companyName(),
  },
  image: images[index],
  followersCount: faker.random.number(),
  relativesFollowers: [],
  going: faker.random.boolean(),
  description: undefined,
}));

export const events = [defaultEvent, defaultEvent2].concat(fakeEvents);
