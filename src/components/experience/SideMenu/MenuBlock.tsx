import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function MenuBlock(props) {
  const { selected, label, onClick } = props;
  const blockTopClassName = classnames(
    'app-side-menu__block--top',
    {
      selected,
    },
  );
  const blockContentClassName = classnames('app-side-menu__block__content', { selected });
  const blockBottomClassName = classnames(
    'app-side-menu__block--bottom',
    {
      selected,
    },
  );

  return (
    <li className="app-side-menu__block" onClick={onClick}>
      <div className={blockTopClassName}>
        <div />
      </div>
      <div className={blockContentClassName}>
        <span>{label}</span>
      </div>
      <div className={blockBottomClassName}>
        <div />
      </div>
    </li>
  );
}

MenuBlock.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

MenuBlock.defaultProps = {
  selected: false,
};
