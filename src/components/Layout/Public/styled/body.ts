import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const bodyStyleMap = {
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

export const Body = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  ${({ theme: { layout } }) => bodyStyleMap[layout]}
`;
