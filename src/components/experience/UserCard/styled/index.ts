import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 32px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
