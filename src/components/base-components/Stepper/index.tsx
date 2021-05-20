import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import FlexBox from 'components/base-components/FlexBox';
import Steps from './Steps';
import { StyledStepper, Content } from './styled/stepper';

interface Props extends PositionProps {
  activeStep: number;
  onChange?: (step: number) => void;
}

const Stepper: FunctionComponent<Props> = (props) => {
  const { activeStep, onChange, children, ...rest } = props;
  const steps = React.Children.map(children, (child: any) => child);
  const isValidStep = activeStep >= 0 && activeStep < steps.length;
  const step = isValidStep ? steps[activeStep] : steps[0];

  return (
    <StyledStepper {...rest} data-el="stepper">
      <FlexBox
        as="aside"
        direction="column"
        align="center"
        padding="0 8px"
        data-el="stepper--numbers"
      >
        <Steps
          count={steps.length}
          activeStep={activeStep}
          onChange={onChange}
        />
      </FlexBox>
      <Content data-el="stepper-content">
        {step}
      </Content>
    </StyledStepper>
  );
};

export default Stepper;
