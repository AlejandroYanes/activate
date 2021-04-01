import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Panel from './Panel';

const layoutMap = {
  [Layout.DESKTOP]: Panel,
  [Layout.TABLET]: () => null,
};

const SidePanel: FunctionComponent = () => {
  const layout = useAppLayout();
  const PanelComponent = layoutMap[layout];

  return (
    <PanelComponent />
  );
};

export default SidePanel;
