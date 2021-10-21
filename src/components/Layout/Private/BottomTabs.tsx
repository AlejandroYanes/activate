import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tab, Tabset } from 'activate-components';
import ProfileMenu from './ProfileMenu';
import { TabBar } from './styled';

enum Menus {
  DISCOVER = '/app',
  SEARCH = '/app/search',
  UPCOMING = '/app/upcoming',
  PROFILE = 'profile',
}

const tabs = ['/app', '/app/upcoming', '/app/search'];

const BottomTabBar: FunctionComponent = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<string>(Menus.DISCOVER);

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
        <Tab name={Menus.DISCOVER} icon="COMPASS" onClick={handleTabClick} />
        <Tab name={Menus.SEARCH} icon="SEARCH" onClick={handleTabClick} />
        <Tab name={Menus.UPCOMING} icon="BOOKMARKS" onClick={handleTabClick} />
        <Tab name={Menus.PROFILE} icon={<ProfileMenu />} />
      </Tabset>
    </TabBar>
  );
};

export default BottomTabBar;
