import styled, { css } from 'styled-components';
import {
  anyPropsAttrs,
  getBgdColor,
  headerHeight,
  Layout,
  mobileHeaderHeight,
  ZLevels,
} from 'activate-components';

const headerStyleMap = {
  [Layout.DESKTOP]: css`
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
  `,
  [Layout.TABLET]: css`
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
    background-color: ${getBgdColor};
  `,
  [Layout.MOBILE]: css`
    height: ${mobileHeaderHeight}px;
    min-height: ${mobileHeaderHeight}px;
    padding: 0 8px;
  `,
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  background-color: ${getBgdColor};
  z-index: ${ZLevels.componentLevel2};
  ${({ theme: { layout } }) => headerStyleMap[layout]};
`;
