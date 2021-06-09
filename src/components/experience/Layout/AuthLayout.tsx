import React, { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import RenderByLayout from 'components/base-components/RenderByLayout';
import NavBar from 'components/experience/NavBar';
import SidePanel from 'components/experience/SidePanel';
import NotificationCenter from 'components/experience/NotificationCenter';
import ModalStack from 'components/experience/ModalStack';
import BottomTabBar from 'components/experience/BottomTabBar';
import { StyledApp } from './styled/app-layout';
import { Body } from './styled/body';

const PrimaryBody: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledApp data-el="app">
      <NavBar />
      <Body data-el="app-body">
        {children}
      </Body>
      <SidePanel />
      <NotificationCenter />
      <ModalStack />
    </StyledApp>
  );
};

const TabletBody: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledApp data-el="app">
      <NavBar />
      <Body data-el="app-body">
        {children}
      </Body>
      <NotificationCenter />
      <ModalStack />
    </StyledApp>
  );
};

const MobileBody: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledApp data-el="app">
      <Body data-el="app-body">
        {children}
      </Body>
      <BottomTabBar />
      <ModalStack />
      <NotificationCenter />
    </StyledApp>
  );
};

const bodyMap = {
  [Layout.DESKTOP]: PrimaryBody,
  [Layout.TABLET]: TabletBody,
  [Layout.MOBILE]: MobileBody,
};


const AuthLayout: FunctionComponent = (props) => (
  <RenderByLayout options={bodyMap} fallback={PrimaryBody} {...props} />
);

export default AuthLayout;
