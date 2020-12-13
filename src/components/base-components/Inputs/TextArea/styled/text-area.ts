import styled from 'styled-components';
import { getMargins, PositionProps } from 'helpers';
import Colors from 'styles/colors';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

export const StyledTextArea = styled.textarea`
  border-radius: 10px;
  border: 1px solid ${Colors.MEDIUM_GRAY};
  background-color: ${Colors.WHITE};
  color: ${Colors.DARK};
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
    background-color: ${Colors.BRAND};
    color: ${Colors.WHITE};
  }

  &:hover {
    border-color: ${Colors.DARK};
  }

  &:focus {
    border-color: ${Colors.BRAND_DARK};
    color: ${Colors.BRAND_DARK};
  }
`;
