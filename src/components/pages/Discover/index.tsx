import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { AuxPanelSections, usePanelActions } from 'components/providers/PanelSections';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { PresentationCard } from 'components/experience/EventCard';
import { Header, Title, Content } from './styled';
import { events } from './events';

enum Tabs {
  FOR_YOU = 'FOR_YOU',
  TRENDING = 'TRENDING',
  TODAY = 'TODAY',
}

function eventFactory() {
  return events.map((event) => <PresentationCard key={event.id} {...event} />);
}

const DiscoverPage: FunctionComponent = () => {
  const { setPageSections } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.FOR_YOU);
  const eventCards = useMemo(eventFactory, []);

  useEffect(() => {
    setPageSections([AuxPanelSections.Search]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Header>
        <Title>Discover new events</Title>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mB>
          <Tab name={Tabs.FOR_YOU} label="For you" />
          <Tab name={Tabs.TRENDING} label="Trending" icon={Icons.FIRE} />
          <Tab name={Tabs.TODAY} label="Today" />
        </Tabset>
      </Header>
      <Content>
        {eventCards}
      </Content>
    </section>
  );
};

export default DiscoverPage;
