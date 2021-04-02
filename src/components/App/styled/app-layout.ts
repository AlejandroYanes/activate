import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.DESKTOP]: css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    max-width: 1366px;
    margin: 0 auto;
  `,
  [Layout.TABLET]: css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  `,
  [Layout.MOBILE]: css`
    height: 100%;
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
};

export const StyledApp = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  ${({ layout }) => layoutMap[layout]};
`;
