import React from 'react';
import PropTypes from 'prop-types';
import { colorDefinitions, colors } from './colors';
import HomeIcon from './HomeIcon';
import ChevronUpIcon from './ChevronUp';
import ChevronDownIcon from './ChevronDown';
import ChevronLeftIcon from './ChevronLeft';
import ChevronRightIcon from './ChevronRight';

const icons = {
  home: (props) => <HomeIcon {...props} />,
  'chevron-up': (props) => <ChevronUpIcon {...props} />,
  'chevron-down': (props) => <ChevronDownIcon {...props} />,
  'chevron-left': (props) => <ChevronLeftIcon {...props} />,
  'chevron-right': (props) => <ChevronRightIcon {...props} />,
  none: () => null,
};

export default function SvgIcon(props) {
  const { icon, fillColor, strokeColor, ...iconProps } = props;
  return icons[icon]({ ...iconProps, fillColor: colors[fillColor], strokeColor: colors[strokeColor] });
}

SvgIcon.propTypes = {
  icon: PropTypes.oneOf([
    'home',
    'none',
  ]),
  fillColor: PropTypes.oneOf(colorDefinitions),
  strokeColor: PropTypes.oneOf(colorDefinitions),
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

SvgIcon.defaultProps = {
  icon: 'none',
  fillColor: 'primary',
  strokeColor: 'primary',
  height: 20,
  width: 20,
  className: undefined,
  style: undefined,
};
