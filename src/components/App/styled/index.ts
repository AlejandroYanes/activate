import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledApp = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${Colors.LIGHT_GRAY};
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
  overflow: auto;
  height: 100vh;
  padding: 32px 0 0;
`;
