import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';
import { BadgeProps } from '..';

function resolveFontColor({ color }: BadgeProps) {
  if (color === 'light') {
    return Colors.DARK;
  }

  return Colors.WHITE;
}

function resolveBackgroundColor({ color }: BadgeProps) {
  switch (color) {
    case 'brand':
      return Colors.BRAND_DARK;
    case 'info':
      return Colors.INFO;
    case 'success':
      return Colors.SUCCESS_DARK;
    case 'warning':
      return Colors.WARNING;
    case 'error':
      return Colors.ERROR_DARK;
    case 'light':
      return Colors.GRAY_SHADE;
    default:
      return Colors.BRAND;
  }
}

function resolveSize({ sm }: BadgeProps) {
  return sm ? '12px' : '16px';
}

export const StyledBadge = styled.div.attrs((props: any) => props)`
  padding: 6px 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getMargins};
  font-size: ${resolveSize};
  color: ${resolveFontColor};
  background-color: ${resolveBackgroundColor};
`;

export const Icon = styled(SvgIcon)`
  margin-right: 4px;
`;
