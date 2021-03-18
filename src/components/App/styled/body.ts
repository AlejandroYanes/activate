import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0 0;
    overflow: hidden;
  `,
  [Layout.MIDDLE]: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0 0;
    overflow: hidden;
  `,
  [Layout.SMALL]: css`
    height: 100%;
    max-height: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export const Body = styled.section.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  ${({ layout }) => layoutMap[layout]};
`;
