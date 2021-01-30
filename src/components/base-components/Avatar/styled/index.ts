import styled from 'styled-components';
import { getMargins } from 'helpers';
import { AvatarProps } from '..';

const avatarStyles = {
  size: {
    'xx-small': { width: '20px', height: '20px' },
    'x-small': { width: '28px', height: '28px' },
    small: { width: '36px', height: '36px' },
    medium: { width: '52px', height: '52px' },
    large: { width: '64px', height: '64px' },
    'x-large': { width: '86px', height: '86px' },
  },
};

const getSizeStyles = (props: AvatarProps) => avatarStyles.size[props.size];

export const StyledAvatar = styled.span.attrs((props: any) => props)`
  ${getSizeStyles};
  ${getMargins};
  border-radius: 50%;

  &:focus {
    outline: none;
  }
`;

export const Img = styled.img.attrs((props: any) => props)`
  ${getSizeStyles}
`;
