import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const StyledTabset = styled.ul.attrs((props: any) => props)`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: transparent;
  ${getPositionStyles};
`;
