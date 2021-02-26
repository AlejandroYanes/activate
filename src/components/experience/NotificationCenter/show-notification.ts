import { EventChannelList, notifyEventChannel } from 'event-center';
import { NotificationDuration, NotificationModel, NotificationType } from './types';

const defaultValues = {
  type: NotificationType.INFO,
  duration: NotificationDuration.SHORT,
};

export function showNotification(notification: NotificationModel) {
  notifyEventChannel(
    EventChannelList.PUSHED_NOTIFICATION,
    { ...defaultValues, ...notification },
  );
}
