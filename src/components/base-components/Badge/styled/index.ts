import styled from 'styled-components';
import { getEllipsisStyles, getPositionStyles } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';
import { BadgeProps } from '..';

function resolveFontColor({ color, theme }) {
  if (color === 'light') {
    return theme.colors.FONT;
  }

  const colorInScheme = color.toUpperCase();
  return theme.colors[`${colorInScheme}_FONT_HIGHLIGHT`];
}

function resolveBackgroundColor({ color, theme }) {
  switch (color) {
    case 'brand':
      return theme.colors.BRAND_SHADE;
    case 'info':
      return theme.colors.INFO_SHADE;
    case 'success':
      return theme.colors.SUCCESS_SHADE;
    case 'warning':
      return theme.colors.WARNING_SHADE;
    case 'error':
      return theme.colors.ERROR_SHADE;
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
  ${getPositionStyles};
  ${getEllipsisStyles};
  font-size: ${resolveSize};
  color: ${resolveFontColor};
  background-color: ${resolveBackgroundColor};
`;

export const Icon = styled(SvgIcon)`
  margin-right: 4px;
`;
