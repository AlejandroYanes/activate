import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/providers/Layout';

const stylesMap = {
  [Layout.DESKTOP]: `
    padding: 32px 0 32px 32px;
  `,
  [Layout.TABLET]: `
    padding: 32px 0 32px 16px;
  `,
};

export const SideMenu = styled.aside.attrs(anyPropsAttrs)`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ layout }) => stylesMap[layout]};
`;
