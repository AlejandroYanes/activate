import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import Colors from 'styles/colors';

export const Panel = styled.aside`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.MEDIUM_GRAY};
  box-sizing: border-box;
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
`;

export const PanelBody = styled(SimpleBar)`
  padding: 0 16px;
  height: calc(100vh - 76px);
  box-sizing: border-box;
`;
