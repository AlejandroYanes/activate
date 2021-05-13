import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const stylesMap = {
  [Layout.DESKTOP]: `
    padding: 32px 0 32px 32px;
    width: 122px;
  `,
  [Layout.TABLET]: `
    padding: 32px 0 32px 16px;
    width: 106px;
  `,
};

export const SideMenu = styled.aside.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ layout }) => stylesMap[layout]};
`;
