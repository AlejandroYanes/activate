import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';
import Button from 'components/base-components/Button';

const buttonStyles = {
  [Layout.DESKTOP]: css`
    margin: 16px auto 0 382px;
    padding: 0 18px;
  `,
  [Layout.TABLET]: css`
    margin: 24px 0 0 348px;
    width: 140px;
    padding: 0 18px;
  `,
  [Layout.MOBILE]: css`
    margin-top: 48px;
    height: 42px;
  `,
};

export const FinishButton = styled(Button)`
  ${({ theme }) => buttonStyles[theme.layout]};
`;
