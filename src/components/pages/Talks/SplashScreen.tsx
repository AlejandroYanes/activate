import React, { FunctionComponent } from 'react';
import { SvgIcon, Title } from 'activate-components';
import { StyledSplashScreen } from './styled';

const SplashScreen: FunctionComponent = () => {
  return (
    <StyledSplashScreen>
      <SvgIcon icon="MESSAGE" color="BRAND_FONT" size="page" />
      <Title mT level={1} color="brand">Select a Talk</Title>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
