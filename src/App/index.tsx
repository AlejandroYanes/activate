import React from 'react';
import faker from 'faker';
import SideMenu from '../components/experience/SideMenu';
import EventCard from '../components/experience/EventCard';
import AuxPanel from '../components/experience/AuxPanel';
import './styles.scss';

const events = [
  { title: faker.lorem.words(3), date: faker.date.recent(7), description: faker.lorem.lines(4), testField: 'adfasdfasdf' },
  { title: faker.lorem.words(3), date: faker.date.recent(7), description: faker.lorem.lines(4) },
  { title: faker.lorem.words(3), date: faker.date.recent(7), description: faker.lorem.lines(4) },
  { title: faker.lorem.words(3), date: faker.date.recent(7), description: faker.lorem.lines(4) },
];

function App() {
  const eventCards = events.map((event) => <EventCard {...event} />);

  return (
    <section className="app-wrapper">
      <SideMenu />
      <main className="app-body">
        {eventCards}
      </main>
      <AuxPanel />
    </section>
  );
}

export default App;
