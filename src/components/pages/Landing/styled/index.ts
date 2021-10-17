import styled, { css } from 'styled-components';
import { Layout, anyPropsAttrs } from 'activate-components';

const contentStyleMap = {
  [Layout.DESKTOP]: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  `,
  [Layout.TABLET]: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    & > div:first-child {
      width: 100%;
    }

    & > div:last-child {
      margin: 0;
      width: 100%;
    }
  `,
};

export const Content = styled.section.attrs(anyPropsAttrs)`
  ${({ layout }) => contentStyleMap[layout]};
`;
