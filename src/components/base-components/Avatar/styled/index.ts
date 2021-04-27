import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const avatarSizes = {
  'xx-small': { width: '20px', height: '20px' },
  'x-small': { width: '28px', height: '28px' },
  small: { width: '36px', height: '36px' },
  medium: { width: '52px', height: '52px' },
  large: { width: '64px', height: '64px' },
  'x-large': { width: '86px', height: '86px' },
  'xx-large': { width: '102px', height: '102px' },
};

const getSizeStyles = ({ size }) => avatarSizes[size];

export const StyledAvatar = styled.span.attrs(anyPropsAttrs)`
  ${getSizeStyles};
  ${getPositionStyles};
  border-radius: 50%;

  &:focus {
    outline: none;
  }

  & > svg {
    ${getSizeStyles};
  }
`;
