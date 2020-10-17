import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins, PositionProps } from 'helpers';

export const StyledDateTimePicker = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  cursor: default;
`;

export const Label = styled.label.attrs((props: any) => props)`
  margin-left: 16px;
  margin-bottom: 6px;
  transition: all 150ms linear;
  color: ${Colors.DARK};
`;

const getRightPadding = (props) => `${props.padRight ? 38 : 16}px`;

export const Content = styled.div.attrs((props: any) => props)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px ${getRightPadding} 8px 16px;
  border-radius: 50px;
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  border: 1px solid ${Colors.MEDIUM_GRAY};
  background-color: ${Colors.WHITE};
  cursor: pointer;

  &:hover {
    border-color: ${Colors.DARK};
  }

  &:focus {
    border-color: ${Colors.BRAND_DARK};
  }
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${Colors.GRAY};
  height: 20px;
`;

export const AbsoluteContent = styled.div.attrs((props: any) => props)`
  position: absolute;
  bottom: 4px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 8px'};
  display: flex;
  align-items: center;
`;
