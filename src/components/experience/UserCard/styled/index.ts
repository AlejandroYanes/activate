import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const Card = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 16px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
