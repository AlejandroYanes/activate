import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  [Layout.MIDDLE]: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  [Layout.SMALL]: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `,
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  ${({ layout }) => layoutMap[layout]};
   margin-bottom: ${({ spaced }) => spaced ? '32px' : '0px'};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
