import styled from 'styled-components';

export const StyledApp = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.colors.FONT};
  max-width: 1366px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const AppBody = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  //padding: 32px 0 0;
  padding: 32px 398px 0 122px;
  //visibility: hidden;
`;
