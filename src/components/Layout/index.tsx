import { FunctionComponent } from 'react';
import { useAuthData } from 'components/providers/Auth';
import PublicLayout from './Public';
import PrivateLayout from './Private';

const layoutMap = {
  0: PublicLayout,
  1: PrivateLayout,
};

const AppLayout: FunctionComponent = (props) => {
  const { children } = props;
  const { isLoggedIn } = useAuthData();
  const Layout = layoutMap[Number(isLoggedIn)];

  return (
    <Layout>{children}</Layout>
  );
};

export default AppLayout;
