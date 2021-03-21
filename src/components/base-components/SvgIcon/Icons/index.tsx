import React from 'react';
import HomeIcon from './Home';
import ChevronUpIcon from './ChevronUp';
import ChevronDownIcon from './ChevronDown';
import ChevronLeftIcon from './ChevronLeft';
import ChevronRightIcon from './ChevronRight';
import BellIcon from './Bell';
import SettingsIcon from './Settings';
import LogoutIcon from './Logout';
import UserIcon from './User';
import UsersIcon from './Users';
import HeartIcon from './Heart';
import HeartFilledIcon from './HeartFilled';
import ShareIcon from './Share';
import ShareFilledIcon from './ShareFilled';
import SearchIcon from './Search';
import SuccessIcon from './Success';
import InfoIcon from './Info';
import InfoCircleIcon from './InfoCircle';
import WarningIcon from './Warning';
import ErrorIcon from './Error';
import GridIcon from './Grid';
import CalendarFilledIcon from './CalendarFilled';
import MapPinIcon from './MapPin';
import ClockIcon from './Clock';
import CompassIcon from './Compass';
import CloseIcon from './Close';
import BookmarkIcon from './Bookmark';
import BookmarksIcon from './Bookmarks';
import BookmarkAddIcon from './AddBookmark';
import BookmarkFilledIcon from './BookmarkFilled';
import FireIcon from './Fire';
import PublicityIcon from './Publicity';
import MegaphoneIcon from './Megaphone';
import TicketIcon from './Ticket';
import GlobeIcon from './Globe';
import ForwardIcon from './Forward';
import SendIcon from './Send';
import MoreVrtIcon from './MoreVrt';
import FilterIcon from './Filter';
import FormIcon from './Form';
import CommentsIcon from './Comments';
import CreatePenIcon from './CreatePen';
import EditPenIcon from './EditPen';
import CheckMarkIcon from './CheckMark';
import SunIcon from './Sun';
import MoonIcon from './Moon';
import ArrowLeftIcon from './ArrowLeft';
import RemoveBookmarkIcon from './RemoveBookmark';
import LightBulbIcon from './LightBulb';
import InboxIcon from './Inbox';
import ResumeIcon from './Resume';
import StarIcon from './Star';
import BookmarkCheckedIcon from './BookmarkChecked';
import AddUserIcon from './AddUser';
import MessageIcon from './Message';
import MenuDotsIcon from './MenuDots';
import LayersIcon from './Layers';
import GridElementsIcon from './GridElements';
import MaximizeIcon from './Maximize';
import TimeHistoryIcon from './TimeHistory';

export enum Icons {
  HOME = 'home',
  CHEVRON_UP = 'chevronUp',
  CHEVRON_DOWN = 'chevronDown',
  CHEVRON_LEFT = 'chevronLeft',
  CHEVRON_RIGHT = 'chevronRight',
  BELL = 'bell',
  SETTINGS = 'settings',
  LOGOUT = 'logout',
  USER = 'user',
  USERS = 'users',
  HEART = 'heart',
  HEART_FILLED = 'heartFilled',
  SHARE = 'share',
  SHARE_FILLED = 'shareFilled',
  SEARCH = 'search',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  GRID = 'grid',
  CALENDAR_FILLED = 'calendarFilled',
  MAP_PIN = 'mapPin',
  CLOCK = 'clock',
  COMPASS = 'compass',
  INFO_CIRCLE = 'infoCircle',
  CLOSE = 'close',
  BOOKMARK = 'bookmark',
  BOOKMARKS = 'bookmarks',
  ADD_BOOKMARK = 'add-bookmark',
  BOOKMARK_FILLED = 'bookmarkFilled',
  FIRE = 'fire',
  PUBLICITY = 'PUBLICITY',
  MEGAPHONE = 'MEGAPHONE',
  TICKET = 'ticket',
  GLOBE = 'globe',
  FORWARD = 'forward',
  SEND = 'send',
  MORE_VERT = 'more_vert',
  FILTER = 'filer',
  FORM = 'form',
  COMMENTS = 'comments',
  CREATE_PENCIL = 'create-pencil',
  EDIT_PENCIL = 'edit-pencil',
  CHECK_MARK = 'check-mark',
  SUN = 'sun',
  MOON = 'moon',
  ARROW_LEFT = 'arrow-left',
  REMOVE_BOOKMARK = 'remove-bookmark',
  LIGHT_BULB = 'light-bulb',
  INBOX = 'inbox',
  RESUME = 'resume',
  STAR = 'star',
  BOOKMARK_CHECKED = 'bookmark-checked',
  ADD_USER = 'add-user',
  MESSAGE = 'message',
  MENU_DOTS = 'menu-dots',
  LAYERS = 'layers',
  GRID_ELEMENTS = 'grid-elements',
  MAXIMIZE = 'maximize',
  TIME_HISTORY = 'history',
}

