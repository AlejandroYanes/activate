import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const sizeMap = { large: '210px', medium: '160px', small: '110px' };

export const StyledItem = styled.li.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: ${({ size }) => sizeMap[size]};
  width: ${({ size }) => sizeMap[size]};

  &:focus {
    outline: none;
  }
`;

const getColorStyles = (props) => {
  const {
    theme: {
      colors,
    },
    color,
    dashed,
    readonly,
    isSelected,
  } = props;

  const colorInScheme = color.toUpperCase();
  const borderColor = isSelected
    ? colors[colorInScheme]
    : colors.FONT_SHADE;

  const bgColor = colors[`${colorInScheme}_SHADE`];
  const hoverColor = colors[`${colorInScheme}_HIGHLIGHT`];

  if (readonly) {
    return css`
      cursor: default;
      border: 1px ${dashed ? 'dashed' : 'solid'} ${borderColor};

      & > div[data-el="pick_item-mark"] {
        background-color: ${colors[colorInScheme]};
      }
    `;
  }

  return css`
    cursor: pointer;
    border: 1px ${dashed ? 'dashed' : 'solid'} ${borderColor};

    & > div[data-el="pick_item-mark"] {
      background-color: ${colors[colorInScheme]};
    }

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      border-color: ${hoverColor};
      background-color: ${bgColor};
    }

    &:focus {
      outline: none;
      border-color: ${hoverColor};

      & > div[data-el="pick_item-mark"] {
        background-color: ${hoverColor};
      }
    }
  `;
};

export const Touchable = styled.button.attrs(anyPropsAttrs)`
  height: 100%;
  width: 100%;
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  font-family: Comfortaa, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${getColorStyles};
  transition: all 100ms linear;
`;

export const Mark = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  width: 88px;
  height: 48px;
  right: -44px;
  top: -16px;
  transform: rotate(45deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all 150ms linear;

  & > * {
    transform: rotate(-45deg);
    margin-right: 10px;
  }
`;
