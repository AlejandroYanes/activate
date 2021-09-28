import { FunctionComponent, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import categoriesApi from 'api/categories';
import { QueryKey } from 'components/providers/Query';
import Stepper from 'components/base-components/Stepper';
import VerificationStep from './steps/VerificationStep';
import ProfileStep from './steps/ProfileStep';
import InterestsStep from './steps/InterestsStep';
import useStarterState from './state';

const StarterPage: FunctionComponent = () => {
  const { activeStep, goNextStep, setActiveStep } = useStarterState();
  const queryClient = useQueryClient();

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    queryClient.prefetchQuery(QueryKey.FETCH_CATEGORIES, categoriesApi.getTree);
  }, []);

  return (
    <Stepper activeStep={activeStep} onChange={setActiveStep}>
      <VerificationStep onSuccess={goNextStep} />
      <ProfileStep onSuccess={goNextStep} />
      <InterestsStep />
    </Stepper>
  );
};

export default StarterPage;
