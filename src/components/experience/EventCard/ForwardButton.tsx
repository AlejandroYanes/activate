import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from 'components/base-components/Button';
import { Modals } from 'components/modals';

const ForwardButton: FunctionComponent = () => {
  const { push } = useHistory();

  const inviteUsers = useCallback(() => {
    push(Modals.INVITE);
  }, []);

  return (
    <IconButton
      size="large"
      color="info"
      variant="flat"
      icon="FORWARD"
      onClick={inviteUsers}
    />
  );
};

export default ForwardButton;
