import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

const getLayoutStyles = (props) => {
  const { theme: { layout } } = props;

  if (layout === Layout.MOBILE) {
    return `
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `;
  }
  return `
    max-width: 1366px;
    margin: 0 auto;
  `;
};

export const App = styled.main.attrs(anyPropsAttrs)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${getLayoutStyles};
`;
