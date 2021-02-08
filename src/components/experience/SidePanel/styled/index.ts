import styled from 'styled-components';

export const StyledSidePanel = styled.aside`
  padding: 32px 32px 32px 0;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 16px;
  width: 380px;
  height: calc(100vh - 64px);
  padding: 16px 0 24px;
  position: sticky;
  top: 32px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const PanelHeader = styled.div`
  padding: 0 16px 16px;
  box-sizing: border-box;
  z-index: 1;
`;

export const PanelBody = styled.section`
  box-sizing: border-box;
  padding: 0 16px;
  margin-top: 8px;
  overflow: auto;
  flex: 1;
`;
