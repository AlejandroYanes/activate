import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Variations } from 'styles/colors';
import { anyPropsAttrs, getColorVariation } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';

const getSizeStyles = (props) => {
  const { size } = props;

  switch (size) {
    case 'small':
      return css`
        height: 24px;
        padding: 4px 6px;
      `;
    case 'large':
      return css`
        height: 38px;
        padding: 6px 14px;
      `;
    default:
      return css`
        height: 32px;
        padding: 4px 14px;
      `;
  }
};

const getBackgroundColor = (props) => {
  const { theme: { colors }, color } = props;
  return getColorVariation(colors, color, Variations.SHADE);
};

export const Option = styled.li.attrs(anyPropsAttrs)`
  margin: 0 6px 0 0;
  display: flex;
  align-items: center;
  border-radius: 16px;
  min-width: 48px;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  box-sizing: border-box;
  ${getSizeStyles};
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
