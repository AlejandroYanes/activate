import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

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
    padding: 24px 6px;
  `,
};

export const ProfileBox = styled.div`
  ${({ theme }) => profileBoxStyles[theme.layout]};
`;
