import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppLayout } from 'components/providers/Layout';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';

const ForwardButton: FunctionComponent = () => {
  const layout = useAppLayout();
  const colors = useAppColors();
  const { push } = useHistory();

  const inviteUsers = useCallback(() => {
    push('#invite');
  }, [layout]);

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
