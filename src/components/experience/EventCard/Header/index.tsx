import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import PrimaryHeader from './Header.primary';
import MobileHeader from './Header.mobile';

export interface HeaderProps {
  title: string;
  address: string;
  date: Date;
  author: {
    name: string;
    userName: string;
    following: boolean;
  };
}

const componentLayout = {
  [Layout.DESKTOP]: PrimaryHeader,
  [Layout.TABLET]: PrimaryHeader,
  [Layout.MOBILE]: MobileHeader,
};

const Header: FunctionComponent<HeaderProps> = (props) => {
  const layout = useAppLayout();
  const Component = componentLayout[layout];

  return <Component {...props} />;
};

export default Header;
