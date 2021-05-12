import { FunctionComponent } from 'react';
import VerificationStep from './VerificationStep';
import useStarterState from './state';
import ProfileStep from './ProfileStep';
import { StyledStepper } from './styled/stepper';

const StarterPage: FunctionComponent = () => {
  const {
    state: {
      activeStep,
      callingAPI,
    },
    actions: {
      setActiveStep,
      goNextStep,
      verify,
    },
  } = useStarterState();

  return (
    <StyledStepper activeStep={activeStep} onChange={setActiveStep}>
      <VerificationStep
        verify={verify}
        isLoading={callingAPI}
      />
      <ProfileStep onNext={goNextStep} />
      <div>step 3</div>
    </StyledStepper>
  );
};

export default StarterPage;
