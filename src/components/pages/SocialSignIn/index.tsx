import React, { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { LoadingScreen } from 'components/experience/Screens';
import useSocialSignInPageState from './state';

const SocialSignInPage: FunctionComponent = () => {
  const { state: { callingApi } } = useSocialSignInPageState();

  return (
    <RenderIf condition={callingApi}>
      <LoadingScreen />
    </RenderIf>
  );
};

export default SocialSignInPage;
