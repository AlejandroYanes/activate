import styled from 'styled-components';
import { anyPropsAttrs, getBgdLightColor } from 'helpers';

export const StyledSettings = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  background-color: ${getBgdLightColor};
  border-radius: 16px;
  padding: 24px;
`;
