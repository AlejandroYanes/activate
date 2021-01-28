import styled from 'styled-components';
import { getMargins } from 'helpers';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: ${getMargins};

  & > li {
  }
`;
