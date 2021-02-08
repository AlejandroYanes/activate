import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    max-width: 1366px;
    margin: 0 auto;
  `,
  [Layout.MIDDLE]: css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
  `,
  [Layout.SMALL]: css`
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
  `,
};

export const StyledApp = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  ${({ layout }) => layoutMap[layout]};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.colors.FONT};
  position: relative;
  box-sizing: border-box;
`;
