import React, { FunctionComponent } from 'react';
import { useAppLayout } from 'components/providers/Layout';

interface Props {
  options: { [s: string]: any };
  fallback: any;
  [x: string]: any;
}

const RenderByLayout: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { options, fallback, ...rest } = props;
  const Component = options[layout] || fallback;

  return <Component {...rest} />;
};

export default RenderByLayout;
