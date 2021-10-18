import React, { FunctionComponent } from 'react';
import Stepper from 'components/base-components/Stepper';
import { Title } from 'components/base-components/Typography';
import { LinkButton } from 'components/base-components/Button';
import SendResetCodeStep from './steps/SendResetCodeStep';
import ResetPasswordStep from './steps/ResetPasswordStep';
import useForgotPasswordState from './state';
import { Message, Content, SignBox } from './styled';

const ForgotPasswordPage: FunctionComponent = () => {
  const { activeStep, goNextStep } = useForgotPasswordState();

  return (
    <Content>
      <Stepper activeStep={activeStep}>
        <SendResetCodeStep onSuccess={goNextStep} />
        <ResetPasswordStep />
      </Stepper>
      <SignBox>
        <Title>Login to your Account</Title>
        <Message>
          If you have an account and remember your current password,
          please click the button below to login instead.
        </Message>
        <LinkButton
          to="/sign"
          label="Go to login"
          variant="outline"
          color="brand"
        />
      </SignBox>
    </Content>
  );
};

export default ForgotPasswordPage;
