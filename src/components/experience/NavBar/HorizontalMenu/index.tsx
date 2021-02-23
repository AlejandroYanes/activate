import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';
import { NavBar } from './styled';

enum Menus {
  PROFILE = 'profile',
  UPCOMING = 'upcoming',
  DISCOVER = 'discover',
  SEARCH = 'search',
}

const tabs = ['profile', 'upcoming', 'discover', 'search'];

const HorizontalMenu: FunctionComponent = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(Menus.UPCOMING);

  useEffect(() => {
    if (!pathname.includes(activeTab)) {
      push(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    const pageUrl = pathname.split('/')[1];

    if (!tabs.includes(pageUrl)) {
      setActiveTab(undefined);
    }
  }, [pathname]);

  return (
    <NavBar>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth>
        <Tab name={Menus.UPCOMING} icon={Icons.BOOKMARKS} />
        <Tab name={Menus.DISCOVER} icon={Icons.COMPASS} />
        <Tab name={Menus.SEARCH} icon={Icons.SEARCH} />
        <Tab name={Menus.PROFILE} icon={Icons.USER} />
      </Tabset>
    </NavBar>
  );
};

export default HorizontalMenu;
