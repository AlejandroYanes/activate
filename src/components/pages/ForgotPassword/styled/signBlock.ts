import styled, {css} from 'styled-components';
import {anyPropsAttrs} from 'helpers';
import {Layout} from 'components/providers/Layout';

const signBlockStyleMap = {
  [Layout.DESKTOP]: css`
    display: flex;
    flex-direction: column;
    width: 490px;
    margin: 0 auto;
  `,
  [Layout.TABLET]: css`
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 0 auto;
  `,
  [Layout.MOBILE]: css`
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
  `,
};

export const SignBox = styled.div.attrs(anyPropsAttrs)`
  ${({ layout }) => signBlockStyleMap[layout]};
`;
