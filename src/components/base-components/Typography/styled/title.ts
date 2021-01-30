import styled from 'styled-components';
import { anyPropsAttrs, getMargins } from 'helpers';

const sizeMap = {
  1: '32px',
  2: '26px',
  3: '20px',
};

const getColorFromColor = (props) => {
  const { theme: { colors }, color } = props;
  return `color: ${colors[color.toUpperCase()]}`;
};

const getWeight = ({ bold }) => `font-weight: ${bold ? 600 : 500}`;

export const Title = styled.h1.attrs(anyPropsAttrs)`
  font-size: ${({ level }) => sizeMap[level]};
  text-align: ${({ align }) => align};
  ${getColorFromColor};
  ${getWeight};
  ${getMargins};
`;
