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

const getLeftPadding = ({ padLeft }) => `padding-left: ${padLeft ? 48 : 20}px`;
const getRightPadding = ({ padRight }) => `padding-right: ${padRight ? 48 : 20}px`;

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
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  flex: 1;
  min-width: 0;
  min-height: 40px;
  height: 40px;
  box-sizing: border-box;
  ${getLeftPadding};
  ${getRightPadding};
  ${getColorStyles};
`;
