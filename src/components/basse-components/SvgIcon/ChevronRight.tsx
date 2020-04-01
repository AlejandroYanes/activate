/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronRightIcon(props) {
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
      <path
        d="M9.00006 5L16.0001 12L9.00006 19"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ChevronRightIcon.propTypes = {
  strokeColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

ChevronRightIcon.defaultProps = {
  className: undefined,
  style: undefined,
};
