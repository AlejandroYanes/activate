import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const asideStyles = {
  [Layout.DESKTOP]: css`
    padding-top: 32px;

    & > div {
      position: sticky;
      top: 124px;
    }
  `,
  [Layout.TABLET]: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 48px;
  `,
  [Layout.MOBILE]: css`
    display: none;
  `,
};

export const Aside = styled.div`
  ${({ theme }) => asideStyles[theme.layout]};
`;
