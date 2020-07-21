/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent } from 'react';
import user1 from 'assets/icons/users/user1.svg';
import user2 from 'assets/icons/users/user2.svg';
import user3 from 'assets/icons/users/user3.svg';
import user4 from 'assets/icons/users/user4.svg';
import user5 from 'assets/icons/users/user5.svg';
import user6 from 'assets/icons/users/user6.svg';
import user7 from 'assets/icons/users/user7.svg';
import user8 from 'assets/icons/users/user8.svg';
import user9 from 'assets/icons/users/user9.svg';
import user10 from 'assets/icons/users/user10.svg';
import user11 from 'assets/icons/users/user11.svg';
import user12 from 'assets/icons/users/user12.svg';
import { StyledAvatar, Img } from './styled';

const icons = {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
  user11,
  user12,
};

export interface AvatarProps {
  icon: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  alt?: string;
  onClick?: (event) => void;
}

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  const { icon, size, alt, onClick } = props;

  return (
    <StyledAvatar onClick={onClick} role="button" tabIndex={0} size={size}>
      <Img alt={alt} src={icons[icon]} size={size} />
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  icon: 'user1',
  size: 'small',
  alt: 'user\'s avatar',
};

export default Avatar;
