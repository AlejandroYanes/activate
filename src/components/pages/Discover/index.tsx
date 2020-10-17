import React, { FunctionComponent, useEffect, useState } from 'react';
import { AuxPanelSections, usePanelActions } from 'components/providers/PanelSections';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import FeedPage from 'components/pages/Feed';
import { Header } from './styled';

enum Tabs {
  FOR_YOU = 'FOR_YOU',
  TRENDING = 'TRENDING',
  TODAY = 'TODAY',
}

const DiscoverPage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Tabs.FOR_YOU);
  const { setPageSections } = usePanelActions();

  useEffect(() => {
    setPageSections([AuxPanelSections.Search]);
  }, []);

  return (
    <section>
      <Header>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mB>
          <Tab name={Tabs.FOR_YOU} label="For you" />
          <Tab name={Tabs.TRENDING} label="Trending" icon={Icons.FIRE} />
          <Tab name={Tabs.TODAY} label="Today" />
        </Tabset>
      </Header>
      <Switch by={activeTab}>
        <Case value={Tabs.FOR_YOU} component={FeedPage} />
        <Case value={Tabs.TRENDING} component={FeedPage} />
      </Switch>
    </section>
  );
};

export default DiscoverPage;
