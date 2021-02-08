import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  flex: 1;
`;
