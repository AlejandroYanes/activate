import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';
import { Button } from 'components/base-components/Button';

const buttonStyles = {
  [Layout.DESKTOP]: css`
    margin: auto 12px 0 auto;
    padding: 0 24px;
  `,
  [Layout.TABLET]: css`
    margin: auto 12px 0 auto;
    width: 140px;
    padding: 0 18px;
  `,
  [Layout.MOBILE]: css`
    margin-top: 24px;
  `,
};

export const FinishButton = styled(Button)`
  ${({ theme }) => buttonStyles[theme.layout]};
`;
