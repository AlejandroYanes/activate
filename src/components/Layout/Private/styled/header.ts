import styled, { css } from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import { headerHeight, mobileHeaderHeight } from 'styles/variables';
import { anyPropsAttrs, getBgdColor } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

const headerStyleMap = {
  [Layout.DESKTOP]: css`
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
    background-color: ${getBgdColor};
  `,
  [Layout.TABLET]: css`
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
    background-color: ${getBgdColor};
  `,
  [Layout.MOBILE]: css`
    height: ${mobileHeaderHeight}px;
    min-height: ${mobileHeaderHeight}px;
    background-color: ${getBgdColor};
  `,
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: ${ZLevels.componentLevel2};
  ${({ theme: { layout } }) => headerStyleMap[layout]};
`;
