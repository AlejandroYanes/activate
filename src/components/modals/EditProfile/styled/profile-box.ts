import styled, { css } from 'styled-components';
import { Layout } from 'activate-components';

const profileBoxStyles = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
  `,
};

export const ProfileBox = styled.div`
  ${({ theme }) => profileBoxStyles[theme.layout]};
`;
