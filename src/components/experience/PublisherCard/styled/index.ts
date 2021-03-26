import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 32px;
  width: 320px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
