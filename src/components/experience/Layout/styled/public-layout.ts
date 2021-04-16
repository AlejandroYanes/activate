import styled, { css } from 'styled-components';
import { anyPropsAttrs, getBgdColor } from 'helpers';
import { Layout } from 'components/providers/Layout';
import { headerHeight, mobileHeaderHeight } from '../../../../styles/variables';
import { ZLevels } from '../../../../styles/z-levels';

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
    padding: 0 8px;
  `,
};

export const StyledApp = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  height: 100%;
  ${({ layout }) => layoutMap[layout]};
`;

const headerStyleMap = {
  [Layout.DESKTOP]: css`
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
