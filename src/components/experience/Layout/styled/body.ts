import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';


export const Body = styled.section.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
