import styled from 'styled-components';
import { anyPropsAttrs, getMargins } from 'helpers';

const sizeMap = {
  small: '12px',
  medium: '16px',
  large: '20px',
};

const getColor = (props) => {
  const { theme: { colors }, secondary } = props;
  return secondary ? colors.GRAY : colors.FONT;
};

export const Text = styled.span.attrs(anyPropsAttrs)`
  font-size: ${({ size }) => sizeMap[size]};
  font-weight: ${({ weight }) => weight};
  color: ${getColor};
  ${getMargins};
`;
