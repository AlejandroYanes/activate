import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const StyledApp = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const AppBody = styled(SimpleBar)`
  flex: 1;
  padding: 32px 54px 32px 32px;
  box-sizing: border-box;
`;
