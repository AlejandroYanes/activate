import styled from 'styled-components';
import { anyPropsAttrs, getFontShadeColor } from 'activate-components';

export const Card = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  min-width: 320px;
  border: 1px solid ${getFontShadeColor};
`;
