import React, { FunctionComponent } from 'react';
import { useAppLayout } from 'components/providers/Layout';
import { Body, StyledApp } from './styled';

const PublicLayout: FunctionComponent = (props) => {
  const { children } = props;
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout} data-el="app">
      <Body layout={layout} data-el="app-body">
        {children}
      </Body>
    </StyledApp>
  );
};

export default PublicLayout;
