import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ spaced }: any) => spaced ? '32px' : '0px'};
  `,
  [Layout.MIDDLE]: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ spaced }: any) => spaced ? '32px' : '0px'};
  `,
  [Layout.SMALL]: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px 8px 16px;
  `,
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  ${({ layout }) => layoutMap[layout]};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
