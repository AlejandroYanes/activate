import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const avatarSizes = {
  'x-small': { width: '20px', height: '20px' },
  small: { width: '28px', height: '28px' },
  medium: { width: '36px', height: '36px' },
  large: { width: '64px', height: '64px' },
  'x-large': { width: '86px', height: '86px' },
  'xx-large': { width: '102px', height: '102px' },
};

const getSizeStyles = ({ size }) => avatarSizes[size];

const getClickableStyles = (props) => {
  const { clickable, theme: { colors } } = props;

  if (clickable) {
    return `
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 150ms linear;

      &:active {
        transform: scale(0.9);
      }

      &:focus {
        outline: none;
        border-color: ${colors.ACCENT};
      }
    `;
  }

  return `
      &:focus {
        outline: none;
      }
  `;
};

export const StyledAvatar = styled.div.attrs(anyPropsAttrs)`
  border-radius: 50%;
  box-sizing: content-box;
  overflow: hidden;
  ${getSizeStyles};
  ${getClickableStyles};
  ${getPositionStyles};

  & > svg {
    ${getSizeStyles};
  }

  & > img {
    ${getSizeStyles};
  }
`;
