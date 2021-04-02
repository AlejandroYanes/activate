import React, { FunctionComponent, ReactNode } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import PrimaryHeader from './Header.primary';
import MobileHeader from './Header.mobile';

export interface HeaderProps {
  title: string;
  actions?: ReactNode;
}

const headerMap = {
  [Layout.DESKTOP]: PrimaryHeader,
  [Layout.TABLET]: PrimaryHeader,
  [Layout.MOBILE]: MobileHeader,
};

const Header: FunctionComponent<HeaderProps> = (props) => {
  const layout = useAppLayout();
  const HeaderComponent = headerMap[layout];

  return <HeaderComponent {...props} />;
};

export default Header;