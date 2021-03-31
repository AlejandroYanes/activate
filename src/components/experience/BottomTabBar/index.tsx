import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import { Icons } from 'components/base-components/SvgIcon';
import TabItem from './TabItem';
import { TabBar, List } from './styled';

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
    <TabBar id="bottom-tab-bar">
      <AnimateSharedLayout>
        <List>
          <TabItem
            icon={Icons.BOOKMARKS}
            value={Menus.UPCOMING}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <TabItem
            icon={Icons.COMPASS}
            value={Menus.DISCOVER}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <TabItem
            icon={Icons.SEARCH}
            value={Menus.SEARCH}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <TabItem
            icon={Icons.MESSAGE}
            value={Menus.TALKS}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
          <TabItem
            icon={Icons.TIME_HISTORY}
            value={Menus.UPDATES}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        </List>
      </AnimateSharedLayout>
    </TabBar>
  );
};

export default BottomTabBar;
