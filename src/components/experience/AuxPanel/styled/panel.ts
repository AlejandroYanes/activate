import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import Colors from 'styles/colors';

export const Panel = styled.aside`
  position: relative;
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.BRAND_LIGHT};
  box-sizing: border-box;

  svg#blob {
    position: absolute;
    height: 100%;
  }
`;

export const PanelHeader = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  z-index: 1;
`;

export const PanelBody = styled(SimpleBar)`
  padding: 0 16px;
  height: calc(100vh - 76px);
  box-sizing: border-box;
`;
