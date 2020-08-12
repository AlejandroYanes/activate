import { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import { IconProps } from './icon-props';
import { icons } from './Icons';
import { svgIconStyles } from './styles';

interface Props extends IconProps {
  size?: 'small' | 'medium' | 'large' | 'x-large';
}

const SvgIcon: FunctionComponent<Props> = (props) => {
  const { icon, width, height, size, ...iconProperties } = props;
  const iconHeight = height || svgIconStyles.size[size].height;
  const iconWidth = width || svgIconStyles.size[size].width;

  return icons[icon]({
    ...iconProperties,
    width: iconWidth,
    height: iconHeight,
  });
};

SvgIcon.defaultProps = {
  color: Colors.DARK,
  secondaryColor: Colors.DARK,
  size: 'medium',
  height: undefined,
  width: undefined,
  className: undefined,
  style: undefined,
};

export default SvgIcon;
