import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const elementBorderRadius = '16px';

const getActionStyles = (props) => {
  const { danger, theme: { colors } } = props;
  const backgroundColor = danger ? colors.ERROR : colors.BRAND;
  const highlightColor = danger ? colors.ERROR_HIGHLIGHT : colors.BRAND_HIGHLIGHT;

  return `
      &:hover {
      cursor: pointer;
      color: ${colors.WHITE};
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
  color: ${({ theme }) => theme.colors.FONT};
  font-size: 1rem;
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
