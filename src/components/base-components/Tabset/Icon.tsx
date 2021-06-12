import React, { FunctionComponent } from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { getIconColor } from './get-icon-color';

interface Props {
  icon: Icons;
  disableFocus: boolean;
  isSelected: boolean;
  isHovered: boolean;
}

const Icon: FunctionComponent<Props> = (props) => {
  const { icon, ...rest } = props;

  return (
    <SvgIcon icon={icon as Icons} color={getIconColor(rest)} />
  );
}

export default Icon;
