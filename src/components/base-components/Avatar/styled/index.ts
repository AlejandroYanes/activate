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

export const StyledAvatar = styled.div.attrs(anyPropsAttrs)`
  ${getSizeStyles};
  ${getPositionStyles};
  border-radius: 50%;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  & > svg {
    ${getSizeStyles};
  }

  & > img {
    ${getSizeStyles};
  }
`;
