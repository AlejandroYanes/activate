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
  email: string;
  avatar?: string;
  verificationLevel: VerificationLevel;
}

export interface UserInfo extends ProfileDto {
  sub: string;
  fullName: string;
  accessToken: string;
}
