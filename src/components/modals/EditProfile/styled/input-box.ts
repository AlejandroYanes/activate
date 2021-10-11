import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const inputBoxStyles = {
  [Layout.DESKTOP]: css`
    display: flex;
    flex-direction: column;
    width: 45%;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
  `,
};

export const InputBox = styled.div`
  ${({ theme }) => inputBoxStyles[theme.layout]};
`;
