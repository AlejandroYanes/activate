import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const AbsoluteContent = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  top: 24px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 20px'};
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
