import React, { FunctionComponent, useMemo } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import Update from './Update';
import { updates } from './updates';

function updateFactory() {
  return updates.map((update) => <Update key={update.id} data={update as any} />);
}

const UpdatesPanel: FunctionComponent = () => {
  const updateCards = useMemo(updateFactory, []);

  return (
    <FlexBox direction="column" align="stretch" height="100%" padding="0 16px">
      {updateCards}
    </FlexBox>
  );
};

export default UpdatesPanel;
