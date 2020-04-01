import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

export default function Button(props) {
  const { label, onClick, variant, align, type, className, style } = props;
  const buttonClassName = classnames('button', variant, align, className);

  return (
    <button
      className={buttonClassName}
      style={style}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'transparent']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: 'button',
  className: undefined,
  style: undefined,
  variant: 'primary',
  align: 'center',
};
