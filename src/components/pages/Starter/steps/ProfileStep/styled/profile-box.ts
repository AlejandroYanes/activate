import styled, { css } from 'styled-components';
import { Layout } from 'components/base-components/Configuration';

const profileBoxStyles = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;
    padding: 16px 0 0 0;
  `,
  [Layout.TABLET]: css`
    display: flex;
    align-items: stretch;
    padding: 16px 0 0 0;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
    padding: 16px 0 0 0;
  `,
};

export const ProfileBox = styled.div`
  ${({ theme }) => profileBoxStyles[theme.layout]};
`;
