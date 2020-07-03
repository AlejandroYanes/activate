import React, { FunctionComponent } from 'react';
import Colors from '../../../styles/colors';
import SvgIcon from '../../base-components/SvgIcon';
import { Icons } from '../../base-components/SvgIcon/Icons';

const NotificationsPage: FunctionComponent = () => {
  return (
    <section>
      <header>
        <span>Notifications</span>
        <SvgIcon icon={Icons.BELL} strokeColor={Colors.DARK} />
      </header>
      <main>aaaaa</main>
    </section>
  );
};

export default NotificationsPage;
