import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const sizeMap = {
  small: '40vw',
  medium: '60vw',
  large: '90vw',
};

const commonStyles = css`
  padding: 16px;
  border-radius: 16px;
  min-height: 150px;
  width: ${({ size }: any) => sizeMap[size]};
`;

const styleMap = {
  small: commonStyles,
  medium: commonStyles,
  large: commonStyles,
  drawer: `
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 480px;
    padding: 0;
  `,
  mobile: `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
  `,
};

export const StyledModal = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${({ size }) => styleMap[size]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden auto;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`;
