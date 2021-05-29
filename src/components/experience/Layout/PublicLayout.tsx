import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import { Content, Header, StyledApp } from './styled/public-layout';
import NotificationCenter from '../NotificationCenter';

const PublicLayout: FunctionComponent = (props) => {
  const { children } = props;
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout} data-el="app">
      <Header layout={layout} data-el="app-header">
        <Link to="/">
          <Title level={2}>Activate</Title>
        </Link>
      </Header>
      <Content layout={layout} data-el="app-body">
        {children}
      </Content>
      <NotificationCenter />
    </StyledApp>
  );
};

export default PublicLayout;
