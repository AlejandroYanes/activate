import React, { FunctionComponent } from 'react';
import { StyledPage } from './styled';

const Page: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <StyledPage>
      {children}
    </StyledPage>
  );
};

export default Page;
