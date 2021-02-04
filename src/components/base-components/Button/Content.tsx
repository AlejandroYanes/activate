import React from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { HorizontalDots } from 'components/base-components/Loaders';
import { LoadingLayer, Text } from './styled';

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
            <HorizontalDots flat size="x-small" />
          </LoadingLayer>
        </RenderIf>
      </>
    );
  }

  return null;
}
