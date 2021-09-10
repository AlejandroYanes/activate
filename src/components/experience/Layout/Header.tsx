import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Header as StyledHeader } from './styled';

enum Menus {
  HOME = '/app',
  SEARCH = '/app/search',
  TALKS = '/app/talks',
  UPDATES = '/app/updates',
  BOOKED = '/app/upcoming'
}

const tabs = ['/app', '/app/search', '/app/upcoming', '/app/talks', '/app/updates'];

const Header: FunctionComponent = () => {
  const { isLoggedIn, userInfo } = useAuthData();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<string>(Menus.HOME);

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

  if (isLoggedIn) {
    const { avatar } = userInfo;

    return (
      <StyledHeader data-el="app-header">
        <Link to="/">
          <Title weight="light" level={2}>Activate</Title>
        </Link>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab}>
          <Tab name={Menus.HOME} icon="COMPASS" onClick={handleTabClick} />
          <Tab name={Menus.SEARCH} icon="SEARCH" onClick={handleTabClick} />
          <Tab name={Menus.BOOKED} icon="BOOKMARKS" onClick={handleTabClick} />
          <Tab name={Menus.TALKS} icon="MESSAGE" onClick={handleTabClick} />
          <Tab name={Menus.UPDATES} icon="BELL" onClick={handleTabClick} />
        </Tabset>
        <Link to="/app/profile">
          <Avatar src={avatar} />
        </Link>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader data-el="app-header">
      <Link to="/">
        <Title weight="light" level={2} mL>Activate</Title>
      </Link>
    </StyledHeader>
  );
};

export default Header;
