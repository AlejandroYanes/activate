import styled from 'styled-components';
import { cardWidth } from 'styles/variables';

export const StyledPage = styled.article`
  display: flex;
  flex-direction: column;
  width: ${cardWidth};
  margin-bottom: 32px;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.BRAND};
`;
