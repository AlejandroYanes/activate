import { FunctionComponent, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Stepper } from 'activate-components';
import categoriesApi from 'api/categories';
import { QueryKey } from 'components/providers/Query';
import VerificationStep from './steps/VerificationStep';
import ProfileStep from './steps/ProfileStep';
import InterestsStep from './steps/InterestsStep';
import useStarterState from './state';

const StarterPage: FunctionComponent = () => {
  const { activeStep, goNextStep } = useStarterState();
  const queryClient = useQueryClient();

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    queryClient.prefetchQuery(QueryKey.FETCH_CATEGORIES, categoriesApi.getTree);
  }, []);

  return (
    <Stepper activeStep={activeStep}>
      <VerificationStep onSuccess={goNextStep} />
      <ProfileStep onSuccess={goNextStep} />
      <InterestsStep />
    </Stepper>
  );
};

export default StarterPage;
