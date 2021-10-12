import styled, { css } from 'styled-components';
import { Layout } from 'components/base-components/Configuration';

const stepStyles = {
  [Layout.DESKTOP]: css`
    height: 100%;
    display: flex;
    align-items: stretch;
  `,
  [Layout.TABLET]: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
  `,
};

export const Step = styled.div`
  ${({ theme }) => stepStyles[theme.layout]};
`;
