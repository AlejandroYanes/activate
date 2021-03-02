import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Label } from './label';
import { Mark } from './mark';

const getWidthStyles = (props) => {
  const { compact, selected } = props;

  if (!compact || selected) {
    return css`flex: 1`;
  }

  return css`flex: 0`;
};

const getColorStyles = (props) => {
  const { selected, disableFocus, theme: { colors } } = props;

  const basicStyles = css`
    ${Label} {
      color: ${selected ? colors.BRAND_FONT : colors.FONT_SECONDARY};
    }

    ${Mark} {
      background-color: ${colors.BRAND_FONT};
    }

    &:focus {
      outline: none;
    }
  `;

  if (disableFocus) {
    return basicStyles;
  }

  return css`
    ${basicStyles};

    &:hover, &:focus {
      outline: none;
      background-color: ${colors.BRAND_SHADE};

      ${Label} {
        color: ${colors.BRAND_FONT_HIGHLIGHT};
      }

      ${Mark} {
        background-color: ${colors.BRAND_FONT_HIGHLIGHT};
      }
    }
  `;
};

export const StyledTab = styled.li.attrs(anyPropsAttrs)`
  position: relative;
  padding: 8px 12px;
  margin: 0 6px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 44px;
  ${getWidthStyles};
  ${getColorStyles};
  transition: all 150ms linear;

  &:last-child {
    margin-right: 0;
  }
`;
