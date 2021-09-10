import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { VerificationLevel } from 'models/user';
import SocialSignInPage from 'components/pages/SocialSignIn';
import { useAuthData } from 'components/providers/Auth';

const SignInRoute: FunctionComponent = () => {
  const { isLoggedIn, userInfo } = useAuthData();
  const isVerified = (
    userInfo &&
    userInfo.verificationLevel === VerificationLevel.INTERESTS_ADDED
  );

  if (isLoggedIn) {
    const to = isVerified ? '/app' : '/starter'
    return (
      <Redirect to={to} />
    );
  }

  return (
    <SocialSignInPage />
  );
};

export default SignInRoute;

