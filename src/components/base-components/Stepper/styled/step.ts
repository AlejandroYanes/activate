import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const stepSize = 40;
const borderSize = 2;

const getContainerStyles = (props) => {
  const { readOnly, isActive, theme: { colors } } = props;

  if (readOnly) {
    const borderColor = isActive ? colors.BRAND : 'transparent';
    return  css`border-color: ${borderColor};`;
  }

  const borderColor = isActive ? colors.BRAND : 'transparent';
  const hoverColor = isActive ? colors.BRAND_HIGHLIGHT : colors.BRAND_SHADE;
  const fontHoverColor = isActive ? colors.WHITE : colors.FONT;
  const focusColor = colors.BRAND_HIGHLIGHT;

  return css`
    cursor: pointer;
    border-color: ${borderColor};

    &:hover {
    outline: none;
    border-color: ${hoverColor};

    > span {
      color: ${fontHoverColor};
      background-color: ${hoverColor};
    }
  }

    &:focus, &:active {
    outline: none;
    border-color: ${focusColor};

    > span {
      color: ${({ theme }) => theme.colors.WHITE};
      background-color: ${focusColor};
    }
  }
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
  ${getContainerStyles};
  transition: all 150ms linear;
`;

const getStepStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const bgColor = isActive ? colors.BRAND : colors.FONT_SHADE;
  const fontColor = isActive ? colors.WHITE : colors.FONT;
  const size = isActive ? stepSize - 10 - borderSize : stepSize - borderSize;

  return css`
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

const guideStyles = {
  [Layout.DESKTOP]: css`
    width: ${borderSize}px;
    height: ${stepSize * 0.65}px;
  `,
  [Layout.TABLET]: css`
    width: ${borderSize}px;
    height: ${stepSize * 0.65}px;
  `,
  [Layout.MOBILE]: css`
    height: ${borderSize}px;
    flex: 1;
  `,
};

const getGuideStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const bgColor = isActive ? colors.BRAND : colors.FONT_SHADE;

  return css`
      background-color: ${bgColor};
    `;
};

export const Guide = styled.div.attrs(anyPropsAttrs)`
  ${({ theme }) => guideStyles[theme.layout]}
  ${getGuideStyles};
`;
