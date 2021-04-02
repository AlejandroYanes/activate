import styled, { css } from 'styled-components';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.DESKTOP]: css`
    height: 100%;
    width: ${cardWidth};
    margin-bottom: 32px;
  `,
  [Layout.TABLET]: css`
    height: 100%;
    width: 90%;
    max-width: ${cardWidth};
    margin-bottom: 32px;
  `,
  [Layout.MOBILE]: css`
    width: 100%;
    height: 100%;
  `,
};

export const StyledPage = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  ${({ layout }) => layoutMap[layout]};
`;

export const Content = styled.section`
  flex: 1;
  overflow: hidden auto;
  padding: 16px 6px 96px 6px;
`;
