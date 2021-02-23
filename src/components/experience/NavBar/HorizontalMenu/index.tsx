import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<string>(Menus.UPCOMING);

  const handleTabClick = useCallback((tab) => {
    push(`/${tab}`);
  }, []);

  useEffect(() => {
    const pageUrl = pathname.split('/')[1];

    if (!tabs.includes(pageUrl)) {
      setActiveTab(undefined);
    } else {
      setActiveTab(pageUrl);
    }
  }, [pathname]);

  return (
    <NavBar>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth>
        <Tab name={Menus.UPCOMING} icon={Icons.BOOKMARKS} onClick={handleTabClick} />
        <Tab name={Menus.DISCOVER} icon={Icons.COMPASS} onClick={handleTabClick} />
        <Tab name={Menus.SEARCH} icon={Icons.SEARCH} onClick={handleTabClick} />
        <Tab name={Menus.PROFILE} icon={Icons.USER} onClick={handleTabClick} />
      </Tabset>
    </NavBar>
  );
};

export default HorizontalMenu;
