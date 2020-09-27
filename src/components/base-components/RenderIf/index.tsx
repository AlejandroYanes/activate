import React, { FunctionComponent } from 'react';
import './styles.scss';

interface Props {
  condition: boolean;
  asPortal?: boolean;
  fallback?: any;
  content?: any;
  [x: string]: any;
}

const RenderIf: FunctionComponent<Props> = (props) => {
  const {
    children,
    content: Content,
    condition,
    fallback,
    ...rest
  } = props;

  if (condition) {
    return children || <Content {...rest} />;
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
