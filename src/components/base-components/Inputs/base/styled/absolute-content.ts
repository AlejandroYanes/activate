import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const AbsoluteContent = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  bottom: 8px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 8px'};
  display: flex;
  align-items: center;
`;
