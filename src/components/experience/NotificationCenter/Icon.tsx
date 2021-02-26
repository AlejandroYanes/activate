import React, { FunctionComponent } from 'react';
import { NotificationType } from './types';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icon as StyledIcon } from './styled/notification';

interface Props {
  type: NotificationType;
}

const Icon: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { type } = props;

  return (
    <StyledIcon color={colors.WHITE}>
      <SvgIcon icon={type.toLowerCase() as any} color={colors[type]} />
    </StyledIcon>
  );
}

export default Icon;
