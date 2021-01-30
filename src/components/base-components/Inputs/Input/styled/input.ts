import styled from 'styled-components';
import { getMargins, PositionProps } from 'helpers';
import { inputBorderRadius } from 'styles/variables';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

const getPadding = (count) => count * 20 + 20;
const getLeftPadding = (props) => `padding-left: ${getPadding(props.leftItems)}px`;
const getRightPadding = (props) => `padding-right: ${getPadding(props.rightItems)}px`;

const getFocusStyles = (props) => {
  const { theme: { useDarkStyle, colors } } = props;
  const focusedColor = useDarkStyle ? colors.BRAND : colors.BRAND_DARK;

  return `
    border-color: ${focusedColor};
    color: ${focusedColor};
  `;
};

export const StyledInput = styled.input.attrs((props: any) => props)`
  border-radius: ${inputBorderRadius};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_LIGHT};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  color: ${({ theme }) => theme.colors.FONT};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  padding-top: 8px;
  padding-bottom: 8px;
  ${getLeftPadding};
  ${getRightPadding};
  margin: 0;
  flex: 1;
  min-width: 0;
  transition: all 150ms linear;

  &::selection {
    background-color: ${({ theme }) => theme.colors.BRAND};
    color: ${({ theme }) => theme.colors.WHITE};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.FONT};
  }

  &:focus {
    ${getFocusStyles};
  }
`;
