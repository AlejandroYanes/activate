import styled from 'styled-components';
import Colors from 'styles/colors';

const getStylesBasedOnWindowWidth = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1366) {
    return `
      margin: 16px 0;
      border-radius: 16px;
    `;
  }
  return '';
};

export const Panel = styled.aside`
  position: relative;
  width: 380px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${Colors.WHITE};
  ${getStylesBasedOnWindowWidth};
`;

export const PanelHeader = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  z-index: 1;
`;

export const PanelBody = styled.section`
  height: calc(100vh - 76px);
  box-sizing: border-box;
`;
