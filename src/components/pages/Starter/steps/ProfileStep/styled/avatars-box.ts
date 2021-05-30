import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const avatarsBoxStyles = {
  [Layout.DESKTOP]: css`
    display: flex;
    flex-direction: column;
    padding-left: 48px;
    flex: 1;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
    padding-left: 48px;
    //flex: 1;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
  `,
};

export const AvatarsBox = styled.div`
  ${({ theme }) => avatarsBoxStyles[theme.layout]};
`;