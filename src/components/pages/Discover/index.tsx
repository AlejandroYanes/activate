import React, { FunctionComponent, useState } from 'react';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';

enum Tabs {
  FOR_YOU = 'FOR_YOU',
  TRENDING = 'TRENDING',
  PUBLISHERS = 'PUBLISHERS',
}

const DiscoverPage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Tabs.FOR_YOU);

  return (
    <section>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth>
        <Tab name={Tabs.FOR_YOU} label="For you" />
        <Tab name={Tabs.TRENDING} label="Trending" icon={Icons.FIRE} />
        <Tab name={Tabs.PUBLISHERS} label="Publishers" icon={Icons.USERS} />
      </Tabset>
    </section>
  );
};

export default DiscoverPage;
