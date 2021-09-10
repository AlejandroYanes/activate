import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const StyledApp = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
