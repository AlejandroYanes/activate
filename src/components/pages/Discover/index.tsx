import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import Page from 'components/base-components/Page';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { PresentationCard } from 'components/experience/EventCard';
import { events } from './events';
import { Icons } from '../../base-components/SvgIcon';

enum Tabs {
  FOR_YOU = 'FOR_YOU',
  SUGGESTIONS = 'SUGGESTIONS',
  TRENDING = 'TRENDING',
  TODAY = 'TODAY',
}

function eventFactory() {
  return events.map((event) => <PresentationCard key={event.id} {...event} />);
}

const DiscoverPage: FunctionComponent = () => {
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.FOR_YOU);
  const eventCards = useMemo(eventFactory, []);

  useEffect(() => {
    addSection(AuxPanelSection.Search);
    setActiveSection(AuxPanelSection.Search);

    return () => removeSection(AuxPanelSection.Search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Discover new events">
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mB>
        <Tab name={Tabs.FOR_YOU} label="For you" icon={Icons.INBOX} />
        <Tab name={Tabs.SUGGESTIONS} label="Suggestions" icon={Icons.LIGHT_BULB} />
        <Tab name={Tabs.TRENDING} label="Trending" icon={Icons.FIRE} />
      </Tabset>
      {eventCards}
    </Page>
  );
};

export default DiscoverPage;
