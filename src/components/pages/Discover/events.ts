import faker from 'faker';
import pqMontanoEvent from 'assets/images/pq_montano.jpg';
import { images } from './images';

const defaultEvent = {
  image: pqMontanoEvent,
  id: faker.random.uuid(),
  title: 'Presentacion del album: En la Mesa del Bar',
  author: 'PiQMontano',
  address: 'Arcos de Belen',
  date: new Date(2020, 0, 17),
  tickets: 'free',
};

const fakeEvents = new Array(4).fill('1').map((_item, index) => ({
  image: images[index],
  id: faker.random.uuid(),
  title: faker.lorem.words(7),
  author: faker.company.companyName(),
  address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
  date: faker.date.recent(7),
  tickets: '250 tickets available. Buy on site.',
}));

export const events = [defaultEvent].concat(fakeEvents);
