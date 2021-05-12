import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { VerificationLevel } from 'models/user';
import { useAuthData } from 'components/providers/Auth';
import StarterPage from 'components/pages/Starter';
import { PublicLayout } from '../experience/Layout';

const StarterRoute: FunctionComponent = () => {
  const { isLoggedIn, userInfo } = useAuthData();
  const isVerified = (
    userInfo &&
    userInfo.verificationLevel === VerificationLevel.INTERESTS_ADDED
  );

  if (!isLoggedIn) {
    return (
      <Redirect to="/sign" />
    );
  }

  if (isLoggedIn && isVerified) {
    return (
      <Redirect to="/app" />
    );
  }

  return (
    <PublicLayout>
      <StarterPage />
    </PublicLayout>
  );
};

export default StarterRoute;

