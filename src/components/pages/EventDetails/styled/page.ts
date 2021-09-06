import styled from 'styled-components';
import { anyPropsAttrs, getBgdLightColor } from 'helpers';

export const StyledEventDetail = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  background-color: ${getBgdLightColor};
`;
