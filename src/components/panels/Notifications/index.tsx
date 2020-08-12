import React, { FunctionComponent, useMemo } from 'react';
import Notification from './Notification';
import { StyledNotifications } from './styled';
import { notifications } from './notifications';

const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

function notificationFactory() {
  return notifications.map(({ id, ...rest }) => <Notification key={id} {...rest} mB />);
}

const NotificationsPanel: FunctionComponent = () => {
  const notificationCards = useMemo(notificationFactory, []);

  return (
    <StyledNotifications
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {notificationCards}
    </StyledNotifications>
  );
};

export default NotificationsPanel;