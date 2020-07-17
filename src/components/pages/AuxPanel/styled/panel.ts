import styled from 'styled-components';
import Colors from 'styles/colors';

export const Panel = styled.aside`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.MEDIUM_GRAY};
  padding-top: 32px;
  box-sizing: border-box;
`;

export const PanelTop = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  padding-bottom: 10px;
`;

export const PanelBody = styled.main`
  flex: 1;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;
