import styled from 'styled-components';
import { anyPropsAttrs, getBrandHlColor } from 'helpers';

const stepSize = 40;
const borderSize = 2;

const getContainerStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const borderColor = isActive ? colors.BRAND : 'transparent';

  return `
    border-color: ${borderColor};
  `;
};

export const Container = styled.button.attrs(anyPropsAttrs)`
  padding: 0;
  border-radius: 50px;
  height: ${stepSize}px;
  width: ${stepSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${borderSize}px solid transparent;
  background: transparent;
  cursor: pointer;
  ${getContainerStyles};
  transition: all 150ms linear;

  &:focus, &:active {
    outline: none;
    border-color: ${getBrandHlColor};

    > span {
      color: ${({ theme }) => theme.colors.WHITE};
      background-color: ${getBrandHlColor};
    }
  }
`;

const getStepStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const bgColor = isActive ? colors.BRAND : colors.FONT_SHADE;
  const fontColor = isActive ? colors.WHITE : colors.FONT;
  const size = isActive ? stepSize - 10 - borderSize : stepSize - borderSize;

  return `
      background-color: ${bgColor};
      color: ${fontColor};
      width: ${size}px;
      height: ${size}px;
    `;
};

export const StyledStep = styled.span.attrs(anyPropsAttrs)`
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${stepSize / 2}px;
  ${getStepStyles};
  transition: all 150ms linear;
`;

const getGuideStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const bgColor = isActive ? colors.BRAND : colors.FONT_SHADE;

  return `
      background-color: ${bgColor};
    `;
};

export const Guide = styled.div.attrs(anyPropsAttrs)`
  width: ${borderSize}px;
  height: ${stepSize * 0.65}px;
  ${getGuideStyles};
`;
