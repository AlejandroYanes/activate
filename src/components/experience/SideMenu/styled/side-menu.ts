import styled, { css }  from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0 32px 32px;
  `,
  [Layout.MIDDLE]: css`
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0 32px 32px;
  `,
  [Layout.SMALL]: css`
    height: 78px;
    display: flex;
    align-items: stretch;
  `,
}

export const SideMenu = styled.aside.attrs(anyPropsAttrs)`
  ${({ layout }) => layoutMap[layout]};
`;
