import React, { FunctionComponent, ReactNode } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { SpinningDots } from 'components/base-components/Loaders';
import { LoadingLayer, Text } from './styled';

interface Props {
  label: string;
  color?: string;
  variant?: 'text' | 'flat' | 'outline' | 'fill';
  rightIcon: ReactNode;
  leftIcon: ReactNode;
  loading: boolean;
}

const Content: FunctionComponent<Props> = (props) => {
  const {
    loading,
    label,
    variant,
    color,
    rightIcon,
    leftIcon,
    children,
  } = props;

  if (children) {
    return children as any;
  }

  if (label) {
    const spinnerColors = variant !== 'fill' ? color : 'white';

    return (
      <>
        {leftIcon}
        <Text show={!loading}>{label}</Text>
        {rightIcon}
        <RenderIf condition={loading}>
          <LoadingLayer show={loading}>
            <SpinningDots size="x-small" color={spinnerColors as any} />
          </LoadingLayer>
        </RenderIf>
      </>
    );
  }

  return null;
}

export default Content;
