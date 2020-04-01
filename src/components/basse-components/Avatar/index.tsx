import React from 'react';
import PropTypes from 'prop-types';
import user1 from '../../../assets/icons/users/user1.svg';
import user2 from '../../../assets/icons/users/user2.svg';
import user3 from '../../../assets/icons/users/user3.svg';
import user4 from '../../../assets/icons/users/user4.svg';
import user5 from '../../../assets/icons/users/user5.svg';
import user6 from '../../../assets/icons/users/user6.svg';
import user7 from '../../../assets/icons/users/user7.svg';
import user8 from '../../../assets/icons/users/user8.svg';
import user9 from '../../../assets/icons/users/user9.svg';
import user10 from '../../../assets/icons/users/user10.svg';
import user11 from '../../../assets/icons/users/user11.svg';
import user12 from '../../../assets/icons/users/user12.svg';

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

export default function Avatar(props) {
  const { icon, height, width } = props;

  return (
    <img style={{ width: `${width}px`, height: `${height}px` }} src={icons[icon]} alt="user's avatar" />
  );
}

Avatar.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Avatar.defaultProps = {
  icon: 'user1',
  width: 48,
  height: 48,
};
