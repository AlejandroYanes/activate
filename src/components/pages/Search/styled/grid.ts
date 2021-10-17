import styled, { css } from 'styled-components';
import { Layout } from 'activate-components';

const columnsMap = {
  [Layout.DESKTOP]: css`
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    margin: 0 auto;
  `,
  [Layout.TABLET]: css`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 16px;
    margin: 0 auto;
  `,
  [Layout.MOBILE]: css`
    grid-template-columns: repeat(1, 1fr);
    row-gap: 16px;
  `,
};

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: stretch;
  ${({ theme: { layout } }) => columnsMap[layout]};
`;
