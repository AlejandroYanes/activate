import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';
import Button from 'components/base-components/Button';

const buttonStyles = {
  [Layout.DESKTOP]: css`
    padding: 0 16px;
    width: 120px;
    margin-left: 468px;
    margin-top: 32px;
  `,
  [Layout.TABLET]: css`
    padding: 0 18px;
    width: 140px;
    margin-left: 416px;
    margin-top: 32px;
  `,
  [Layout.MOBILE]: css`
    margin-top: 48px;
  `,
};

export const NextButton = styled(Button)`
  ${({ theme }) => buttonStyles[theme.layout]};
`;
