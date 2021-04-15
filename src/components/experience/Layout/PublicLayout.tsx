import React, { FunctionComponent } from 'react';
import { useAppLayout } from 'components/providers/Layout';
import { StyledApp } from './styled/public-layout';

const PublicLayout: FunctionComponent = (props) => {
  const { children } = props;
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout} data-el="app">
      {children}
    </StyledApp>
  );
};

export default PublicLayout;
