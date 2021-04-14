import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { headerHeight, mobileHeaderHeight } from 'styles/variables';
import { Layout } from 'components/providers/Layout';

const headerStyleMap = {
  [Layout.DESKTOP]: `
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
  `,
  [Layout.TABLET]: `
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
  `,
  [Layout.MOBILE]: `
    height: ${mobileHeaderHeight}px;
    min-height: ${mobileHeaderHeight}px;
  `,
};

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ layout }) => headerStyleMap[layout]};
`;

const contentStyleMap = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;
    margin-top: 20px;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;

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
    margin: 32px 0;

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
  width: 40%;
  margin-bottom: 32px;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  margin: 0 0 0 auto;
`;
