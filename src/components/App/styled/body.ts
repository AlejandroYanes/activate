import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    padding: 32px 0 0;
  `,
  [Layout.MIDDLE]: css`
    padding: 32px 0 0;
  `,
  [Layout.SMALL]: css`
    padding: 32px 8px 90px;
  `,
};

export const Body = styled.section.attrs(anyPropsAttrs)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  ${({ layout }) => layoutMap[layout]};
  //visibility: hidden;
`;
