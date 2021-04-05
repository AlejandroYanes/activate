import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';
import { headerHeight } from 'styles/variables';

export const StyledSidePanel = styled.aside`
  padding: 32px 32px 32px 0;
`;

const layoutMap = {
  [Layout.DESKTOP]: css`
    width: 380px;
    border-radius: 16px;
    height: calc(100vh - 64px);
    padding: 0 0 24px;
    position: sticky;
    top: 32px;
  `,
  [Layout.TABLET]: css`
    width: 380px;
    border-radius: 16px;
    height: calc(100vh - 64px);
    padding: 0 0 24px;
    position: sticky;
    top: 32px;
  `,
};

export const StyledPanel = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${({ layout }) => layoutMap[layout]};
`;

export const PanelHeader = styled.header`
  padding: 0 16px;
  margin-bottom: 6px;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  height: ${headerHeight}px;
`;

export const PanelBody = styled.main`
  box-sizing: border-box;
  padding: 0;
  overflow: hidden auto;
  flex: 1;
`;
