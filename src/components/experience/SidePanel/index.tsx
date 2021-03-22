import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import FixedContainer from './FixedContainer';
import FloatingContainer from './FloatingContainer';

const layoutMap = {
  [Layout.FULL]: FixedContainer,
  [Layout.MIDDLE]: FloatingContainer,
  [Layout.SMALL]: () => null,
};

const SidePanel: FunctionComponent = () => {
  const layout = useAppLayout();
  const PanelComponent = layoutMap[layout];

  return (
    <PanelComponent />
  );
};

export default SidePanel;
