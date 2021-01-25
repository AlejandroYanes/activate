import React from 'react';
import { Text } from './styled';

export default function Content({ label, rightIcon, leftIcon, isLoading, children }) {
  if (children) {
    return children;
  }

  if (isLoading) {
    return (
      <Text>is loading</Text>
    );
  }

  if (label) {
    return (
      <>
        {leftIcon}
        <Text>{label}</Text>
        {rightIcon}
      </>
    );
  }

  return null;
}
