import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const sizeMap = { large: '210px', medium: '160px', small: '110px' };

export const StyledItem = styled.li.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 12px;
  height: ${({ size }) => sizeMap[size]};
  width: ${({ size }) => sizeMap[size]};
`;

const getMarkColor = (props) => {
  const { theme: { useDarkStyle, colors }, color } = props;
  return css`background-color: ${useDarkStyle ? colors.FONT : colors[color.toUpperCase()]}`;
};

export const Mark = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  width: 88px;
  height: 48px;
  right: -44px;
  top: -16px;
  transform: rotate(45deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all 150ms linear;
  ${getMarkColor};

  & > * {
    transform: rotate(-45deg);
    margin-right: 10px;
  }
`;

const getColorStyles = (props) => {
  const { theme: { useDarkStyle, colors }, color, isSelected } = props;

  if (useDarkStyle) {
    const borderColor = isSelected
      ? colors.FONT
      : colors.GRAY_DARK;

    const hoverColor = colors.FONT;

    return css`
      border: 2px solid ${borderColor};
      &:hover, &:focus {
        outline: none;
        border-color: ${hoverColor};
        ${Mark} {
          background-color: ${hoverColor};
        }
      }
    `;
  }

  const borderColor = isSelected
    ? colors[color.toUpperCase()]
    : colors.GRAY_LIGHT;

  const hoverColor = colors[`${color.toUpperCase()}_LIGHT`];

  return css`
    border: 2px solid ${borderColor};
    &:hover, &:focus {
      outline: none;
      border-color: ${hoverColor};
      ${Mark} {
        background-color: ${hoverColor};
      }
    }
  `;
};

export const Touchable = styled.button.attrs(anyPropsAttrs)`
  height: 100%;
  width: 100%;
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  ${getColorStyles};
  transition: all 100ms linear;

  &:active {
    transform: scale(0.95);
  }
`;
