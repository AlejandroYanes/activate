/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronUpIcon(props) {
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
      <path d="M5 15L12 8L19 15" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

ChevronUpIcon.propTypes = {
  strokeColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

ChevronUpIcon.defaultProps = {
  className: undefined,
  style: undefined,
};
