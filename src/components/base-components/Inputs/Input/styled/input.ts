import styled, { css } from 'styled-components';
import { getPositionStyles, PositionProps } from 'helpers';
import { inputBorderRadius } from 'styles/variables';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getPositionStyles};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

const getLeftPadding = ({ padLeft }) => `padding-left: ${padLeft ? 52 : 20}px`;
const getRightPadding = ({ padRight }) => `padding-right: ${padRight ? 48 : 20}px`;

export const getColorStyles = (props) => {
  const { theme: { colors } } = props;

  return css`
      border: 1px solid ${colors.FONT_SHADE};
      background-color: ${colors.BACKGROUND_LIGHT};
      color: ${colors.FONT};
      transition: all 150ms linear;

      &::selection {
        background-color: ${colors.BRAND};
        color: ${colors.WHITE};
      }

      &:hover {
        border-color: ${colors.FONT};
      }

      &:focus {
        border-color: ${colors.BRAND};
        color: ${colors.FONT};
      }
  `;
};

export const StyledInput = styled.input.attrs((props: any) => props)`
  font-size: 16px;
  font-family: Comfortaa, sans-serif;
  letter-spacing: 0.5px;
  outline: none;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  flex: 1;
  min-width: 0;
  min-height: 36px;
  height: 36px;
  box-sizing: border-box;
  border-radius: ${inputBorderRadius};
  transition: all 150ms linear;
  ${getLeftPadding};
  ${getRightPadding};
  ${getColorStyles};
`;
