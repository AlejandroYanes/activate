import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const getColumnsTemplate = (props) => {
  const { cols } = props;
  return `grid-template-columns: repeat(${cols}, 1fr);`
};

export const Grid = styled.section.attrs(anyPropsAttrs)`
  display: grid;
  ${getColumnsTemplate};
  justify-content: center;
  justify-items: center;
  gap: 32px;
`;
