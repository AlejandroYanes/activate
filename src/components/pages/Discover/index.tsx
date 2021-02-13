import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { PresentationCard } from 'components/experience/EventCard';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Page from 'components/base-components/Page';
import { events } from './events';

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
  const Colors = useAppColors();
  const layout = useAppLayout();
  const { push } = useHistory();
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.FOR_YOU);

  useEffect(() => {
    addSection(AuxPanelSection.FILTER);
    setActiveSection(AuxPanelSection.FILTER);

    return () => removeSection(AuxPanelSection.FILTER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventCards = useMemo(eventFactory, []);

  const action = useMemo(() => (
    <IconButton
      onClick={() => push('/search')}
      icon={Icons.SEARCH}
      color={Colors.BRAND}
      buttonColor="brand"
      variant="flat"
      size="large"
    />
  ), []);

  return (
    <Page title="Discover new events" actions={action}>
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        compact={layout === Layout.SMALL}
        fullWidth
        mB
      >
        <Tab name={Tabs.FOR_YOU} label="For you" icon={Icons.INBOX} />
        <Tab name={Tabs.SUGGESTIONS} label="Suggestions" icon={Icons.LIGHT_BULB} />
        <Tab name={Tabs.TRENDING} label="Trending" icon={Icons.FIRE} />
      </Tabset>
      {eventCards}
    </Page>
  );
};

export default DiscoverPage;
