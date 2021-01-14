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
      return Colors.BRAND;
    case 'info':
      return Colors.INFO;
    case 'success':
      return Colors.SUCCESS;
    case 'warning':
      return Colors.WARNING;
    case 'error':
      return Colors.ERROR;
    default:
      return Colors.BRAND_LIGHT;
  }
}

function resolveSize({ sm }: BadgeProps) {
  return sm ? '12px' : '16px';
}

export const StyledBadge = styled.div.attrs((props: any) => props)`
  padding: 6px 10px;
  border-radius: 50px;
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
