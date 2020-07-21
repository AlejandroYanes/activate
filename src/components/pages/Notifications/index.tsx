import React, { FunctionComponent, useMemo } from 'react';
import { StyledNotifications } from './styled';
import { notifications } from './notifications';
import Alert from 'components/base-components/Alert';
import { generateUID } from 'helpers/generators';

function notificationFactory() {
  return notifications.map((not) => <Alert key={generateUID()} {...not} mb />);
}

const NotificationsPanel: FunctionComponent = () => {
  const notificationCards = useMemo(notificationFactory, []);
  return (
    <StyledNotifications>
      {notificationCards}
    </StyledNotifications>
  );
};

export default NotificationsPanel;
