import React, { FunctionComponent } from 'react';
import SvgIcon from 'components/base-components/SvgIcon';
import { Title } from 'components/base-components/Typography';
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
