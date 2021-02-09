import styled, { css } from 'styled-components';
import { getMargins, PositionProps } from 'helpers';
import { inputBorderRadius } from 'styles/variables';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

const getPadding = (pad: boolean) => (pad ? 1 : 0) * 20 + 20;
const getLeftPadding = ({ padLeft }) => `padding-left: ${getPadding(padLeft)}px`;
const getRightPadding = ({ padRight }) => `padding-right: ${getPadding(padRight)}px`;

export const getColorStyles = (props) => {
  const { theme: { useDarkStyle, colors } } = props;

  if (useDarkStyle) {
    return css`
    border: 1px solid ${colors.GRAY_SHADE};
    background-color: ${colors.BACKGROUND_LIGHT};
    color: ${colors.FONT};
    transition: all 150ms linear;

    &::selection {
      background-color: ${colors.BRAND};
      color: ${colors.WHITE};
    }

    &:hover {
      border-color: ${colors.GRAY_DARK};
    }

    &:focus {
      border-color: ${colors.BRAND};
      color: ${colors.BRAND};
    }
    `;
  }

  return css`
      border: 1px solid ${colors.GRAY_SHADE};
      background-color: ${colors.BACKGROUND_LIGHT};
      color: ${colors.FONT};
      transition: all 150ms linear;

      &::selection {
        background-color: ${colors.BRAND};
        color: ${colors.WHITE};
      }

      &:hover {
        border-color: ${colors.GRAY_DARK};
      }

      &:focus {
        border-color: ${colors.BRAND};
        color: ${colors.BRAND};
      }
  `;
};

export const StyledInput = styled.input.attrs((props: any) => props)`
  border-radius: ${inputBorderRadius};
  font-size: 16px;
  font-family: "MPlus Rounded Normal", sans-serif;
  letter-spacing: 0.5px;
  outline: none;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  flex: 1;
  min-width: 0;
  ${getLeftPadding};
  ${getRightPadding};
  ${getColorStyles};
`;
