import styled, { css } from 'styled-components';
import { Layout } from 'activate-components';

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
  position: relative;
  ${({ theme }) => avatarsBoxStyles[theme.layout]};
`;
