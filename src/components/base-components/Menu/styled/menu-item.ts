import styled, { css } from 'styled-components';
import { anyPropsAttrs, getFontColor } from 'helpers';

const elementBorderRadius = '16px';

const getActionStyles = (props) => {
  const { warning, danger, theme: { colors } } = props;
  const backgroundColor = (
    (warning && colors.WARNING_BG) ||
    (danger && colors.ERROR_BG) ||
    colors.BRAND_BG
  );
  const highlightColor = (
    (warning && colors.WARNING_BG_HIGHLIGHT) ||
    (danger && colors.ERROR_BG_HIGHLIGHT) ||
    colors.BRAND_BG_HIGHLIGHT
  );

  return css`
    &:hover {
      cursor: pointer;
      color: ${colors.BACKGROUND_LIGHTER};
      background-color: ${backgroundColor};

      svg > path {
        fill: ${colors.BACKGROUND_LIGHTER};
      }
    }

    &:active {
      background-color: ${highlightColor};
    }
  `;
};

export const MenuItem = styled.li.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  color: ${getFontColor};
  font-size: 16px;
  transition: all 150ms linear;

  &:first-child {
    border-top-right-radius: ${elementBorderRadius};
    border-top-left-radius: ${elementBorderRadius};
  }

  &:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: ${elementBorderRadius};
    border-bottom-left-radius: ${elementBorderRadius};
  }

  ${getActionStyles};
`;

export const MenuItemIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const MenuItemLabel = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;

  span {
    margin-bottom: 2px;
  }
`;
