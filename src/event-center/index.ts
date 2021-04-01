import { useEffect } from 'react';
import { Subject } from 'rxjs';
import { EventChannelList } from './channels';

export { EventChannelList } from './channels';

const eventCenter = {};

export function listenToEventChannel(channel: EventChannelList, observer) {
  if (!eventCenter[channel]) {
    eventCenter[channel] = new Subject();
  }
  return eventCenter[channel].subscribe(observer);
}

export function notifyEventChannel(channel: EventChannelList, payload?) {
  if (eventCenter[channel]) {
    eventCenter[channel].next(payload);
  }
}

export function useEventCenterUpdates(channelList: EventChannelList[], observer) {
  useEffect(() => {
    const subscriptions = channelList.map(
      (channel) => listenToEventChannel(channel, observer)
    );
    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe());
    };
  }, [observer, channelList]);
}

export function useEventCenterUpdate(channel: EventChannelList, observer) {
  useEffect(() => {
    const subscription = listenToEventChannel(channel, observer);
    return () => {
      subscription.unsubscribe();
    };
  }, [observer, channel]);
}
