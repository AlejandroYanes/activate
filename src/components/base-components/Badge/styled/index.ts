import styled, { css } from 'styled-components';
import { Variations } from 'styles/colors';
import { elementHeight } from 'styles/variables';
import { getColorVariation, getEllipsisStyles, getPositionStyles } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';

function resolveFontColor(props) {
  const { color, theme: { colors } } = props;

  if (color === 'light') {
    return colors.FONT;
  }

  return getColorVariation(colors, color, Variations.FONT_HIGHLIGHT);
}

function resolveBackgroundColor(props) {
  const { color, theme: { colors } } = props;

  if (color === 'light') {
    return colors.GRAY_SHADE;
  }

  return getColorVariation(colors, color, Variations.SHADE);
}

function resolveSize(props) {
  const { sm } = props;
  return sm ? '13px' : '16px';
}

function resolveButtonStyles(props) {
  const { sm, asButton } = props;

  if (asButton) {
    return sm
      ? css`
        min-width: 28px;
        height: 28px;
        border-radius: 100px;
        padding: 0 18px;
        font-family: Roboto-Bold, sans-serif;
      `
      : css`
        min-width: ${elementHeight};
        height: ${elementHeight};
        border-radius: 100px;
        padding: 0 18px;
        font-family: Roboto-Bold, sans-serif;
      `;
  }

  return '';
}

export const StyledBadge = styled.div.attrs((props: any) => props)`
  padding: 6px 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${resolveSize};
  color: ${resolveFontColor};
  background-color: ${resolveBackgroundColor};
  ${resolveButtonStyles};
  ${getPositionStyles};
  ${getEllipsisStyles};
`;

export const Icon = styled(SvgIcon)`
  margin-right: 4px;
`;
