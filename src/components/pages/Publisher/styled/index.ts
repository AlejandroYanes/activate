import styled from 'styled-components';

export const UsersCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 24px 20px 24px 8px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
