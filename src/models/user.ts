import { AppTheme } from 'components/providers/Theme';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SocialAuthCredentials {
  provider: SocialProvider;
  urlParams: string;
}

export enum VerificationLevel {
  UNVERIFIED = 0,
  CODE_VERIFIED = 1 ,
  USER_INFO_ADDED = 2,
  INTERESTS_ADDED = 3,
}

export enum RelationshipStatus {
  UNRELATED = -1,
  PENDING = 0,
  PENDING_FOR_ME = 5,
  ACCEPTED = 1,
  BLOCKED = 2,
  BLOCKED_ME = 4,
  MUTED = 3,
}

export enum FollowerStatus {
  UNRELATED = -1,
  FOLLOWING = 0,
  MUTED = 1,
  BLOCKED = 2,
}

export interface ProfileDto {
  name: string;
  lastName?: string;
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
  avatar: string;
  active?: boolean;
}

export interface PublisherModel extends UserModel {
  events: number;
  followers: number;
  followerStatus: FollowerStatus;
}

export interface ConsumerModel extends UserModel {
  following: number;
  friends: number;
  relationStatus: RelationshipStatus;
}

export interface ProfileStats {
  friends: number;
  following: number;
}

export enum SocialProvider {
  Google = 'google',
  Facebook = 'facebook',
  Instagram = 'instagram'
}
