import styled from 'styled-components';
import { anyPropsAttrs, getFontColor } from 'helpers';

const elementBorderRadius = '16px';

const getActionStyles = (props) => {
  const { danger, theme: { colors } } = props;
  const backgroundColor = danger ? colors.ERROR_BG : colors.BRAND_BG;
  const highlightColor = danger ? colors.ERROR_BG_HIGHLIGHT : colors.BRAND_BG_HIGHLIGHT;

  return `
      &:hover {
      cursor: pointer;
      color: ${colors.BACKGROUND_LIGHTER};
      background-color: ${backgroundColor};
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
  padding: 0 8px;
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

  span {
    margin-bottom: 2px;
  }
`;
