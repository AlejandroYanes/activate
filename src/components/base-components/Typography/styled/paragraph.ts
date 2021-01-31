import styled from 'styled-components';
import { anyPropsAttrs, getMargins } from 'helpers';

const sizeMap = {
  small: 'font-size: 12px; line-height: 18px;',
  medium: 'font-size: 16px; line-height: 22px;',
  large: 'font-size: 20px; line-height: 26px;',
};

export const Paragraph = styled.p.attrs(anyPropsAttrs)`
  ${({ size }) => sizeMap[size]};
  ${getMargins};
`;
