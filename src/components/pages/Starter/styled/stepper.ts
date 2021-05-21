import styled from 'styled-components';
import { Layout } from 'components/providers/Layout';
import Stepper from 'components/base-components/Stepper';

const stepperStyles = {
  [Layout.DESKTOP]: 'height: calc(100vh - 84px - 32px);',
  [Layout.TABLET]: 'height: calc(100vh - 84px - 32px);',
  [Layout.MOBILE]: '',
};

export const StyledStepper = styled(Stepper)`
  ${({ theme }) => stepperStyles[theme.layout]};
`;
