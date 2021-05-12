import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import Content from './Content';
import { StyledAvatar } from './styled';

export interface AvatarProps extends PositionProps {
  url?: string;
  alt?: string;
  icon?: string;
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
  onClick?: (event) => void;
}

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  const { url, alt, icon, size, onClick, ...rest } = props;


  return (
    <StyledAvatar
      onClick={onClick}
      role={onClick ? 'button' : ''}
      tabIndex={onClick ? 1 : -1}
      size={size}
      {...rest}
    >
      <Content url={url} alt={alt} icon={icon} />
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  icon: 'user1',
  size: 'medium',
  alt: 'user\'s avatar',
};

export default Avatar;
