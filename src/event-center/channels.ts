export enum EventChannelList {
  PUSHED_NOTIFICATION = 'PUSHED_NOTIFICATION',
  USER_SELECTED_FOR_CHAT = 'USER_SELECTED_FOR_CHAT',
  EVENT_UNFOLLOWED = 'EVENT_UNFOLLOWED',
  SHOW_PANEL_SECTION = 'SHOW_PANEL_SECTION',
  REMOVE_PANEL_SECTION = 'REMOVE_PANEL_SECTION',
  SET_ACTIVE_PANEL_SECTION = 'SET_ACTIVE_PANEL_SECTION',
  RESET_PANEL_SECTIONS = 'RESET_PANEL_SECTIONS',
}

export type EventChannel = keyof (typeof EventChannelList);
