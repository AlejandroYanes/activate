import React, { FunctionComponent, useMemo } from 'react';
import SideMenu from '../experience/SideMenu';
import EventCard from '../experience/EventCard';
import AuxPanel from '../pages/AuxPanel';
import { events } from './events';
import './styles.scss';

function eventsFactory() {
  return events.map((event) => <EventCard key={event.id} {...event} />);
}

const App: FunctionComponent = () => {
  const eventCards = useMemo(eventsFactory, []);

  return (
    <section className="app-wrapper">
      <SideMenu />
      <main className="app-body">
        {eventCards}
      </main>
      {/*<AuxPanel />*/}
    </section>
  );
};

export default App;
