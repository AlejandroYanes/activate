import styled from 'styled-components';
import { getMargins } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';
import { BadgeProps } from '..';

function resolveFontColor({ color, theme }) {
  if (color === 'light') {
    return theme.colors.FONT;
  }

  return theme.colors.WHITE;
}

function resolveBackgroundColor({ color, theme }) {
  switch (color) {
    case 'brand':
      return theme.colors.BRAND_DARK;
    case 'info':
      return theme.colors.INFO;
    case 'success':
      return theme.colors.SUCCESS_DARK;
    case 'warning':
      return theme.colors.WARNING;
    case 'error':
      return theme.colors.ERROR_DARK;
    case 'light':
      return theme.colors.GRAY_SHADE;
    default:
      return theme.colors.BRAND;
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
