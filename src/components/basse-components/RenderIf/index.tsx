import React, { FunctionComponent } from 'react';
import './styles.scss';

interface Props {
  condition: boolean;
  fallback?: any;
  asPortal?: boolean;
}

const RenderIf: FunctionComponent<Props> = (props) => {
  const {
    children,
    condition,
    fallback,
  } = props;

  if (condition) {
    return children;
  }
  if (fallback) {
    if (typeof fallback === 'string') {
      return (
        <div className="lpm-render-if__fallback-wrapper">
          {fallback}
        </div>
      );
    }
    return fallback;
  }
  return null;
};

export default RenderIf;
