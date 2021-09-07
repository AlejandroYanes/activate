import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { EventModel } from 'models/event';
import { Modals } from 'components/modals';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { IconButton } from 'components/base-components/Button';

interface Props {
  event: EventModel;
}

const InviteButton: FunctionComponent<Props> = (props) => {
  const { push } = useHistory();
  const { event: { id, name } } = props;
  const layout = useAppLayout();

  const inviteUsers = useCallback(() => {
    const route = layout === Layout.MOBILE
      ? '/app/event/invite'
      : Modals.INVITE;
    push(route, { event: { id, name } });
  }, [layout]);

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
