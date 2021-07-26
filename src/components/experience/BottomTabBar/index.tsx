import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { TabBar } from './styled';
import ProfileMenu from './ProfileMenu';

enum Menus {
  UPCOMING = '/app',
  DISCOVER = '/app/discover',
  SEARCH = '/app/search',
  PROFILE = 'profile',
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
        <Tab name={Menus.UPCOMING} icon="BOOKMARKS" onClick={handleTabClick} />
        <Tab name={Menus.DISCOVER} icon="COMPASS" onClick={handleTabClick} />
        <Tab name={Menus.SEARCH} icon="SEARCH" onClick={handleTabClick} />
        <Tab name={Menus.PROFILE} icon={<ProfileMenu />} />
      </Tabset>
    </TabBar>
  );
};

export default BottomTabBar;
