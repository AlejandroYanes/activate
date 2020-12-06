import styled from 'styled-components';
import { getMargins, PositionProps } from 'helpers';

export const StyledDateTimePicker = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  cursor: default;
`;
