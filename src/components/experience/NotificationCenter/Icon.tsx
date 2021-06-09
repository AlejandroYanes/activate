import React, { FunctionComponent } from 'react';
import { NotificationType } from 'notifications';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

interface Props {
  type: NotificationType;
}

const iconMap = {
  [NotificationType.SUCCESS]: Icons.CHECK_CIRCLE,
  [NotificationType.INFO]: Icons.INFO_CIRCLE,
  [NotificationType.WARNING]: Icons.EXCLAMATION_TRIANGLE,
  [NotificationType.ERROR]: Icons.EXCLAMATION_OCTAGON,
};

const Icon: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { type } = props;

  return (
    <SvgIcon size="large" icon={iconMap[type]} color={colors[type]} />
  );
}

export default Icon;
