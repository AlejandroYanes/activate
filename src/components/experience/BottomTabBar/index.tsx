import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Icons } from 'components/base-components/SvgIcon';
import { Tabset, Tab } from 'components/base-components/Tabset';
import { TabBar } from './styled';

enum Menus {
  UPCOMING = '/app',
  DISCOVER = '/app/discover',
  SEARCH = '/app/search',
  TALKS = '#talks',
  UPDATES = '#updates',
}

const tabs = ['/app', '/app/upcoming', '/app/discover', '/app/search'];

const BottomTabBar: FunctionComponent = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<string>(Menus.UPCOMING);

  const handleTabClick = useCallback((tab) => {
    push(`${tab}`);
  }, []);

  useEffect(() => {
    if (!tabs.includes(pathname)) {
      setActiveTab(undefined);
    } else {
      setActiveTab(pathname);
    }
  }, [pathname]);

  return (
    <TabBar id="bottom-tab-bar">
      <Tabset activeTab={activeTab} fullWidth>
        <Tab name={Menus.UPCOMING} icon={Icons.BOOKMARKS} onClick={handleTabClick} />
        <Tab name={Menus.DISCOVER} icon={Icons.COMPASS} onClick={handleTabClick} />
        <Tab name={Menus.SEARCH} icon={Icons.SEARCH} onClick={handleTabClick} />
        <Tab name={Menus.TALKS} icon={Icons.MESSAGE} onClick={handleTabClick} />
        <Tab name={Menus.UPDATES} icon={Icons.TIME_HISTORY} onClick={handleTabClick} />
      </Tabset>
    </TabBar>
  );
};

export default BottomTabBar;
