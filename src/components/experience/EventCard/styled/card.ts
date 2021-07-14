import styled, { css } from 'styled-components';
import { Layout } from 'components/providers/Layout';

const stylesMap = {
  [Layout.DESKTOP]: css`
    margin-bottom: 64px;
    padding: 16px;
  `,
  [Layout.TABLET]: css`
    margin-bottom: 64px;
    padding: 16px;
  `,
  [Layout.MOBILE]: css`
    margin-bottom: 32px;
    padding: 8px;
  `,
};

const getBorderColor = ({ isBooked, theme }) => (
  isBooked ? theme.colors.ACCENT : theme.colors.BACKGROUND
);

export const Card = styled.article.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${({  theme: { layout } }) => stylesMap[layout]};
  border: 1px solid ${getBorderColor};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.main`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 2px;
  margin: 8px 0;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};
`;
