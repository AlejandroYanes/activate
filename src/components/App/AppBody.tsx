import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import NavBar from 'components/experience/NavBar';
import BottomTabBar from 'components/experience/BottomTabBar';
import SidePanel from 'components/experience/SidePanel';
import NotificationCenter from 'components/experience/NotificationCenter';
import ModalStack  from 'components/experience/ModalStack';
import Routes from './Routes';
import { Body, StyledApp } from './styled';

const PrimaryBody: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout} data-el="app">
      <NavBar />
      <Body layout={layout} data-el="app-body">
        <Routes />
      </Body>
      <SidePanel />
      <NotificationCenter />
    </StyledApp>
  );
};

const MobileBody: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout} data-el="app">
      <BottomTabBar />
      <Body layout={layout} data-el="app-body">
        <Routes />
      </Body>
      <NotificationCenter />
      <ModalStack />
    </StyledApp>
  );
};

const bodyMap = {
  [Layout.FULL]: PrimaryBody,
  [Layout.MIDDLE]: PrimaryBody,
  [Layout.SMALL]: MobileBody,
};

export default function AppBody() {
  const layout = useAppLayout();
  const BodyComponent = bodyMap[layout];

  return <BodyComponent />;
}
