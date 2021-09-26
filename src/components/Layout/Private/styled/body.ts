import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';


export const Body = styled.section.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  height: 100%;
  max-height: 100%;
  flex: 1;
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
`;
