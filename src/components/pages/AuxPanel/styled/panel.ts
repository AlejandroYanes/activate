import styled from 'styled-components';
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
  padding: 1rem;
`;
