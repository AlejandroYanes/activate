import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import Colors from '../../../styles/colors';

export const StyledApp = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${Colors.LIGHT_GRAY};
`;

export const AppBody = styled(SimpleBar)`
  flex: 1;
  padding: 32px;
  box-sizing: border-box;
`;
