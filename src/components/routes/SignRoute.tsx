import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { VerificationLevel } from 'models/user';
import { useAuthData } from 'components/providers/Auth';
import { PublicLayout } from 'components/experience/Layout';
import SignPage from 'components/pages/Sign';

const SignRoute: FunctionComponent = () => {
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
      <SignPage />
    </PublicLayout>
  );
};

export default SignRoute;

