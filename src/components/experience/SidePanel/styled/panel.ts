import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

export const StyledSidePanel = styled.aside`
  padding: 32px 32px 32px 0;
`;

const layoutMap = {
  [Layout.FULL]: css`
    width: 380px;
    border-radius: 16px;
    height: calc(100vh - 64px);
    padding: 16px 0 24px;
    position: sticky;
    top: 32px;
  `,
  [Layout.MIDDLE]: css`
    width: 380px;
    border-radius: 16px;
    height: calc(100vh - 64px);
    padding: 16px 0 24px;
    position: sticky;
    top: 32px;
  `,
  [Layout.SMALL]: css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 0 24px;
  `,
};

export const Panel = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${({ layout }) => layoutMap[layout]};
`;

export const PanelHeader = styled.header`
  padding: 0 16px 8px;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const PanelBody = styled.main`
  box-sizing: border-box;
  padding: 0;
  overflow: auto;
  flex: 1;
`;
