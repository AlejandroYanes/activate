import React from 'react';
import StyledLabel from './styled/label';

export default function Content({ label, rightIcon, leftIcon, isLoading, children }) {
  if (children) {
    return children;
  }

  if (isLoading) {
    return (
      <span>is loading </span>
    );
  }

  if (!!label) {
    return (
      <>
        {leftIcon}
        <StyledLabel>{label}</StyledLabel>
        {rightIcon}
      </>
    );
  }

  return null;
}
