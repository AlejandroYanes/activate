import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const contentStyleMap = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;

    & > div:first-child {
      position: fixed;
    }
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    & > div:first-child {
      width: 100%;
    }

    & > div:last-child {
      margin: 0 auto;
      width: 680px;
    }
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    & > div:first-child {
      width: 100%;
    }

    & > div:last-child {
      margin: 0;
      width: 100%;
    }
  `,
};

export const Content = styled.section.attrs(anyPropsAttrs)`
  ${({ layout }) => contentStyleMap[layout]};
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  flex: 1;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  margin: 0 0 0 auto;
`;

const illustrationStylesMap = {
  [Layout.DESKTOP]: '',
  [Layout.TABLET]: 'height: 200px',
  [Layout.MOBILE]: '',
};

export const IllustrationBox = styled.div.attrs(anyPropsAttrs)`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${({ layout }) => illustrationStylesMap[layout]};
`;
