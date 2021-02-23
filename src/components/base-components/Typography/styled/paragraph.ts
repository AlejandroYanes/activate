import styled from 'styled-components';
import { anyPropsAttrs, getMargins } from 'helpers';

const sizeMap = {
  small: 'font-size: 12px; line-height: 20px;',
  medium: 'font-size: 16px; line-height: 24px;',
  large: 'font-size: 20px; line-height: 28px;',
};

export const Paragraph = styled.p.attrs(anyPropsAttrs)`
  ${({ size }) => sizeMap[size]};
  ${getMargins};
  padding: 0 6px;
`;
