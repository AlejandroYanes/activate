import styled from 'styled-components';
import { getMargins, PositionProps } from 'helpers';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

const getFocusStyles = (props) => {
  const { theme: { useDarkStyle, colors } } = props;
  const focusedColor = useDarkStyle ? colors.BRAND : colors.BRAND_DARK;

  return `
    border-color: ${focusedColor};
    color: ${focusedColor};
  `;
};

export const StyledTextArea = styled.textarea`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY_LIGHT};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  color: ${({ theme }) => theme.colors.FONT};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  padding: 8px 40px 8px 20px;
  margin: 0;
  flex: 1;
  min-width: 0;
  resize: none;
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
