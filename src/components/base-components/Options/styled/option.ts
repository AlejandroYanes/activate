import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Variations } from 'styles/colors';
import { anyPropsAttrs, getColorVariation } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';

const sizeMap = {
  small: 20,
  medium: 28,
  large: 26,
};

const getBackgroundColor = (props) => {
  const { theme: { colors }, color } = props;
  return getColorVariation(colors, color, Variations.SHADE);
};

export const Option = styled.li.attrs(anyPropsAttrs)`
  margin: 0 6px 0 0;
  padding: 2px 6px;
  display: flex;
  border-radius: 16px;
  min-width: 48px;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  height: ${({ size }) => `${sizeMap[size]}px`};
  ${({ fullWidth }) => fullWidth ? 'flex: 1;' : ''}

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
  const { theme: { colors }, color } = props;
  const bgColor = getColorVariation(colors, color, Variations.BG);
  const bgHoverColor = getColorVariation(colors, color, Variations.BG_HIGHLIGHT);

  return css`
    background-color: ${bgColor};
    &:hover, &:focus {
      background-color: ${bgHoverColor};
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
