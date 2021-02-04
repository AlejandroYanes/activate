import React from 'react';
import RenderIf from 'components/base-components/RenderIf';
import SpinningDots from 'components/base-components/Loaders/SpinningDots';
import { Text, LoadingLayer } from './styled';

export default function Content({ label, rightIcon, leftIcon, isLoading, children }) {
  if (children) {
    return children;
  }

  if (label) {
    return (
      <>
        {leftIcon}
        <Text show={!isLoading}>{label}</Text>
        {rightIcon}
        <RenderIf condition={isLoading}>
          <LoadingLayer show={isLoading}>
            <SpinningDots size="x-small" flat />
          </LoadingLayer>
        </RenderIf>
      </>
    );
  }

  return null;
}
