import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import PrimaryHeader from './Header.primary';
import MobileHeader from './Header.mobile';

export interface HeaderProps {
  userName: string;
  name: string;
  events: number;
  followers: number;
}

const headerMap = {
  [Layout.FULL]: PrimaryHeader,
  [Layout.MIDDLE]: PrimaryHeader,
  [Layout.SMALL]: MobileHeader,
};

const Header: FunctionComponent<HeaderProps> = (props) => {
  const layout = useAppLayout();
  const HeaderComponent = headerMap[layout];

  return <HeaderComponent {...props} />;
};

export default Header;
