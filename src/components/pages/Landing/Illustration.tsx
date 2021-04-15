import { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { ManLookingDown } from 'components/base-components/Illustrations';
import { StyledManLooking, StyledManLookingDown } from './styled/illustrations';

const illustrationMap = {
  [Layout.DESKTOP]: StyledManLooking,
  [Layout.TABLET]: StyledManLookingDown,
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

  return <Component height={height} />;
};

export default Illustration;
