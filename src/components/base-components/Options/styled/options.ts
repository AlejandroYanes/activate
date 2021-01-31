import styled from 'styled-components';
import { getMargins } from 'helpers';

export const Options = styled.ul`
  list-style: none;
  display: flex;
  padding: 4px;
  ${getMargins};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
