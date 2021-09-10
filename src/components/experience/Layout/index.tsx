import React, { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import RenderByLayout from 'components/base-components/RenderByLayout';
import NotificationCenter from 'components/experience/NotificationCenter';
import ModalStack from 'components/experience/ModalStack';
import BottomTabBar from 'components/experience/BottomTabBar';
import Header from './Header';
import { Body, StyledApp } from './styled';

const PrimaryBody: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledApp data-el="app">
      <Header />
      {children}
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
      <NotificationCenter />
    </StyledApp>
  );
};

const bodyMap = {
  [Layout.DESKTOP]: PrimaryBody,
  [Layout.TABLET]: PrimaryBody,
  [Layout.MOBILE]: MobileBody,
};


const AppLayout: FunctionComponent = (props) => (
  <RenderByLayout options={bodyMap} fallback={PrimaryBody} {...props} />
);

export default AppLayout;
