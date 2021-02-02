import styled from 'styled-components';
import { motion } from 'framer-motion';
import { anyPropsAttrs } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';

const sizeMap = {
  small: 20,
  medium: 28,
  large: 26,
};

const getBackgroundColor = (props) => {
  const { theme: { colors }, color } = props;
  return colors[`${color.toUpperCase()}_SHADE`];
};

export const Option = styled.li.attrs(anyPropsAttrs)`
  margin: 0 6px 0 0;
  padding: 2px 6px;
  display: flex;
  border-radius: 16px;
  min-width: 48px;
  position: relative;
  cursor: pointer;
  height: ${({ size }) => `${sizeMap[size]}px`};
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: transparent;

  &:hover, &:focus {
    outline: none;
    background-color: ${getBackgroundColor};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Label = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  pointer-events: none;
`;

export const Icon = styled(SvgIcon)`
  margin-right: 6px;
`;

const getMarkColorStyles = (props) => {
  const { theme: { useDarkStyle, colors }, color } = props;

  if (useDarkStyle) {
    return `
      background-color: ${colors[color.toUpperCase()]};
      &:focus {
        background-color: ${colors[`${color.toUpperCase()}_LIGHT`]};
      }
    `;
  }

  return `
    background-color: ${colors[color.toUpperCase()]};
    &:focus {
      background-color: ${colors[`${color.toUpperCase()}_DARK`]};
    }
  `;
};

export const Mark = styled(motion.div).attrs(anyPropsAttrs)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 16px;
  ${getMarkColorStyles};
`;
