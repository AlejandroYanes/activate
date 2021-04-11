import { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { IconProps } from './icon-props';
import { icons } from './Icons';
import { svgIconStyles } from './styles';

interface Props extends IconProps {
  id?: string;
  size?: 'small' | 'medium' | 'large' | 'x-large' | 'page';
}

const SvgIcon: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const {
    icon,
    width,
    height,
    size,
    color,
    secondaryColor,
    ...iconProperties
  } = props;
  const iconColor = color || Colors.FONT;
  const iconSecondaryColor = secondaryColor || Colors.FONT;
  const iconHeight = height || svgIconStyles.size[size].height;
  const iconWidth = width || svgIconStyles.size[size].width;
  const IconComponent = icons[icon];

  return (
    <IconComponent
      color={iconColor}
      secondaryColor={iconSecondaryColor}
      width={iconWidth}
      height={iconHeight}
      {...iconProperties}
    />
  );
};

SvgIcon.defaultProps = {
  size: 'medium',
  height: undefined,
  width: undefined,
  className: undefined,
  style: undefined,
};

export default SvgIcon;
