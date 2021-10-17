import { FunctionComponent } from 'react';
import { Layout, ManLooking, ManLookingDown, useAppLayout } from 'activate-components';

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
