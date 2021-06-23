import React, { FunctionComponent, useCallback, useState } from 'react';
import { getEventValue } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Page from 'components/base-components/Page';
import { Input } from 'components/base-components/Inputs';
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
  [Layout.DESKTOP]: 'Search for anything',
  [Layout.TABLET]: 'Search for anything',
  [Layout.MOBILE]: 'Search',
};

const SearchPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(Tabs.EVENTS);

  const handleSearch = useCallback((event) => {
    setSearch(getEventValue(event));
  }, []);

  return (
    <Page title={titleByLayoutMap[layout]}>
      <Input value={search} onChange={handleSearch} icon="SEARCH" showClear />
      <Tabset
        activeTab={activeTab}
        onTabChange={setActiveTab}
        fullWidth={layout !== Layout.MOBILE}
        mT
        mB
      >
        <Tab name={Tabs.EVENTS} label="Events" icon="CALENDAR" />
        <Tab name={Tabs.PUBLISHERS} label="Publishers" icon="MEGAPHONE" />
        <Tab name={Tabs.USERS} label="Users" icon="USERS" />
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
