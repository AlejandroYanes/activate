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

const getLabelColor = (props) => {
  const { focused } = props;
  return `color: ${focused ? Colors.BRAND_DARK : Colors.DARK}`;
};

export const StyledLabel = styled.label.attrs((props: any) => props)`
  margin-left: 16px;
  margin-bottom: 6px;
  transition: all 150ms linear;
  ${getLabelColor};
`;

const getPadding = (count) => count * 20 + 20;
const getLeftPadding = (props) => `padding-left: ${getPadding(props.leftItems)}px`;
const getRightPadding = (props) => `padding-right: ${getPadding(props.rightItems)}px`;

export const StyledInput = styled.input.attrs((props: any) => props)`
  border-radius: 50px;
  border: 1px solid ${Colors.MEDIUM_GRAY};
  background-color: ${Colors.WHITE};
  color: ${Colors.DARK};
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

export const AbsoluteContent = styled.div.attrs((props: any) => props)`
  position: absolute;
  bottom: 4px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 8px'};
  display: flex;
  align-items: center;
`;
