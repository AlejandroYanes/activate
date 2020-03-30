import React from 'react';
import SideMenu from '../experience/SideMenu';
import EventCard from '../experience/EventCard';
import AuxPanel from '../experience/AuxPanel';
import './styles.scss';

function App() {
  return (
    <section className="app-wrapper">
      <SideMenu />
      <main className="app-body">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </main>
      <AuxPanel />
    </section>
  );
}

export default App;
