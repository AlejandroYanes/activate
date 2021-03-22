import styled, { css } from 'styled-components';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    height: 100%;
    width: ${cardWidth};
    margin-bottom: 32px;
  `,
  [Layout.MIDDLE]: css`
    width: 90%;
    height: 100%;
    max-width: ${cardWidth};
    margin-bottom: 32px;
  `,
  [Layout.SMALL]: css`
    width: 100%;
    height: 100%;
  `,
};

export const StyledPage = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  ${({ layout }) => layoutMap[layout]};
`;

const withTabBarStyles = {
  true: 'padding: 0 6px 96px 6px;',
  false: 'padding: 0 6px 16px 6px;',
};

const asModalStyles = {
  true: 'padding-top: 0',
  false: 'padding-top: 16px;',
};

const getSpacingStyles = ({ asModal, withTabBar }) => {
  return `
    ${withTabBarStyles[withTabBar]};
    ${asModalStyles[asModal]};
  `;
};

export const Content = styled.section.attrs(anyPropsAttrs)`
  flex: 1;
  overflow: hidden auto;
  ${getSpacingStyles};
`;
