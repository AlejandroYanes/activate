import styled from 'styled-components';
import { Layout, anyPropsAttrs } from 'activate-components';

const layoutMap = {
  [Layout.DESKTOP]: `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 48px 32px;
  `,
  [Layout.TABLET]: `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 32px 32px;
  `,
  [Layout.MOBILE]: `
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
  `,
};

export const App = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  height: 100%;
  ${({ theme: { layout } }) => layoutMap[layout]};
`;
