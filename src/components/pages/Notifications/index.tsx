import React, { FunctionComponent, useMemo } from 'react';
import { StyledNotifications } from './styled';
import { notifications } from './notifications';
import Alert from 'components/base-components/Alert';

function notificationFactory() {
  return notifications.map(not => <Alert {...not} mb />);
}

const NotificationsPage: FunctionComponent = () => {
  const notificationCards = useMemo(notificationFactory, []);
  return (
    <StyledNotifications>
      {notificationCards}
    </StyledNotifications>
  );
};

export default NotificationsPage;
