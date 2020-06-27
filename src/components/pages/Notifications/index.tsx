import React, { FunctionComponent } from 'react';
import Colors from '../../../styles/colors';
import SvgIcon from '../../basse-components/SvgIcon';
import { Icons } from '../../basse-components/SvgIcon/Icons';

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
