import { FunctionComponent } from 'react';
import { IconProps } from './icon-props';
import { Colors } from './colors';
import { icons } from './Icons';
import { svgIconStyles } from './styles';

interface Props extends IconProps {
  size?: 'small' | 'medium' | 'large';
}

const SvgIcon: FunctionComponent<Props> = (props) => {
  const { icon, width, height, size, ...iconProps } = props;
  const iconHeight = height || svgIconStyles.size[size].height;
  const iconWidth = width || svgIconStyles.size[size].width;

  return icons[icon]({
    ...iconProps,
    width: iconWidth,
    height: iconHeight,
  });
};

SvgIcon.defaultProps = {
  fillColor: Colors.DARK,
  strokeColor: Colors.DARK,
  size: 'medium',
  height: undefined,
  width: undefined,
  className: undefined,
  style: undefined,
};

export default SvgIcon;
