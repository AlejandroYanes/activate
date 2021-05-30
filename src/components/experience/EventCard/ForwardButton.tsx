import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import { Modals } from 'components/modals';

const ForwardButton: FunctionComponent = () => {
  const colors = useAppColors();
  const { push } = useHistory();

  const inviteUsers = useCallback(() => {
    push(Modals.INVITE);
  }, []);

  return (
    <IconButton
      size="large"
      buttonColor="info"
      variant="flat"
      icon={Icons.FORWARD}
      color={colors.INFO}
      onClick={inviteUsers}
    />
  );
};

export default ForwardButton;
