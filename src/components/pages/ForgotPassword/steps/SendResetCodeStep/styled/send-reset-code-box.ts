import styled, { css } from 'styled-components';
import { Layout } from 'activate-components';

const boxStyles = {
  [Layout.DESKTOP]: css`
    max-width: 320px;
    align-items: flex-end;

    & button {
      margin-left: 24px;
    }
  `,
  [Layout.TABLET]: css`
    max-width: 320px;
    align-items: flex-end;

    & button {
      margin-left: 24px;
    }
  `,
  [Layout.MOBILE]: css`
    flex-direction: column;
    padding: 0 8px 0;

    & button {
      margin-top: 40px;
    }
  `,
};

export const SendResetCodeBox = styled.div`
  display: flex;
  ${({ theme }) => boxStyles[theme.layout]};
`;
