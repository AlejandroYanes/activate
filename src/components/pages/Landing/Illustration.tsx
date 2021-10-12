import { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import { ManLooking, ManLookingDown } from 'components/base-components/Illustrations';

const illustrationMap = {
  [Layout.DESKTOP]: ManLooking,
  [Layout.TABLET]: ManLooking,
  [Layout.MOBILE]: ManLookingDown,
};

const sizeMap = {
  [Layout.DESKTOP]: 340,
  [Layout.TABLET]: 340,
  [Layout.MOBILE]: 200,
};

const Illustration: FunctionComponent = () => {
  const layout = useAppLayout();
  const Component = illustrationMap[layout];
  const height = sizeMap[layout];

  return <Component height={height} margin="0 0 32px 0" />;
};

export default Illustration;
