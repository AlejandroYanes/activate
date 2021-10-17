import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';
import { anyPropsAttrs } from 'helpers';

const contentStyleMap = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
  `,
};

export const Content = styled.section.attrs(anyPropsAttrs)`
  ${({ theme }) => contentStyleMap[theme.layout]};
`;
