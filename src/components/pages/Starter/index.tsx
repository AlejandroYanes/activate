import { FunctionComponent } from 'react';
import VerificationStep from './steps/VerificationStep';
import ProfileStep from './steps/ProfileStep';
import useStarterState from './state';
import { StyledStepper } from './styled/stepper';

const StarterPage: FunctionComponent = () => {
  const {
    state: {
      activeStep,
      callingAPI,
    },
    actions: {
      setActiveStep,
      // goNextStep,
      verify,
      updateProfile,
    },
  } = useStarterState();

  return (
    <StyledStepper activeStep={activeStep} onChange={setActiveStep}>
      <VerificationStep
        verify={verify}
        isLoading={callingAPI}
      />
      <ProfileStep onNext={updateProfile} isLoading={callingAPI} />
      <div>step 3</div>
    </StyledStepper>
  );
};

export default StarterPage;
