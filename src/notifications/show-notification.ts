import { EventChannelList, notifyEventChannel } from 'event-center';
import { generateUID } from 'helpers';
import { NotificationDuration, NotificationModel, NotificationType } from './types';

const defaultValues = {
  type: NotificationType.INFO,
  duration: NotificationDuration.SHORT,
};

export function showNotification(notification: NotificationModel): string {
  const notificationId = generateUID();
  notifyEventChannel(
    EventChannelList.PUSHED_NOTIFICATION,
    { ...defaultValues, id: notificationId, ...notification },
  );

  return notificationId;
}
