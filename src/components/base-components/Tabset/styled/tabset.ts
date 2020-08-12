import styled from 'styled-components';
import { getMargins } from 'components/_base';

export const StyledTabset = styled.ul.attrs((props: any) => props)`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  ${getMargins};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;