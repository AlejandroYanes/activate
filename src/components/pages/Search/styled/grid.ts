import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const columnsMap = {
  [Layout.DESKTOP]: css`
    grid-template-columns: repeat(3, 1fr);
  `,
  [Layout.TABLET]: css`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 16px;
  `,
  [Layout.MOBILE]: css`grid-template-columns: repeat(1, 1fr);`,
};

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: stretch;
  column-gap: 32px;
  row-gap: 32px;
  ${({ theme: { layout } }) => columnsMap[layout]};
`;
