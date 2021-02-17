import React, { FunctionComponent } from 'react';
import Panel from './Panel';
import { StyledSidePanel } from './styled';

const FixedContainer: FunctionComponent = () => {
  return (
    <StyledSidePanel>
      <Panel />
    </StyledSidePanel>
  );
};

export default FixedContainer;
