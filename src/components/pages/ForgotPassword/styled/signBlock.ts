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
    margin: 48px auto;
  `,
  [Layout.MOBILE]: css`
    padding: 0 12px;
    margin: 48px auto;
    display: flex;
    flex-direction: column;
  `,
};

export const SignBox = styled.div.attrs(anyPropsAttrs)`
  ${({ theme }) => signBlockStyleMap[theme.layout]};
`;
