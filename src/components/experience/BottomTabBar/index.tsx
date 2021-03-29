import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';
import { TabBar } from './styled';

enum Menus {
  UPCOMING = '/',
  DISCOVER = '/discover',
  SEARCH = '/search',
  TALKS = '#talks',
  UPDATES = '#updates',
}

const tabs = ['/', '/upcoming', '/discover', '/search'];

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
    <TabBar>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth>
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
