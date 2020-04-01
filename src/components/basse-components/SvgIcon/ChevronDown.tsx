/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronDownIcon(props) {
  const { strokeColor, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 9L12 16L5 9" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

ChevronDownIcon.propTypes = {
  strokeColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

ChevronDownIcon.defaultProps = {
  className: undefined,
  style: undefined,
};
