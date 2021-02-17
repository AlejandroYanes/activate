import styled from 'styled-components';

export const Card = styled.section`
  border-radius: 16px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
