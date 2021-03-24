import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
