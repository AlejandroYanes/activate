import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const asideStyles = {
  [Layout.DESKTOP]: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 32px;
  `,
  [Layout.TABLET]: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
  `,
  [Layout.MOBILE]: css`
    display: none;
  `,
};

export const Aside = styled.div`
  ${({ theme }) => asideStyles[theme.layout]};
`;
