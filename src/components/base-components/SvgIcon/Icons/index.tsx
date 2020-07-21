import React from 'react';
import HomeIcon from './HomeIcon';
import ChevronUpIcon from './ChevronUp';
import ChevronDownIcon from './ChevronDown';
import ChevronLeftIcon from './ChevronLeft';
import ChevronRightIcon from './ChevronRight';
import BellIcon from './Bell';
import SettingsIcon from './Settings';
import LogoutIcon from './Logout';
import UserIcon from './User';
import HeartIcon from './Heart';
import HeartFilledIcon from './HeartFilled';
import ShareIcon from './Share';
import ShareFilledIcon from './ShareFilled';
import SearchIcon from './Search';
import SuccessIcon from './Success';
import InfoIcon from './Info';
import WarningIcon from './Warning';
import ErrorIcon from './Error';
import GridIcon from './Grid';

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
  [Icons.HEART]: (props) => <HeartIcon {...props} />,
  [Icons.HEART_FILLED]: (props) => <HeartFilledIcon {...props} />,
  [Icons.SHARE]: (props) => <ShareIcon {...props} />,
  [Icons.SHARE_FILLED]: (props) => <ShareFilledIcon {...props} />,
  [Icons.SEARCH]: (props) => <SearchIcon {...props} />,
  [Icons.SUCCESS]: (props) => <SuccessIcon {...props} />,
  [Icons.INFO]: (props) => <InfoIcon {...props} />,
  [Icons.WARNING]: (props) => <WarningIcon {...props} />,
  [Icons.ERROR]: (props) => <ErrorIcon {...props} />,
  [Icons.GRID]: (props) => <GridIcon {...props} />,
};
