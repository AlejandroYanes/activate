import React, { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Title } from 'components/base-components/Typography';
import { StyledSplashScreen } from './styled/splash-screen';

const SplashScreen: FunctionComponent = () => {
  const colors = useAppColors();

  return (
    <StyledSplashScreen>
      <SvgIcon icon={Icons.MESSAGE} color={colors.BRAND_FONT} size="page" />
      <Title mT level={2} color="brand">Select a Talk</Title>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
