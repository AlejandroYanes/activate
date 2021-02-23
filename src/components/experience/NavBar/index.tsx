import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import VerticalMenu from './VerticalMenu';
import HorizontalMenu from './HorizontalMenu';

const layoutMap = {
  [Layout.FULL]: VerticalMenu,
  [Layout.MIDDLE]: VerticalMenu,
  [Layout.SMALL]: HorizontalMenu,
};

const NavBar: FunctionComponent = () => {
  const layout = useAppLayout();
  const NavComponent = layoutMap[layout];

  return (
    <NavComponent />
  );
};

export default NavBar;
