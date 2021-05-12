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

export interface UserInfo {
  sub: string;
  email: string;
  userName: string;
  fullName: string;
  avatarUrl: string;
  verificationLevel: VerificationLevel;
  accessToken: string;
}

export interface ProfileDto {
  name?: string;
  lastName?: string;
  email?: string;
  avatarUrl?: string;
  verificationLevel?: VerificationLevel;
}