export const icons = {
  [Icons.HOME]: (props) => <HomeIcon {...props} />,
  [Icons.CHEVRON_UP]: (props) => <ChevronUpIcon {...props} />,
  [Icons.CHEVRON_DOWN]: (props) => <ChevronDownIcon {...props} />,
  [Icons.CHEVRON_LEFT]: (props) => <ChevronLeftIcon {...props} />,
  [Icons.CHEVRON_RIGHT]: (props) => <ChevronRightIcon {...props} />,
  [Icons.BELL]: (props) => <BellIcon {...props} />,
  [Icons.SETTINGS]: (props) => <SettingsIcon {...props} />,
  [Icons.LOGOUT]: (props) => <LogoutIcon {...props} />,
  [Icons.USER]: (props) => <UserIcon {...props} />,
  [Icons.USERS]: (props) => <UsersIcon {...props} />,
  [Icons.HEART]: (props) => <HeartIcon {...props} />,
  [Icons.HEART_FILLED]: (props) => <HeartFilledIcon {...props} />,
  [Icons.SHARE]: (props) => <ShareIcon {...props} />,
  [Icons.SHARE_FILLED]: (props) => <ShareFilledIcon {...props} />,
  [Icons.SEARCH]: (props) => <SearchIcon {...props} />,
  [Icons.SUCCESS]: (props) => <SuccessIcon {...props} />,
  [Icons.INFO]: (props) => <InfoIcon {...props} />,
  [Icons.INFO_CIRCLE]: (props) => <InfoCircleIcon {...props} />,
  [Icons.WARNING]: (props) => <WarningIcon {...props} />,
  [Icons.ERROR]: (props) => <ErrorIcon {...props} />,
  [Icons.GRID]: (props) => <GridIcon {...props} />,
  [Icons.CALENDAR_FILLED]: (props) => <CalendarFilledIcon {...props} />,
  [Icons.MAP_PIN]: (props) => <MapPinIcon {...props} />,
  [Icons.CLOCK]: (props) => <ClockIcon {...props} />,
  [Icons.COMPASS]: (props) => <CompassIcon {...props} />,
  [Icons.CLOSE]: (props) => <CloseIcon {...props} />,
  [Icons.BOOKMARK]: (props) => <BookmarkIcon {...props} />,
  [Icons.BOOKMARKS]: (props) => <BookmarksIcon {...props} />,
  [Icons.ADD_BOOKMARK]: (props) => <BookmarkAddIcon {...props} />,
  [Icons.BOOKMARK_FILLED]: (props) => <BookmarkFilledIcon {...props} />,
  [Icons.FIRE]: (props) => <FireIcon {...props} />,
  [Icons.PUBLICITY]: (props) => <PublicityIcon {...props} />,
  [Icons.MEGAPHONE]: (props) => <MegaphoneIcon {...props} />,
  [Icons.TICKET]: (props) => <TicketIcon {...props} />,
  [Icons.GLOBE]: (props) => <GlobeIcon {...props} />,
  [Icons.FORWARD]: (props) => <ForwardIcon {...props} />,
  [Icons.SEND]: (props) => <SendIcon {...props} />,
  [Icons.MORE_VERT]: (props) => <MoreVrtIcon {...props} />,
  [Icons.FILTER]: (props) => <FilterIcon {...props} />,
  [Icons.FORM]: (props) => <FormIcon {...props} />,
  [Icons.COMMENTS]: (props) => <CommentsIcon {...props} />,
  [Icons.CREATE_PENCIL]: (props) => <CreatePenIcon {...props} />,
  [Icons.EDIT_PENCIL]: (props) => <EditPenIcon {...props} />,
  [Icons.CHECK_MARK]: (props) => <CheckMarkIcon {...props} />,
  [Icons.SUN]: (props) => <SunIcon {...props} />,
  [Icons.MOON]: (props) => <MoonIcon {...props} />,
  [Icons.ARROW_LEFT]: (props) => <ArrowLeftIcon {...props} />,
  [Icons.REMOVE_BOOKMARK]: (props) => <RemoveBookmarkIcon {...props} />,
  [Icons.LIGHT_BULB]: (props) => <LightBulbIcon {...props} />,
  [Icons.INBOX]: (props) => <InboxIcon {...props} />,
  [Icons.RESUME]: (props) => <ResumeIcon {...props} />,
  [Icons.STAR]: (props) => <StarIcon {...props} />,
  [Icons.BOOKMARK_CHECKED]: (props) => <BookmarkCheckedIcon {...props} />,
  [Icons.ADD_USER]: (props) => <AddUserIcon {...props} />,
  [Icons.MESSAGE]: (props) => <MessageIcon {...props} />,
  [Icons.MENU_DOTS]: (props) => <MenuDotsIcon {...props} />,
  [Icons.LAYERS]: (props) => <LayersIcon {...props} />,
  [Icons.GRID_ELEMENTS]: (props) => <GridElementsIcon {...props} />,
  [Icons.MAXIMIZE]: (props) => <MaximizeIcon {...props} />,
  [Icons.TIME_HISTORY]: (props) => <TimeHistoryIcon {...props} />,
};
