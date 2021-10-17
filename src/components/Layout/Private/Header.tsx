import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FlexBox, IconButton, Tab, Tabset, Title } from 'activate-components';
import { Modals } from 'components/modals';
import ProfileMenu from './ProfileMenu';
import { Header as StyledHeader } from './styled';

enum Menus {
  HOME = '/app',
  SEARCH = '/app/search',
  TALKS = '/app/talks',
  BOOKED = '/app/upcoming'
}

const tabs = ['/app', '/app/search', '/app/upcoming', '/app/talks'];

const Header: FunctionComponent = () => {
  const { push } = useHistory();
  const { pathname, search } = useLocation();
  const [activeTab, setActiveTab] = useState<string>(Menus.HOME);

  const handleTabClick = useCallback((tab) => {
    push(`${tab}`);
  }, []);

  const showNotifications = useCallback(() => {
    push(search ? `${search}${Modals.UPDATES}` : Modals.UPDATES);
  }, [search]);

  useEffect(() => {
    if (!tabs.includes(pathname)) {
      setActiveTab(undefined);
    } else {
      setActiveTab(pathname);
    }
  }, [pathname]);

  return (
    <StyledHeader data-el="app-header">
      <FlexBox width={120}>
        <Link to="/">
          <Title weight="light" level={2}>Activate</Title>
        </Link>
      </FlexBox>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab}>
        <Tab name={Menus.HOME} icon="COMPASS" onClick={handleTabClick} />
        <Tab name={Menus.SEARCH} icon="SEARCH" onClick={handleTabClick} />
        <Tab name={Menus.BOOKED} icon="BOOKMARKS" onClick={handleTabClick} />
        <Tab name={Menus.TALKS} icon="MESSAGE" onClick={handleTabClick} />
      </Tabset>
      <FlexBox align="center" justify="flex-end" width={120}>
        <IconButton
          onClick={showNotifications}
          icon="BELL"
          variant="flat"
          color="background"
          mR
        />
        <ProfileMenu />
      </FlexBox>
    </StyledHeader>
  );
};

export default Header;
