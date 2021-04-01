import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.TABLET]: css`
    bottom: 32px;
  `,
  [Layout.MOBILE]: css`
    bottom: 90px;
  `,
};

export const Floating = styled.div.attrs(anyPropsAttrs)`
  position: fixed;
  ${({ layout }) => layoutMap[layout]};
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
