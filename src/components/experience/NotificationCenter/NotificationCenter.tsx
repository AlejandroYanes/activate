import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { EventChannelList, useEventCenterUpdate } from 'event-center';
import { NotificationModel } from './types';
import Notification from './Notification';
import { Notifications } from './styled/list';

const NotificationCenter: FunctionComponent = () => {
  const [notifications, setNotifications] = useState<NotificationModel[]>([]);

  const handlePushedNotification = useCallback((notification) => {
    setNotifications((old) => old.concat(notification))
  }, []);

  const handleRemoveNotification = useCallback((notificationId: string) => {
    setNotifications((old) => old.filter((n) => n.id !== notificationId));
  }, []);

  useEventCenterUpdate(EventChannelList.PUSHED_NOTIFICATION, handlePushedNotification);

  const notificationCards = useMemo(() => (
    notifications.map((notification) => (
      <Notification
        key={notification.id}
        onClose={handleRemoveNotification}
        {...notification}
      />
    ))
  ), [notifications, handleRemoveNotification]);

  return (
    <Notifications>
      <AnimateSharedLayout>
        <AnimatePresence>
          {notificationCards}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Notifications>
  );
};

export default NotificationCenter;
