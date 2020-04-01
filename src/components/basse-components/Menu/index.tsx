import React from 'react';
import PropTypes from 'prop-types';

export default function Menu(props) {
  const { trigger: MenuTrigger } = props;

  return (
    <div>
      <MenuTrigger />
    </div>
  );
}

Menu.propTypes = {
  trigger: PropTypes.node.isRequired,
};
