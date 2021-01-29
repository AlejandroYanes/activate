import styled from 'styled-components';

const sizeMap = { large: '210px', medium: '160px', small: '110px' };

export const StyledItem = styled.li.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: ${({ size }) => sizeMap[size]};
  width: ${({ size }) => sizeMap[size]};
`;

export const Mark = styled.div.attrs((props: any) => props)`
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
  transition: all 100ms linear;
  background-color: ${({ theme, color }) => theme.colors[color.toUpperCase()]};

  & > * {
    transform: rotate(-45deg);
    margin-right: 10px;
  }
`;

const getColorStyles = (props) => {
  const { theme: { useDarkStyle, colors }, color, isSelected } = props;

  if (useDarkStyle) {
    const borderColor = isSelected
      ? colors[color.toUpperCase()]
      : colors.GRAY_DARK;

    const hoverColor = colors[`${color.toUpperCase()}_LIGHT`];

    return `
      border: 2px solid ${borderColor};
      &:hover, &:focus {
        outline: none;
        border-color: ${hoverColor};
        ${Mark} {
          background-color: ${hoverColor};
        }
      }
    `;
  }

  const borderColor = isSelected
    ? colors[color.toUpperCase()]
    : colors.GRAY_LIGHT;

  const hoverColor = colors[`${color.toUpperCase()}_LIGHT`];

  return `
      border: 2px solid ${borderColor};
      &:hover, &:focus {
        outline: none;
        border-color: ${hoverColor};
        ${Mark} {
          background-color: ${hoverColor};
        }
      }
    `;
};

export const Touchable = styled.button.attrs((props: any) => props)`
  height: 100%;
  width: 100%;
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  ${getColorStyles};
  transition: all 100ms linear;

  &:active {
    transform: scale(0.95);
  }
`;
