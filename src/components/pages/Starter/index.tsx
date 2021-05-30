import { FunctionComponent } from 'react';
import VerificationStep from './steps/VerificationStep';
import ProfileStep from './steps/ProfileStep';
import InterestsStep from './steps/InterestsStep';
import useStarterState from './state';
import { StyledStepper } from './styled';

const StarterPage: FunctionComponent = () => {
  const [activeStep, goNextStep] = useStarterState();

  return (
    <StyledStepper activeStep={activeStep}>
      <VerificationStep onSuccess={goNextStep} />
      <ProfileStep onSuccess={goNextStep} />
      <InterestsStep />
    </StyledStepper>
  );
};

export default StarterPage;
