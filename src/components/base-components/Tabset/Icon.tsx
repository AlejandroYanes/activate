import React, { FunctionComponent } from 'react';
import { ColorScheme } from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { getIconColor } from './get-icon-color';

interface Props {
  icon: Icons;
  disableFocus: boolean;
  isSelected: boolean;
  isHovered: boolean;
  useDarkStyle: boolean;
  colors: ColorScheme;
}

const Icon: FunctionComponent<Props> = (props) => {
  const { icon, ...rest } = props;

  return (
    <SvgIcon icon={icon as Icons} color={getIconColor(rest)} />
  );
}

export default Icon;
