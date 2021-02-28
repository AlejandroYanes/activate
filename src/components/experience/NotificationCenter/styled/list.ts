import styled, { css } from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`margin: 0 32px 0 0`,
  [Layout.MIDDLE]: css`margin: 0 32px 0 0`,
  [Layout.SMALL]: css`margin: 0 8px 0 8px`,
};

export const Notifications = styled.ul.attrs(anyPropsAttrs)`
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0;
  ${({ layout }) => layoutMap[layout]};
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  z-index: ${ZLevels.notifications};
`;
