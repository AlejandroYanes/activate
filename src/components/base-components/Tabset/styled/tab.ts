import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Label } from './label';
import { Mark } from './mark';

// const enterAnimation = keyframes`
//   0% {
//     flex: 0;
//     margin: 0;
//     padding: 0;
//     min-width: 0;
//   }
//
//   10% {
//     flex: 0;
//     margin: 0;
//     padding: 0;
//     min-width: 0;
//   }
//
//
//   100% {
//     flex: 1;
//     padding: 8px 12px;
//     margin: 0 6px 0 0;
//     min-width: 80px;
//   }
// `;
//
// const enterCompactAnimation = keyframes`
//   0% {
//     flex: 0;
//     margin: 0;
//     padding: 0;
//     min-width: 0;
//   }
//
//   10% {
//     flex: 0;
//     margin: 0;
//     padding: 0;
//     min-width: 0;
//   }
//
//   100% {
//     padding: 8px 12px;
//     margin: 0 6px 0 0;
//     min-width: 20px;
//   }
// `;
//
// const getAnimation = (props) => {
//   const { animateEntrance, compact } = props;
//
//   if (animateEntrance) {
//     if (compact) {
//       return css`
//         animation: ${enterCompactAnimation} 166ms linear;
//       `;
//     }
//
//     return css`
//         animation: ${enterAnimation} 166ms linear;
//       `;
//   }
// };

const getWidthStyles = (props) => {
  const { compact, selected } = props;

  if (!compact || selected) {
    return css`flex: 1`;
  }

  return css`flex: 0`;
};

const getSelectedStyles = (props) => {
  const { selected, theme } = props;

  if (selected) {
    return css`
      ${Label} {
        color: ${theme.colors.BRAND}
      }
    `;
  }
  return '';
};

const getHoverStyles = (props) => {
  const { disableFocus, selected, theme: { colors, useDarkStyle } } = props;

  if (disableFocus) {
    return '';
  }

  const markColor = useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;

  return css`
    background-color: ${colors.BRAND_SHADE};

    ${Label}{
      color: ${useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK};
    }

    ${Mark}{
      background-color: ${selected ? markColor : 'none'};
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
  min-width: 64px;
  ${getWidthStyles};
  ${getSelectedStyles};
  transition: all 150ms linear;

  &:hover, &:focus {
    outline: none;
    ${getHoverStyles};
  }

  &:last-child {
    margin-right: 0;
  }
`;
