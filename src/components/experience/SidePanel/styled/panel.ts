import styled from 'styled-components';
import Colors from 'styles/colors';

export const Panel = styled.aside`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  width: 380px;
  margin: 32px 32px 32px 0;
  padding: 16px 0 24px;
  position: absolute;
  right: 0;
  z-index: 10;
  background-color: ${Colors.WHITE};
`;

export const PanelHeader = styled.div`
  padding: 0 16px 16px;
  box-sizing: border-box;
  z-index: 1;
`;

export const PanelBody = styled.section`
  height: calc(100vh - 164px);
  box-sizing: border-box;
  padding: 0 16px;
  margin-top: 8px;
  overflow: auto;
`;
