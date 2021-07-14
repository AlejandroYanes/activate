import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { EventModel } from 'models/event';
import { Modals } from 'components/modals';
import { IconButton } from 'components/base-components/Button';

interface Props {
  event: EventModel;
}

const InviteButton: FunctionComponent<Props> = (props) => {
  const { push } = useHistory();
  const { event: { id, name } } = props;

  const inviteUsers = useCallback(() => {
    push(Modals.INVITE, { event: { id, name } });
  }, []);

  return (
    <IconButton
      size="large"
      variant="flat"
      icon="FORWARD"
      onClick={inviteUsers}
    />
  );
};

export default InviteButton;
