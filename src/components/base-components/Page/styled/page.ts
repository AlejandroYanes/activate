import styled, { css } from 'styled-components';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const layoutMap = {
  [Layout.FULL]: css`
    height: 100%;
    width: ${cardWidth};
  `,
  [Layout.MIDDLE]: css`
    width: 90%;
    height: 100%;
    max-width: ${cardWidth};
  `,
  [Layout.SMALL]: css`
    max-width: 100%;
  `,
};

export const StyledPage = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  box-sizing: border-box;
  ${({ layout }) => layoutMap[layout]};
`;
