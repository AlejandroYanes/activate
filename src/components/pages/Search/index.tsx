import React, { FunctionComponent, useCallback, useState } from 'react';
import { getEventValue } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Page from 'components/base-components/Page';
import { Input } from 'components/base-components/Inputs';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import EventsResults from './EventsResults';
import PublishersResults from './PublishersResults';
import UsersResults from './UsersResults';

enum Tabs {
  EVENTS = 'EVENTS',
  PUBLISHERS = 'PUBLISHERS',
  USERS = 'USERS',
}

const titleByLayoutMap = {
  [Layout.FULL]: 'Search for anything',
  [Layout.MIDDLE]: 'Search for anything',
  [Layout.SMALL]: 'Search',
};

const SearchPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(Tabs.EVENTS);

  const handleSearch = useCallback((event) => {
    setSearch(getEventValue(event));
  }, []);

  return (
    <Page title={titleByLayoutMap[layout]} withTabBar>
      <Input value={search} onChange={handleSearch} icon={Icons.SEARCH} showClear />
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        compact={layout === Layout.SMALL}
        fullWidth
        mT
        mB
      >
        <Tab name={Tabs.EVENTS} label="Events" icon={Icons.CALENDAR_FILLED} />
        <Tab name={Tabs.PUBLISHERS} label="Publishers" icon={Icons.MEGAPHONE} />
        <Tab name={Tabs.USERS} label="Users" icon={Icons.USERS} />
      </Tabset>
      <Switch by={activeTab}>
        <Case value={Tabs.EVENTS} component={EventsResults} />
        <Case value={Tabs.PUBLISHERS} component={PublishersResults} />
        <Case value={Tabs.USERS} component={UsersResults} />
      </Switch>
    </Page>
  );
};

export default SearchPage;
