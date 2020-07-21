import React from 'react';
import { Label } from './styled';

export default function Content({ label, rightIcon, leftIcon, isLoading, children }) {
  if (children) {
    return children;
  }

  if (isLoading) {
    return (
      <span>is loading</span>
    );
  }

  if (label) {
    return (
      <>
        {leftIcon}
        <Label>{label}</Label>
        {rightIcon}
      </>
    );
  }

  return null;
}
