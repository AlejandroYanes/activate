import React, { FunctionComponent, useMemo } from 'react';
import Update from './Update';
import { Wrapper } from './styled';
import { updates } from './updates';

function updateFactory() {
  return updates.map(({ id, ...rest }) => <Update key={id} {...rest} mB />);
}

const UpdatesPanel: FunctionComponent = () => {
  const updateCards = useMemo(updateFactory, []);

  return (
    <Wrapper>
      {updateCards}
    </Wrapper>
  );
};

export default UpdatesPanel;
