import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { VerificationLevel } from 'models/user';
import { PublicLayout } from 'components/Layout';
import { useAuthData } from 'components/providers/Auth';
import ForgotPasswordPage from 'components/pages/ForgotPassword';

const ForgotPasswordRoute: FunctionComponent = () => {
  const { isLoggedIn, userInfo } = useAuthData();
  const isVerified = (
    userInfo &&
    userInfo.verificationLevel === VerificationLevel.INTERESTS_ADDED
  );

  if (isLoggedIn && isVerified) {
    return (
      <Redirect to="/app" />
    );
  }

  return (
    <PublicLayout>
      <ForgotPasswordPage />
    </PublicLayout>
  );
};

export default ForgotPasswordRoute;

