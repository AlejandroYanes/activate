import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

const bodyStyleMap = {
  [Layout.DESKTOP]: `
  margin-top: 0px;
  `,
  [Layout.TABLET]: `
  margin-top: 0px;
  `,
  [Layout.MOBILE]: css`
    padding: 32px 16px;
    overflow: hidden auto;
  `,
};

export const Body = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  ${({ theme: { layout } }) => bodyStyleMap[layout]}
`;
