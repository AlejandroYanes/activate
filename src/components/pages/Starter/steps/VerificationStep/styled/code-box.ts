import styled, { css } from 'styled-components';
import { Layout } from 'activate-components';

const boxStyles = {
  [Layout.DESKTOP]: css`
    max-width: 320px;
    padding: 32px 0 0 0;
    align-items: flex-end;

    & button {
      margin-left: 24px;
    }
  `,
  [Layout.TABLET]: css`
    max-width: 320px;
    padding: 32px 0 0 0;
    align-items: flex-end;

    & button {
      margin-left: 24px;
    }
  `,
  [Layout.MOBILE]: css`
    flex-direction: column;
    padding: 32px 8px 0;

    & button {
      margin-top: 40px;
    }
  `,
};

export const CodeBox = styled.div`
  display: flex;
  ${({ theme }) => boxStyles[theme.layout]};
`;
