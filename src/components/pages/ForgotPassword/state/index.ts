import { useCallback, useState } from 'react';
import { getUserInfo } from 'helpers';

export default function useStarterState() {
  const userInfo = getUserInfo();
  const [activeStep, setActiveStep] = useState<number>(userInfo?.email ? 1 : 0);

  const goNextStep = useCallback(() => {
    setActiveStep((step) => step + 1);
  }, []);

  return { activeStep, goNextStep, setActiveStep };
}
