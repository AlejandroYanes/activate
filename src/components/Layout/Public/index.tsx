import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { NotificationCenter, Title } from 'activate-components';
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
