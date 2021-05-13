import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const getColumns = (props) => {
  const { cols } = props;
  return `grid-template-columns: repeat(${cols}, auto);`;
};

export const Wrapper = styled.ul.attrs(anyPropsAttrs)`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  max-width: 100%;
  padding: 0;
  margin: 0;
  ${getColumns};
  ${getPositionStyles};
`;
