import styled, { css } from 'styled-components';
import { Layout } from 'activate-components';

const contentStyles = {
  [Layout.DESKTOP]: css`
    flex: 1;
    padding-right: 48px;
    min-width: 0;
  `,
  [Layout.TABLET]: '',
  [Layout.MOBILE]: '',
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => contentStyles[theme.layout]};
`;
