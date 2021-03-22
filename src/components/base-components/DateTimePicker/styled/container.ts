import styled from 'styled-components';
import { getPositionStyles, PositionProps } from 'helpers';

export const StyledDateTimePicker = styled.div.attrs((props: PositionProps) => props)`
  ${getPositionStyles};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  cursor: default;
`;
