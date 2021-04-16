import styled, { css } from 'styled-components';
import { anyPropsAttrs, getBgdColor } from 'helpers';
import { headerHeight, mobileHeaderHeight } from 'styles/variables';
import { ZLevels } from 'styles/z-levels';
import { Layout } from 'components/providers/Layout';

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

export const StyledApp = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  height: 100%;
  ${({ layout }) => layoutMap[layout]};
`;

const headerStyleMap = {
  [Layout.DESKTOP]: `
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
  `,
  [Layout.TABLET]: `
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
  `,
  [Layout.MOBILE]: `
    height: ${mobileHeaderHeight}px;
    min-height: ${mobileHeaderHeight}px;
    padding: 0 8px;
  `,
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${getBgdColor};
  position: sticky;
  top: 0;
  z-index: ${ZLevels.componentLevel2};
  ${({ layout }) => headerStyleMap[layout]};
`;

const contentStyleMap = {
  [Layout.DESKTOP]: `
  margin-top: 20px;
  `,
  [Layout.TABLET]: `
  margin-top: 20px;
  `,
  [Layout.MOBILE]: css`
    padding: 32px 8px;
    overflow: hidden auto;
  `,
};

export const Content = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  ${({ layout }) => contentStyleMap[layout]}
`;
