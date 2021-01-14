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
`;

export const AppBody = styled.section`
  flex: 1;
  padding: 32px;
  box-sizing: border-box;
  height: 100vh;
  overflow: auto;
`;
