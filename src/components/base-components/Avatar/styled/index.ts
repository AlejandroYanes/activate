import styled from 'styled-components';
import { AvatarProps } from '..';

const avatarStyles = {
  size: {
    'x-small': { width: '28px', height: '28px' },
    small: { width: '48px', height: '48px' },
    medium: { width: '52px', height: '52px' },
    large: { width: '64px', height: '64px' },
    'x-large': { width: '86px', height: '86px' },
  },
};

const getSizeStyles = (props: AvatarProps) => avatarStyles.size[props.size];

export const StyledAvatar = styled.span.attrs((props: AvatarProps) => props)`
  ${getSizeStyles}

  &:focus {
    outline: none;
  }
`;

export const Img = styled.img.attrs((props: AvatarProps) => props)`
  ${getSizeStyles}
`;
