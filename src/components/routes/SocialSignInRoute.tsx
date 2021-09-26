import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { VerificationLevel } from 'models/user';
import { PublicLayout } from 'components/Layout';
import { useAuthData } from 'components/providers/Auth';
import SocialSignInPage from 'components/pages/SocialSignIn';

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
    <PublicLayout>
      <SocialSignInPage />
    </PublicLayout>
  );
};

export default SignInRoute;

