import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';
import { ZLevels } from '../../../../styles/z-levels';

const layoutMap = {
  [Layout.FULL]: css`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 32px;
    border-radius: 16px;
    height: calc(100vh - 64px);
  `,
  [Layout.MIDDLE]: css`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 32px;
    border-radius: 16px;
    height: calc(100vh - 64px);
  `,
  [Layout.SMALL]: css`
    display: flex;
    align-items: stretch;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${ZLevels.sidePanels};
  `,
};

export const MenuList = styled.ul.attrs(anyPropsAttrs)`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  ${({ layout }) => layoutMap[layout]};
`;
