import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { IconButton } from 'components/base-components/Button';
import EventCard from 'components/experience/EventCard';
import Page from 'components/base-components/Page';
import { events } from './events';

enum Tabs {
  FOR_YOU = 'FOR_YOU',
  SUGGESTIONS = 'SUGGESTIONS',
  TRENDING = 'TRENDING',
}

function eventFactory() {
  return events.map((event) => <EventCard key={event.id} {...event} />);
}

const titleByLayoutMap = {
  [Layout.DESKTOP]: 'Discover new events',
  [Layout.TABLET]: 'Discover new events',
  [Layout.MOBILE]: 'Discover',
};

const DiscoverPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const { push } = useHistory();

  const [activeTab, setActiveTab] = useState(Tabs.FOR_YOU);

  useEffect(() => {
    if (layout !== Layout.MOBILE) {
      addSection(AuxPanelSection.FILTER);
      setActiveSection(AuxPanelSection.FILTER);

      return () => {
        removeSection(AuxPanelSection.FILTER);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventCards = useMemo(eventFactory, []);

  const rightAction = useMemo(() => {
    if (layout !== Layout.DESKTOP) {
      const sizeProps: any = layout === Layout.TABLET
        ? { width: 22, height: 22, size: 'large' }
        : {size: 'large', margin: '0 8px 0 0'};

      return (
        <IconButton
          onClick={() => push('#filters')}
          icon="FILTER"
          color="brand"
          variant="flat"
          {...sizeProps}
        />
      );
    }

    return null;
  }, [layout]);

  return (
    <Page title={titleByLayoutMap[layout]} actions={rightAction}>
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fullWidth={layout !== Layout.MOBILE}
        mB
      >
        <Tab name={Tabs.FOR_YOU} label="For you" icon="INBOX" />
        <Tab name={Tabs.SUGGESTIONS} label="Suggestions" icon="LIGHT_BULB" />
        <Tab name={Tabs.TRENDING} label="Trending" icon="FIRE" />
      </Tabset>
      {eventCards}
    </Page>
  );
};

export default DiscoverPage;
