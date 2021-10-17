import styled, { css } from 'styled-components';
import { Layout, Button } from 'activate-components';

const buttonStyles = {
  [Layout.DESKTOP]: css`
    padding: 0 16px;
    width: 120px;
    margin-left: auto;
    margin-top: auto;
  `,
  [Layout.TABLET]: css`
    padding: 0 18px;
    width: 140px;
    margin-left: auto;
    margin-top: auto;
  `,
  [Layout.MOBILE]: css`
    margin-top: 48px;
  `,
};

export const NextButton = styled(Button)`
  ${({ theme }) => buttonStyles[theme.layout]};
`;
