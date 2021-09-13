import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'components/base-components/Typography';
import NotificationCenter from 'components/experience/NotificationCenter';
import { App as StyledApp, Body, Header } from './styled';

const PublicLayout: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledApp data-el="app">
      <Header data-el="app-header">
        <Link to="/">
          <Title weight="light" level={2}>Activate</Title>
        </Link>
      </Header>
      <Body data-el="app-body">
        {children}
      </Body>
      <NotificationCenter />
    </StyledApp>
  );
};

export default PublicLayout;
