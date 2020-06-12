import React, { FunctionComponent } from 'react';
import SvgIcon from '../../basse-components/SvgIcon';
import { Icons } from '../../basse-components/SvgIcon/Icons';
import { Colors } from '../../basse-components/SvgIcon/colors';

const NotificationsPage: FunctionComponent = () => {
  return (
    <section>
      <header>
        <span>Notifications</span>
        <SvgIcon icon={Icons.BELL} strokeColor={Colors.DARK} />
      </header>
      <main></main>
    </section>
  );
};

export default NotificationsPage;
