export enum EventChannelList {
  PUSHED_NOTIFICATION = 'PUSHED_NOTIFICATION',
  USER_SELECTED_FOR_CHAT = 'USER_SELECTED_FOR_CHAT',
  EVENT_UNFOLLOWED = 'EVENT_UNFOLLOWED',
}

export type EventChannel = keyof (typeof EventChannelList);
