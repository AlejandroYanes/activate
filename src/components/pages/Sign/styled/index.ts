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
    max-width: 524px;
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

export const OAuthBox = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;

  & > span {
    padding: 0 0 20px 0;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: center;

    & > button:first-child {
      margin-right: 16px;
    }
    & > button:last-child {
      margin-left: 16px;
    }
  }
`;
