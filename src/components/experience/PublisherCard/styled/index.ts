import styled from 'styled-components';
import { anyPropsAttrs, getBgdLightColor } from 'helpers';
import { Layout } from 'components/providers/Layout';

const widthMap = {
  [Layout.DESKTOP]: 'width: 320px;',
  [Layout.TABLET]: 'width: 290px;',
  [Layout.MOBILE]: 'width: 320px;',
};

export const Card = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  background-color: ${getBgdLightColor};
  ${({ theme: { layout } }) => widthMap[layout]};
`;
