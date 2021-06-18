import { AppTheme } from 'components/providers/Theme';

export interface AuthCredentials {
  email: string;
  password: string;
}

export enum VerificationLevel {
  UNVERIFIED,
  CODE_VERIFIED ,
  USER_INFO_ADDED,
  INTERESTS_ADDED,
}

export interface ProfileDto {
  name: string;
  lastName: string;
  userName: string;
  email?: string;
  avatar: string;
  theme?: AppTheme;
  useDarkStyle?: boolean;
  verificationLevel?: VerificationLevel;
}

export interface UserInfo extends ProfileDto {
  sub: string;
  accessToken: string;
}

export interface PasswordDto {
  current: string;
  newPassword: string;
}

export interface UserModel {
  id: string;
  userName: string;
  name: string;
  lastName: string;
  avatar: string;
  active?: boolean;
}

export interface PublisherModel extends UserModel {
  events: number;
  followers: number;
  followedByMe: boolean;
}

export interface ConsumerModel extends UserModel {
  following: number;
  friends: number;
  myFriend: boolean;
}
