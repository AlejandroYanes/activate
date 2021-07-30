import styled from 'styled-components';
import {
  getBgdColor,
  getFontShadeColor,
  getPositionStyles,
} from 'helpers';

export const Options = styled.ul`
  list-style: none;
  display: flex;
  padding: 4px;
  ${getPositionStyles};
  border-radius: 20px;
  background-color: ${getBgdColor};
  border: 1px solid ${getFontShadeColor};
`;
