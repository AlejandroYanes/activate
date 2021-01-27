import { FunctionComponent } from 'react';
import { IconProps } from './icon-props';
import { icons } from './Icons';
import { svgIconStyles } from './styles';
import { useAppColors } from '../../providers/Theme';

interface Props extends IconProps {
  size?: 'small' | 'medium' | 'large' | 'x-large';
}

const SvgIcon: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { icon, width, height, size, color, secondaryColor, ...iconProperties } = props;
  const iconColor = color || Colors.FONT;
  const iconSecondaryColor = secondaryColor || Colors.FONT;
  const iconHeight = height || svgIconStyles.size[size].height;
  const iconWidth = width || svgIconStyles.size[size].width;

  return icons[icon]({
    ...iconProperties,
    color: iconColor,
    secondaryColor: iconSecondaryColor,
    width: iconWidth,
    height: iconHeight,
  });
};

SvgIcon.defaultProps = {
  size: 'medium',
  height: undefined,
  width: undefined,
  className: undefined,
  style: undefined,
};

export default SvgIcon;
