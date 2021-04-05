import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import RenderByLayout from 'components/base-components/RenderByLayout';
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
      <ModalStack />
    </StyledApp>
  );
};

const TabletBody: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout} data-el="app">
      <NavBar />
      <Body layout={layout} data-el="app-body">
        <Routes />
      </Body>
      <NotificationCenter />
      <ModalStack />
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
  [Layout.DESKTOP]: PrimaryBody,
  [Layout.TABLET]: TabletBody,
  [Layout.MOBILE]: MobileBody,
};

export default function AppBody() {
  return (
    <RenderByLayout options={bodyMap} fallback={PrimaryBody} />
  );
}
