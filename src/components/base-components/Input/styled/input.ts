import styled from 'styled-components';
import { getMargins, PositionProps } from 'components/_base';
import Colors from 'styles/colors';
import { getShade } from 'helpers';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  align-items: center;
  background-color: transparent;
  position: relative;
`;

const getPadding = (count) => count > 0 ? count * 20 + 12 : 16;

const getLeftPadding = (props) => `padding-left: ${getPadding(props.leftItems)}px`;
const getRightPadding = (props) => `padding-right: ${getPadding(props.rightItems)}px`;

export const StyledInput = styled.input.attrs((props: any) => props)`
  border-radius: 50px;
  border: 1px solid ${Colors.MEDIUM_GRAY};
  background-color: ${Colors.MEDIUM_GRAY};
  color: ${Colors.BRAND_DARK};
  font-size: 16px;
  outline: none;
  padding-top: 8px;
  padding-bottom: 8px;
  ${getLeftPadding};
  ${getRightPadding};
  margin: 0;
  flex: 1;
  min-width: 0;
  transition: all 150ms linear;

  &:hover {
    border-color: ${Colors.BRAND_SHADE};
  }

  &:focus {
    //box-shadow: 0 0 6px 0 ${getShade(Colors.BRAND, 0.26)};
    border-color: ${Colors.BRAND_DARK};
  }
`;

export const AbsoluteContent = styled.div.attrs((props: any) => props)`
  position: absolute;
  top: 8px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 8px'};
  display: flex;
  align-items: center;
`;
