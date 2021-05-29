import React from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { SpinningDots } from 'components/base-components/Loaders';
import { LoadingLayer, Text } from './styled';

export default function Content({ label, rightIcon, leftIcon, loading, children }) {
  if (children) {
    return children;
  }

  if (label) {
    return (
      <>
        {leftIcon}
        <Text show={!loading}>{label}</Text>
        {rightIcon}
        <RenderIf condition={loading}>
          <LoadingLayer show={loading}>
            <SpinningDots size="x-small" color="white" />
          </LoadingLayer>
        </RenderIf>
      </>
    );
  }

  return null;
}
