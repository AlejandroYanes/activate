import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const contentStyleMap = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column-reverse;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column-reverse;
  `,
};

export const Content = styled.section.attrs(anyPropsAttrs)`
  ${({ layout }) => contentStyleMap[layout]};
`;

const rightBlockStyleMap = {
  [Layout.DESKTOP]: css`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 0 0 64px;
  `,
  [Layout.TABLET]: css`
    width: 100%;
    max-width: 620px;
    padding: 0 48px;
    margin: 0 auto;
  `,
  [Layout.MOBILE]: css`
    width: 100%;
    padding: 0 12px;
  `,
};

export const SignBox = styled.div.attrs(anyPropsAttrs)`
  ${({ layout }) => rightBlockStyleMap[layout]};
`;

const oAuthBoxStyleMap = {
  [Layout.DESKTOP]: css`
    display: flex;
    flex-direction: column;
    margin: 50px 0 0 0;

    & > span {
      padding: 0 0 20px 0;
      text-align: center;
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
    margin: 60px 0 0 0;

    & > span {
      padding: 0 0 20px 0;
      text-align: center;
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
    margin: 60px 0 0 0;

    & > span {
      padding: 0 0 20px 0;
      text-align: center;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      & > button:first-child {
        margin-bottom: 20px;
      }
    }
  `,
};

export const OAuthBox = styled.div.attrs(anyPropsAttrs)`
  ${({ layout }) => oAuthBoxStyleMap[layout]};
`;
