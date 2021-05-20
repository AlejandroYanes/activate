import { FunctionComponent } from 'react';
import VerificationStep from './steps/VerificationStep';
import ProfileStep from './steps/ProfileStep';
import useStarterState from './state';
import { StyledStepper } from './styled/stepper';
import InterestsStep from './steps/InterestsStep';

const StarterPage: FunctionComponent = () => {
  const {
    state: {
      activeStep,
      callingAPI,
    },
    actions: {
      setActiveStep,
      verify,
      updateProfile,
      goNextStep,
    },
  } = useStarterState();

  return (
    <StyledStepper activeStep={activeStep} onChange={setActiveStep}>
      <VerificationStep
        onVerify={verify}
        isLoading={callingAPI}
      />
      <ProfileStep onNext={updateProfile} isLoading={callingAPI} />
      <InterestsStep onNext={goNextStep} />
    </StyledStepper>
  );
};

export default StarterPage;
