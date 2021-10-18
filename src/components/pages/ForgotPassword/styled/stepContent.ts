import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const stepContentStyles = {
  [Layout.DESKTOP]: css`
    flex: 1;
    padding-right: 48px;
    min-width: 0;
  `,
  [Layout.TABLET]: '',
  [Layout.MOBILE]: '',
};

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => stepContentStyles[theme.layout]};
`;
