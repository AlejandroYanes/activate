import { useCallback, useState } from 'react';
import { useAuthData } from 'components/providers/Auth';

export default function useStarterState() {
  const { userInfo } = useAuthData();
  const [activeStep, setActiveStep] = useState<number>(userInfo.verificationLevel);

  const goNextStep = useCallback(() => {
    setActiveStep((step) => step + 1);
  }, []);

  return { activeStep, goNextStep, setActiveStep };
}
