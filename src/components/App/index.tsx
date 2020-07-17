import React, { FunctionComponent, useMemo } from 'react';
import SideMenu from 'components/experience/SideMenu';
import EventCard from 'components/experience/EventCard';
import SvgBlur from 'components/base-components/SvgBlur';
import AuxPanel from 'components/pages/AuxPanel';
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
      <AuxPanel />
      <SvgBlur />
    </section>
  );
};

export default App;
